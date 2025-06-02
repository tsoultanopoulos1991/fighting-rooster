'use client'

import { useState, FormEvent, useEffect } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  honeypot: string // Hidden field for bots
  timestamp: number
  clientHash: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // Honeypot field
    timestamp: 0,
    clientHash: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formStartTime, setFormStartTime] = useState(0)

  // Initialize form with timestamp and client hash
  useEffect(() => {
    const startTime = Date.now()
    setFormStartTime(startTime)

    // Simple client hash based on user agent and screen resolution
    const clientHash = btoa(
      `${navigator.userAgent.slice(0, 20)}-${screen.width}x${screen.height}-${startTime}`,
    ).slice(0, 16)

    setFormData((prev) => ({
      ...prev,
      timestamp: startTime,
      clientHash,
    }))
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Client-side validations
    const currentTime = Date.now()
    const timeDiff = currentTime - formStartTime

    // 1. Honeypot check (hidden field should be empty)
    if (formData.honeypot) {
      console.log('Bot detected: Honeypot filled')
      setSubmitStatus('error')
      setErrorMessage('Σφάλμα επικύρωσης')
      setIsSubmitting(false)
      return
    }

    // 2. Time-based check (too fast = bot)
    if (timeDiff < 3000) {
      // Less than 3 seconds
      console.log('Bot detected: Too fast submission')
      setSubmitStatus('error')
      setErrorMessage('Παρακαλώ περιμένετε λίγο πριν την υποβολή')
      setIsSubmitting(false)
      return
    }

    // 3. Basic content validation
    const { name, email, message } = formData
    if (name.length < 2 || message.length < 10) {
      setSubmitStatus('error')
      setErrorMessage('Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submissionTime: currentTime,
          formDuration: timeDiff,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData((prev) => ({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
          timestamp: prev.timestamp,
          clientHash: prev.clientHash,
        }))

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Παρουσιάστηκε σφάλμα')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
      setErrorMessage('Σφάλμα δικτύου. Παρακαλώ δοκιμάστε ξανά.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl">
      <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">Στείλε μας Μήνυμα</h3>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">
            ✅ Το μήνυμά σας εστάλη επιτυχώς! Θα επικοινωνήσουμε σύντομα μαζί σας.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-semibold">❌ {errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - Hidden from users, visible to bots */}
        <div style={{ display: 'none' }}>
          <label htmlFor="website">Website (leave blank):</label>
          <input
            type="text"
            id="website"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Όνομα *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={50}
            pattern="[A-Za-zΑ-Ωα-ωάέήίόύώ\s]+"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="Το όνομά σας"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={100}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Τηλέφωνο
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength={20}
            pattern="[\d\s\-\+\(\)]+"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="+30 XXX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Μήνυμα *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            minLength={10}
            maxLength={1000}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Γράψτε το μήνυμά σας εδώ..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Αποστολή...
            </>
          ) : (
            'Αποστολή Μηνύματος'
          )}
        </button>
      </form>
    </div>
  )
}
