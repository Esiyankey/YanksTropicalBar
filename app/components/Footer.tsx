
import Image from "next/image";

export default function Footer() {
  return (

<footer className="bg-white border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image className="relative h-20 w-20 rounded-full flex items-center justify-center text-white font-bold" src="/images/yanks_tropical_logo.png" alt="Yanks Tropical Bar" width={40} height={40} />
                <h4 className="text-lg font-bold text-black">
                  Yanks Tropical Bar
                </h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Elevating traditional Ghanaian refreshments with premium service and authentic cultural presentation.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.404 2.759 6.162 6.162 6.162 3.404 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-300" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.515v-2a10.009 10.009 0 01-5.175 1.645-10 10 0 003.82-5.744l-2.126-1.244a6.004 6.004 0 00-3.756 1.455 6 6 0 016.167 9.966l-5.841 5.841a6 6 0 01-8.485-8.485l5.841-5.841a3.5 3.5 0 00-2.917-1.694 3.506 3.506 0 00-2.917 1.694L6.4 0"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h5 className="text-sm font-bold tracking-widest text-black mb-6">EXPLORE</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">About</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Services</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Menu</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Gallery</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h5 className="text-sm font-bold tracking-widest text-black mb-6">SERVICES</h5>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Weddings & Engagements</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Corporate Functions</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Private Parties</a></li>
                <li><a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300 text-sm">Cultural Festivals</a></li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h5 className="text-sm font-bold tracking-widest text-black mb-6">GET IN TOUCH</h5>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                  <span className="text-gray-700 text-sm">East Legon, Accra, Ghana</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="text-gray-700 text-sm">+233 24 000 0000</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-gray-700 text-sm">hello@goldencalabash.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2026 Golden Calabash Catering. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}
