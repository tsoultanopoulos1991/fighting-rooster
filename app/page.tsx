import Navigation from '../components/Navigation'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('../components/ContactForm'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-2xl"></div>,
})

const PhotoGallery = dynamic(() => import('../components/PhotoGallery'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
})

const BackToTop = dynamic(() => import('../components/BackToTop'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-black">
          {/* Background image overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary-900 to-primary-900 opacity-90"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-glow animate-fade-in">
            FIGHTING ROOSTER
            <br />
            <span className="text-primary-300">ATHENS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-up">
            Η έδρα του Nemesis Athletic Club
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-slide-up">
            <a
              href="#about"
              className="inline-block bg-primary-300 hover:bg-primary-400 text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 border-2 border-primary-300 hover:shadow-lg"
            >
              Μάθε Περισσότερα
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-primary-300 hover:bg-primary-300 hover:text-black text-primary-300 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
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
                Δεν χτίζουμε απλά αθλητές – χτίζουμε χαρακτήρες, πειθαρχία, αυτοπεποίθηση και
                σεβασμό.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/gallery/training-photo.jpg"
                  alt="Fighting Rooster Training Session"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                  loading="eager"
                />

                {/* Optional: Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Προπόνηση Fighting Rooster</h3>
                    <p className="text-sm text-gray-200">Καρτερίας 18, Αθήνα</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Δες τον Χώρο μας σε Δράση
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ρίξε μια ματιά στις προπονήσεις μας και γνώρισε το περιβάλλον του Fightingrooster
              Athens
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              <video
                controls
                preload="none"
                poster="/images/icons/icon_main.png"
                className="w-full h-auto max-h-[60vh] object-contain"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              >
                <source
                  src="/videos/0-02-05-c009ea59b887b0b56fd941eddf95947d7762af1da1e7c1f4c66986dfe99eec4f_1c1d105029d99a.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Services Section */}
      <section id="feutures" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Εξοπλισμός & Υπηρεσίες
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ο χώρος είναι εξοπλισμένος με όλα τα απαραίτητα για υψηλού επιπέδου προπονήσεις
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-750 transition-colors">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                <Image
                  src="/images/icons/ring-icon.png"
                  alt="Professional Equipment"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Επαγγελματικός Εξοπλισμός
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ring και σάκους επαγγελματικών προδιαγραφών για υψηλού επιπέδου προπονήσεις και
                sparring.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-750 transition-colors">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                <Image
                  src="/images/icons/fitness-program-icon.png"
                  alt="Complete Program"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4">Πλήρες Πρόγραμμα</h3>
              <p className="text-gray-300 leading-relaxed">
                Τεχνική κατάρτιση, φυσική κατάσταση και sparring για ολοκληρωμένη εκπαίδευση σε όλα
                τα επίπεδα.
              </p>
            </div>

            <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-750 transition-colors">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                <Image
                  src="/images/icons/guidance-icon.png"
                  alt="Specialized Guidance"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Εξειδικευμένη Καθοδήγηση
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Προσωπική προσέγγιση από έμπειρους προπονητές για κάθε αθλητή ανεξαρτήτως επιπέδου.
              </p>
            </div>
          </div>

          {/* Sports Programs */}
          <div className="mb-16">
            <h3 className="font-display font-bold text-2xl text-white text-center mb-12">
              Αθλήματα & Προγράμματα
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-primary-600 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/muay-thai-icon.png"
                      alt="Muay Thai"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Muay Thai</h4>
                </div>
                <p className="text-primary-100 mb-4">
                  Η τέχνη των οκτώ άκρων. Αρχάριοι και προχωρημένοι.
                </p>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Βασική τεχνική</li>
                  <li>• Κλινάδες & γόνατα</li>
                  <li>• Αγωνιστική προετοιμασία</li>
                </ul>
              </div>

              <div className="bg-primary-600 border border-gray-700 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/kick-boxing-icon.svg"
                      alt="Kick Boxing"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Kick Boxing</h4>
                </div>
                <p className="text-primary-100 mb-4">
                  Συνδυασμός πυγμαχίας και κλοτσιών για δύναμη και αντοχή.
                </p>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Combo τεχνικές</li>
                  <li>• Φυσική κατάσταση</li>
                  <li>• Αγωνιστικό sparring</li>
                </ul>
              </div>

              <div className="bg-primary-600 border border-gray-700 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/boxing-icon.png"
                      alt="Boxing"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Πυγμαχία</h4>
                </div>
                <p className="text-primary-100 mb-4">
                  Κλασική πυγμαχία με έμφαση στην τεχνική και στρατηγική.
                </p>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Βασικές στάσεις</li>
                  <li>• Αμυντική τεχνική</li>
                  <li>• Τακτική αγώνα</li>
                </ul>
              </div>

              <div className="bg-primary-600 border border-gray-700 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/fitness-icon.png"
                      alt="Fitness"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Φυσική Κατάσταση</h4>
                </div>
                <p className="text-primary-100 mb-4">Ειδικά προγράμματα ενδυνάμωσης για μαχητές.</p>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Functional training</li>
                  <li>• Καρδιαγγειακή αντοχή</li>
                  <li>• Δύναμη & ταχύτητα</li>
                </ul>
              </div>

              <div className="bg-primary-600 border border-gray-700 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/personal-training-icon.png"
                      alt="Personal Training"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Προσωπική Προπόνηση</h4>
                </div>
                <p className="text-primary-100 mb-4">
                  Εξατομικευμένα προγράμματα με τον προπονητή.
                </p>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• 1-on-1 προπόνηση</li>
                  <li>• Εξατομικευμένο πλάνο</li>
                  <li>• Ταχύτερη εξέλιξη</li>
                </ul>
              </div>

              <div className="bg-primary-600 border border-gray-700 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/group-class-icon.png"
                      alt="Group Classes"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Ομαδικά Μαθήματα</h4>
                </div>
                <p className="text-primary-100 mb-4">Δυναμικά group classes για όλα τα επίπεδα.</p>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Beginners classes</li>
                  <li>• Advanced training</li>
                  <li>• Competition prep</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment Details */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl">
            <h3 className="font-display font-bold text-2xl text-white text-center mb-8">
              Εξοπλισμός Γυμναστηρίου
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                  <Image
                    src="/images/icons/ring-icon.png"
                    alt="Professional Ring"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">Professional Ring</h4>
                <p className="text-gray-300 text-sm">Αγωνιστικό ring διαστάσεων</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                  <Image
                    src="/images/icons/heavy-bags-icon.png"
                    alt="Heavy Bags"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">Heavy Bags</h4>
                <p className="text-gray-300 text-sm">Βαριοί σάκοι επαγγελματικών προδιαγραφών</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                  <Image
                    src="/images/icons/speed-pag-icon.png"
                    alt="Speed Bags"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">Speed Bags</h4>
                <p className="text-gray-300 text-sm">Για ταχύτητα και συντονισμό</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 p-3">
                  <Image
                    src="/images/icons/gear-icon.png"
                    alt="Protective Gear"
                    width={40}
                    height={40}
                    className="brightness-0 invert"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">Protective Gear</h4>
                <p className="text-gray-300 text-sm">Πλήρης προστατευτικός εξοπλισμός</p>
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
                    Ονομάζομαι Κοντός Δημήτρης και είμαι προπονητής του συλλόγου Nemesis Athletic
                    Club. Ασχολούμαι ενεργά με τα μαχητικά αθλήματα από το 2000, με πολυετή εμπειρία
                    τόσο ως αθλητής όσο και ως προπονητής.
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
                      <span className="font-display font-semibold text-gray-900 text-lg">
                        Muay Thai
                      </span>
                    </div>
                    <p className="text-gray-600">Ερασιτεχνικό & Επαγγελματικό επίπεδο</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">
                        Kick Boxing
                      </span>
                    </div>
                    <p className="text-gray-600">Αγωνιστική εμπειρία από το 2000</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">
                        Προπονητική
                      </span>
                    </div>
                    <p className="text-gray-600">Εξειδίκευση σε τεχνική & φυσική κατάρτιση</p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="w-4 h-4 bg-primary-600 rounded-full mr-3"></div>
                      <span className="font-display font-semibold text-gray-900 text-lg">
                        Αξίες
                      </span>
                    </div>
                    <p className="text-gray-600">Σεβασμός, πειθαρχία, αυτοβελτίωση</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhotoGallery />
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Επικοινωνία
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Έτοιμος να ξεκινήσεις το ταξίδι σου στα μαχητικά αθλήματα; Επικοινώνησε μαζί μας!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-6">
                  Πληροφορίες Επικοινωνίας
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-4">Επισκεφθείτε μας</h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <span className="font-medium text-white">Fighting Rooster</span>
                      <br />
                      Καρτερίας 18, Αθήνα
                      <br />
                      <span className="text-sm">Κέντρο Αθήνας - Εύκολη πρόσβαση με ΜΜΜ</span>
                    </p>

                    {/* Google Maps Embed - Specific Business */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.6!2d23.7341!3d37.9755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFighting%20Rooster%2C%20Καρτερίας%2018%2C%20Αθήνα!5e0!3m2!1sel!2sgr!4v1234567890"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Fighting Rooster - Καρτερίας 18, Αθήνα"
                      ></iframe>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href="https://maps.google.com/maps?q=Fighting+Rooster,+Καρτερίας+18,+Αθήνα"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        Δες μας στο Maps
                      </a>

                      <a
                        href="https://www.google.com/maps/dir//Fighting+Rooster,+Καρτερίας+18,+Αθήνα"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7h-4c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                        </svg>
                        Οδηγίες
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Τηλέφωνο</h4>
                    <p className="text-gray-300">+30 697 419 5637</p>
                    <p className="text-sm text-gray-400">Κλήσεις & WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Email</h4>
                    <p className="text-gray-300">info@fightingrooster-athens.com</p>
                    <p className="text-sm text-gray-400">Απαντάμε εντός 24 ωρών</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Ώρες Λειτουργίας</h4>
                    <div className="mt-12 overflow-x-auto">
                      <div className="min-w-fit max-w-4xl mx-auto">
                        <table className="w-full text-xs text-left text-gray-300 border border-gray-700">
                          <thead className="bg-primary-600 text-white">
                            <tr>
                              <th className="px-2 py-2">Μάθημα</th>
                              <th className="px-2 py-2">Δευτέρα</th>
                              <th className="px-2 py-2">Τρίτη</th>
                              <th className="px-2 py-2">Τετάρτη</th>
                              <th className="px-2 py-2">Πέμπτη</th>
                              <th className="px-2 py-2">Παρασκευή</th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-800">
                            <tr className="border-t border-gray-700">
                              <td className="px-2 py-1 font-medium text-white">Mixed Class</td>
                              <td className="px-2 py-1">09:30 - 10:30</td>
                              <td className="px-2 py-1">09:30 - 10:30</td>
                              <td className="px-2 py-1">09:30 - 10:30</td>
                              <td className="px-2 py-1">09:30 - 10:30</td>
                              <td className="px-2 py-1">09:30 - 10:30</td>
                            </tr>
                            <tr className="border-t border-gray-700">
                              <td className="px-2 py-1 font-medium text-white">Kids Striking</td>
                              <td className="px-2 py-1">18:00 - 19:00</td>
                              <td className="px-2 py-1">—</td>
                              <td className="px-2 py-1">18:00 - 19:00</td>
                              <td className="px-2 py-1">—</td>
                              <td className="px-2 py-1">18:00 - 19:00</td>
                            </tr>
                            <tr className="border-t border-gray-700">
                              <td className="px-2 py-1 font-medium text-white">
                                Strength & Conditioning
                              </td>
                              <td className="px-2 py-1">19:00 - 20:00</td>
                              <td className="px-2 py-1">19:00 - 20:00</td>
                              <td className="px-2 py-1">19:00 - 20:00</td>
                              <td className="px-2 py-1">19:00 - 20:00</td>
                              <td className="px-2 py-1">19:00 - 20:00</td>
                            </tr>
                            <tr className="border-t border-gray-700">
                              <td className="px-2 py-1 font-medium text-white">
                                Striking Class (Boxing/K1/Muay Thai)
                              </td>
                              <td className="px-2 py-1">20:00 - 21:00</td>
                              <td className="px-2 py-1">20:00 - 21:00</td>
                              <td className="px-2 py-1">20:00 - 21:00</td>
                              <td className="px-2 py-1">20:00 - 21:00</td>
                              <td className="px-2 py-1">20:00 - 21:00</td>
                            </tr>
                          </tbody>
                        </table>
                        <p className="mt-3 text-xs text-gray-400 italic text-center">
                          Σάββατο & Κυριακή: Κλειστά
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-primary-600 p-6 rounded-xl">
                <h4 className="font-display font-bold text-white text-xl mb-3">
                  Δοκιμαστικό Μάθημα ΔΩΡΕΑΝ!
                </h4>
                <p className="text-primary-100 mb-4">
                  Έλα να δοκιμάσεις το πρώτο σου μάθημα χωρίς χρέωση και να γνωρίσεις τον χώρο μας.
                </p>
                <a
                  href="tel:+306974195637"
                  className="inline-block bg-white text-primary-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Κάλεσε Τώρα
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-2xl mb-4">FIGHTING ROOSTER ATHENS</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Η έδρα του Nemesis Athletic Club. Εκεί που οι μαχητές γεννιούνται. Δεν χτίζουμε απλά
                αθλητές – χτίζουμε χαρακτήρες, πειθαρχία, αυτοπεποίθηση και σεβασμό.
              </p>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/fightingroosterathens/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/%CE%94%CE%97%CE%9C%CE%97%CE%A4%CE%A1%CE%97%CE%A3-%CE%9A%CE%9F%CE%9D%CE%A4%CE%9F%CE%A3/100063675065084/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Αθλήματα */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Αθλήματα</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#feutures" className="hover:text-primary-500 transition-colors">
                    Muay Thai
                  </a>
                </li>
                <li>
                  <a href="#feutures" className="hover:text-primary-500 transition-colors">
                    Kick Boxing
                  </a>
                </li>
                <li>
                  <a href="#feutures" className="hover:text-primary-500 transition-colors">
                    Πυγμαχία
                  </a>
                </li>
                <li>
                  <a href="#feutures" className="hover:text-primary-500 transition-colors">
                    Φυσική Κατάσταση
                  </a>
                </li>
                <li>
                  <a href="#feutures" className="hover:text-primary-500 transition-colors">
                    Προσωπική Προπόνηση
                  </a>
                </li>
              </ul>
            </div>

            {/* Γρήγοροι Σύνδεσμοι */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">
                Γρήγοροι Σύνδεσμοι
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#about" className="hover:text-primary-500 transition-colors">
                    Σχετικά με εμάς
                  </a>
                </li>
                <li>
                  <a href="#trainer" className="hover:text-primary-500 transition-colors">
                    Προπονητής
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-500 transition-colors">
                    Επικοινωνία
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500 transition-colors">
                    Τιμοκατάλογος
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-500 transition-colors">
                    Ώρες Λειτουργίας
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Fightingrooster Athens - Nemesis Athletic Club. Όλα τα δικαιώματα
                διατηρούνται. Developed by Θοδωρής Σουλτανόπουλος.
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/soultanopoulos-theodoros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
    </div>
  )
}
