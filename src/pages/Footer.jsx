export default function Footer() {
    return(
        <>
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Logo / Brand */}
          <h3 className="text-lg font-semibold">Your Company</h3>

          {/* Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        
      </div>
    </footer>
    </>
    )
}
