import Navigation from '../components/Navigation'
import Image from 'next/image' 
import ContactForm from '../components/ContactForm'  
import BackToTop from '../components/BackToTop'

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

         {/* Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Δες τον Χώρο μας σε Δράση
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ρίξε μια ματιά στις προπονήσεις μας και γνώρισε το περιβάλλον του Fightingrooster Athens
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
              {/* Video placeholder - replace with real video */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Προπονητικό Video</h3>
                  <p className="text-primary-100">(Θα προστεθεί βίντεο από τις προπονήσεις)</p>
                </div>
              </div>
              
              {/* Uncomment when you have a video
              <video 
                controls 
                poster="/images/video-thumbnail.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/gym-promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              */}
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

   {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-2xl mb-4">
                FIGHTINGROOSTER ATHENS
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Η έδρα του Nemesis Athletic Club. Εκεί που οι μαχητές γεννιούνται. 
                Δεν χτίζουμε απλά αθλητές – χτίζουμε χαρακτήρες, πειθαρχία, αυτοπεποίθηση και σεβασμό.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.936 2.005c1.39 0 2.583.05 3.575.146 1.29.12 2.179.372 2.695.631.674.259 1.155.57 1.66 1.074.505.505.815.986 1.074 1.66.259.516.511 1.405.631 2.695.096.992.146 2.184.146 3.575v.146c0 1.39-.05 2.583-.146 3.575-.12 1.29-.372 2.179-.631 2.695-.259.674-.57 1.155-1.074 1.66-.505.505-.986.815-1.66 1.074-.516.259-1.405.511-2.695.631-.992.096-2.184.146-3.575.146h-.146c-1.39 0-2.583-.05-3.575-.146-1.29-.12-2.179-.372-2.695-.631-.674-.259-1.155-.57-1.66-1.074-.505-.505-.815-.986-1.074-1.66-.259-.516-.511-1.405-.631-2.695-.096-.992-.146-2.184-.146-3.575v-.146c0-1.39.05-2.583.146-3.575.12-1.29.372-2.179.631-2.695.259-.674.57-1.155 1.074-1.66.505-.505.986-.815 1.66-1.074.516-.259 1.405-.511 2.695-.631.992-.096 2.184-.146 3.575-.146h.146m0-2.005h-.146c-1.43 0-2.626.055-3.64.158-1.324.133-2.333.426-2.942.753-.892.347-1.666.96-2.222 1.516-.556.556-1.169 1.33-1.516 2.222-.327.609-.62 1.618-.753 2.942-.103 1.014-.158 2.21-.158 3.64v.146c0 1.43.055 2.626.158 3.64.133 1.324.426 2.333.753 2.942.347.892.96 1.666 1.516 2.222.556.556 1.33 1.169 2.222 1.516.609.327 1.618.62 2.942.753 1.014.103 2.21.158 3.64.158h.146c1.43 0 2.626-.055 3.64-.158 1.324-.133 2.333-.426 2.942-.753.892-.347 1.666-.96 2.222-1.516.556-.556 1.169-1.33 1.516-2.222.327-.609.62-1.618.753-2.942.103-1.014.158-2.21.158-3.64v-.146c0-1.43-.055-2.626-.158-3.64-.133-1.324-.426-2.333-.753-2.942-.347-.892-.96-1.666-1.516-2.222-.556-.556-1.33-1.169-2.222-1.516-.609-.327-1.618-.62-2.942-.753-1.014-.103-2.21-.158-3.64-.158z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Αθλήματα */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Αθλήματα</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-primary-500 transition-colors">Muay Thai</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Kick Boxing</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Πυγμαχία</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Φυσική Κατάσταση</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Προσωπική Προπόνηση</a></li>
              </ul>
            </div>
            
            {/* Γρήγοροι Σύνδεσμοι */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4 text-white">Γρήγοροι Σύνδεσμοι</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-primary-500 transition-colors">Σχετικά με εμάς</a></li>
                <li><a href="#trainer" className="hover:text-primary-500 transition-colors">Προπονητής</a></li>
                <li><a href="#contact" className="hover:text-primary-500 transition-colors">Επικοινωνία</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Τιμοκατάλογος</a></li>
                <li><a href="#" className="hover:text-primary-500 transition-colors">Ώρες Λειτουργίας</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Fightingrooster Athens - Nemesis Athletic Club. Όλα τα δικαιώματα διατηρούνται.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-500 transition-colors">Πολιτική Απορρήτου</a>
                <a href="#" className="hover:text-primary-500 transition-colors">Όροι Χρήσης</a>
                <a href="#" className="hover:text-primary-500 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />

    </div>    
  )
}
