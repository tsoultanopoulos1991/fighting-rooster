export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="font-display font-bold text-4xl md:text-6xl text-center text-gray-900 mb-8">
          FIGHTINGROOSTER
          <br />
          <span className="text-primary-600">ATHENS</span>
        </h1>
        
        <p className="text-xl text-center text-gray-700 mb-8">
          Η έδρα του Nemesis Athletic Club
        </p>
        
        <div className="text-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
            Μάθε Περισσότερα
          </button>
        </div>
      </div>
    </div>
  )
}