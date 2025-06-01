import Navigation from '../components/Navigation'
import Image from 'next/image'  // ← ADD THIS LINE

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-600">
          {/* Placeholder for background image */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-shadow animate-fade-in">
            FIGHTINGROOSTER
            <br />
            <span className="text-white">ATHENS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow animate-slide-up">
            Η έδρα του Nemesis Athletic Club
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-slide-up">
            <a href="#about" 
               className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 border-2 border-white">
              Μάθε Περισσότερα
            </a>
            <a href="#contact" 
               className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Επικοινωνία
            </a>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Σχετικά με το Fightingrooster Athens
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Το Fightingrooster Athens είναι το προπονητήριο του συλλόγου Nemesis Athletic Club, 
                ένας σύγχρονος χώρος αφιερωμένος στα μαχητικά αθλήματα και τη σωματική ενδυνάμωση.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Με έμπνευση από το πνεύμα του μαχητή κόκορα, το Fightingrooster Athens δημιουργήθηκε 
                για να φιλοξενεί αθλητές κάθε επιπέδου – από αρχάριους που θέλουν να γνωρίσουν τον 
                κόσμο του Muay Thai, του Kick Boxing και της πυγμαχίας, μέχρι προχωρημένους και 
                αγωνιστικούς αθλητές που επιδιώκουν υψηλές επιδόσεις.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold text-primary-700">
                Δεν χτίζουμε απλά αθλητές – χτίζουμε χαρακτήρες, πειθαρχία, αυτοπεποίθηση και σεβασμό.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-primary-100 h-96 rounded-lg flex items-center justify-center">
                <p className="text-primary-600 text-xl font-semibold">
                  [Training Photo Placeholder]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Trainer Section */}
      <section id="trainer" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              Ο Προπονητής μας
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Photo Section - Left Side */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative">
                  {/* Replace this div with Image component when you have the photo */}
                 {/* NEW - Image component */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl overflow-hidden">
                    <Image
                      src="/images/profile_photo.jpg" 
                      alt="Κοντός Δημήτρης - Προπονητής Nemesis Athletic Club"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
          
                </div>
              </div>
            </div>
            
            {/* Content Section - Right Side */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
                  Κοντός Δημήτρης
                </h3>
                <p className="text-primary-600 font-semibold text-xl mb-6">
                  Προπονητής Nemesis Athletic Club
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary-600">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ονομάζομαι Κοντός Δημήτρης και είμαι προπονητής του συλλόγου Nemesis Athletic Club. 
                    Ασχολούμαι ενεργά με τα μαχητικά αθλήματα από το 2000, με πολυετή εμπειρία τόσο ως 
                    αθλητής όσο και ως προπονητής.
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Υπήρξα αθλητής στα αθλήματα του Muay Thai και του Kick Boxing, αγωνιζόμενος σε 
                  ερασιτεχνικό και επαγγελματικό επίπεδο. Μέσα από την πορεία μου στους αγωνιστικούς 
                  χώρους, έχω ζήσει από κοντά τις απαιτήσεις, τις προκλήσεις αλλά και τις μοναδικές 
                  στιγμές που προσφέρει ο χώρος των μαχητικών αθλημάτων.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ως προπονητής, στόχος μου είναι να μεταδώσω τη γνώση και την εμπειρία μου στους 
                  αθλητές του συλλόγου, δίνοντας έμφαση στην τεχνική κατάρτιση, την ενδυνάμωση του 
                  σώματος και του πνεύματος, αλλά και στις αξίες του σεβασμού, της πειθαρχίας και 
                  της αυτοβελτίωσης.
                </p>
                
                <div className="bg-primary-50 p-6 rounded-xl">
                  <p className="text-lg text-primary-800 leading-relaxed font-semibold">
                    Στο Nemesis Athletic Club, υποστηρίζουμε κάθε αθλητή – είτε ξεκινάει τώρα είτε 
                    στοχεύει στον αγωνιστικό στίβο – και χτίζουμε μαζί του τα θεμέλια για μια πορεία 
                    με υγεία, εξέλιξη και επιτυχίες.
                  </p>
                </div>
              </div>
              
              {/* Experience Highlights */}
              <div className="mt-8">
                <h4 className="font-display font-semibold text-2xl text-gray-900 mb-6">
                  Εμπειρία & Εξειδίκευση
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">Muay Thai</span>
                    </div>
                    <p className="text-gray-600">Ερασιτεχνικό & Επαγγελματικό επίπεδο</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">Kick Boxing</span>
                    </div>
                    <p className="text-gray-600">Αγωνιστική εμπειρία από το 2000</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">Προπονητική</span>
                    </div>
                    <p className="text-gray-600">Εξειδίκευση σε τεχνική & φυσική κατάρτιση</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">Αξίες</span>
                    </div>
                    <p className="text-gray-600">Σεβασμός, πειθαρχία, αυτοβελτίωση</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
            Έτοιμος να Ξεκινήσεις;
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Έλα να γνωρίσεις τον δικό μας κόσμο. Fightingrooster Athens – Εκεί που οι μαχητές γεννιούνται.
          </p>
          <a href="#contact" 
             className="inline-block bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-300 text-lg">
            Κλείσε Δοκιμαστικό Μάθημα
          </a>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-display font-bold text-xl mb-4">FIGHTINGROOSTER ATHENS</h3>
          <p className="text-gray-300 mb-4">
            Η έδρα του Nemesis Athletic Club
          </p>
          <p className="text-gray-400">
            © 2025 Fightingrooster Athens - Nemesis Athletic Club. Όλα τα δικαιώματα διατηρούνται. Created by Theodoros Soultanopoulos
          </p>
        </div>
      </footer>
    </div>
  )
}