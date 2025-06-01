import Navigation from '../components/Navigation'

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