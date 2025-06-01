import Navigation from '../components/Navigation'
import Image from 'next/image' 
import ContactForm from '../components/ContactForm'  

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

{/* Features & Services Section */}
      <section className="py-20 bg-gray-900">
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
                  src="/images/icons/equipment-icon.png"
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
                Ring και σάκους επαγγελματικών προδιαγραφών για υψηλού επιπέδου προπονήσεις και sparring.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gray-800 rounded-2xl hover:bg-gray-750 transition-colors">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                <Image
                  src="/images/icons/program-icon.png"
                  alt="Complete Program"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-4">
                Πλήρες Πρόγραμμα
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Τεχνική κατάρτιση, φυσική κατάσταση και sparring για ολοκληρωμένη εκπαίδευση σε όλα τα επίπεδα.
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
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 bg-opacity-20 rounded-lg flex items-center justify-center mr-4 p-2">
                    <Image
                      src="/images/icons/kickboxing-icon.png"
                      alt="Kick Boxing"
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                  <h4 className="font-display font-bold text-lg">Kick Boxing</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Συνδυασμός πυγμαχίας και κλοτσιών για δύναμη και αντοχή.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Combo τεχνικές</li>
                  <li>• Φυσική κατάσταση</li>
                  <li>• Αγωνιστικό sparring</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-white">
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
                <p className="text-gray-300 mb-4">
                  Κλασική πυγμαχία με έμφαση στην τεχνική και στρατηγική.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Βασικές στάσεις</li>
                  <li>• Αμυντική τεχνική</li>
                  <li>• Τακτική αγώνα</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-white">
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
                <p className="text-gray-300 mb-4">
                  Ειδικά προγράμματα ενδυνάμωσης για μαχητές.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Functional training</li>
                  <li>• Καρδιαγγειακή αντοχή</li>
                  <li>• Δύναμη & ταχύτητα</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-white">
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
                <p className="text-gray-300 mb-4">
                  Εξατομικευμένα προγράμματα με τον προπονητή.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• 1-on-1 προπόνηση</li>
                  <li>• Εξατομικευμένο πλάνο</li>
                  <li>• Ταχύτερη εξέλιξη</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-white">
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
                <p className="text-gray-300 mb-4">
                  Δυναμικά group classes για όλα τα επίπεδα.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
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
                    src="/images/icons/professional-ring-icon.png"
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
                    src="/images/icons/speed-bags-icon.png"
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
                    src="/images/icons/protective-gear-icon.png"
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Διεύθυνση</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Αθήνα, Ελλάδα<br />
                      <span className="text-sm">(Συγκεκριμένη διεύθυνση θα προστεθεί)</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Τηλέφωνο</h4>
                    <p className="text-gray-300">+30 XXX XXX XXXX</p>
                    <p className="text-sm text-gray-400">Κλήσεις & WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg mb-2">Ώρες Λειτουργίας</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Δευτέρα - Παρασκευή: 17:00 - 22:00</p>
                      <p>Σάββατο: 10:00 - 14:00</p>
                      <p>Κυριακή: Κλειστά</p>
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
                  href="tel:+30XXXXXXXXX" 
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