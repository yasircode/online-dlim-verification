import React, { useState } from 'react';

function App() {
  // License data state me manage ho raha hai taake reactively handle ho sake
  const [licenseData, setLicenseData] = useState({
    name: "Usman Waris",
    father: "Waris Ali",
    licenceNo: "SL-25-236501",
    dob: "27-05-2001",
    BloodGroup: "O Positive",
    CNIC: "42401-3822570-1",
    height: "5' 5\"",
    address: "Post Office Panjgariya Bajwa, Bagowali, Tehsil Pasrur, District Sialkot",
    issueDate: "23-6-2022",
    expiryDate: "23-6-2027",
    // Agar aapke paas local image asset hai to use import karke yahan assign kar sakte hain
    photo: "mike.jpg", // Local image asset
    allowedVehicles: ["Motorbike", "Car", "Jeep"],
    leftLogo: "logo.jpeg", // Local image asset for Punjab logo
    rightLogo: "like.png"
  });

  // Mobile menu ka state logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans flex flex-col min-h-screen text-gray-800">
      
      {/* 1. NAVBAR SECTION */}
      <nav class="bg-gradient-to-r from-emerald-800 to-green-700 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Side Logo & Text */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400 shadow-md">
                <img src={licenseData.leftLogo} alt="Punjab Logo" className="object-cover w-full h-full" />
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-wide uppercase drop-shadow-md">
                Punjab Driving License
              </span>
            </div>

            {/* Center Navigation Links */}
            <div className="hidden md:flex space-x-8 font-medium">
              <a href="#" className="hover:text-yellow-300 transition duration-300 py-2 border-b-2 border-transparent hover:border-yellow-300">Home</a>
              <a href="#" className="hover:text-yellow-300 transition duration-300 py-2 border-b-2 border-transparent hover:border-yellow-300">About</a>
              <a href="#" className="hover:text-yellow-300 transition duration-300 py-2 border-b-2 border-transparent hover:border-yellow-300">Services</a>
              <a href="#" className="hover:text-yellow-300 transition duration-300 py-2 border-b-2 border-transparent hover:border-yellow-300">Contact</a>
            </div>

            {/* Right Side Logo & Mobile Toggle */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-yellow-400 shadow-md">
                <img src={licenseData.rightLogo} alt="Police Logo" className="object-cover w-full h-full" />
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden ml-4 text-white focus:outline-none hover:text-yellow-300"
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-green-800 border-t border-green-600 px-4 pt-2 pb-4 space-y-2`}>
          <a href="#" className="block hover:bg-green-700 px-3 py-2 rounded-md transition">Home</a>
          <a href="#" className="block hover:bg-green-700 px-3 py-2 rounded-md transition">About</a>
          <a href="#" className="block hover:bg-green-700 px-3 py-2 rounded-md transition">Services</a>
          <a href="#" className="block hover:bg-green-700 px-3 py-2 rounded-md transition">Contact</a>
        </div>
      </nav>

      {/* 2. HALF SCREEN HERO BANNER */}
      <div className="relative h-[40vh] sm:h-[50vh] w-full bg-gray-900 overflow-hidden shadow-inner">
        <img 
          src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=1920" 
          alt="Punjab Highways" 
          className="w-full h-full object-cover opacity-60 transform scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg uppercase">
            Digital Verification Portal
          </h1>
          <p className="text-yellow-300 text-sm sm:text-lg mt-2 font-medium max-w-xl drop-shadow">
            Government of Punjab — Traffic Police Licensing Management System
          </p>
        </div>
      </div>

      {/* 3. PROFILE & LICENSE DETAILS CONTAINER */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 pb-16 relative -mt-24 sm:-mt-32 z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-green-700 to-emerald-600 h-3 w-full"></div>

          {/* Profile Section */}
          <div className="flex flex-col items-center pt-8 pb-6 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
            <div className="relative">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-white p-1 shadow-xl border-4 border-emerald-600 flex items-center justify-center overflow-hidden">
                <img src={licenseData.photo} alt={`${licenseData.name} Photo`} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-2 shadow-md border-2 border-white flex items-center justify-center w-8 h-8">
                <i className="fas fa-check text-xs"></i>
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 tracking-tight">
              {licenseData.name}
            </h2>
            <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mt-2 shadow-sm border border-green-200">
              Active / Valid License
            </span>
          </div>

          {/* License Information Grid */}
          <div className="p-6 sm:p-10">
            <div className="flex items-center space-x-2 text-emerald-700 font-bold text-lg mb-6 border-b pb-2">
              <i class="fas fa-id-card"></i>
              <span>Official License Information</span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
                
              {/* License Number */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">License No</span>
                <span className="text-gray-800 font-bold text-lg tracking-wide">{licenseData.licenceNo}</span>
              </div>

              {/* CNIC */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">CNIC Number</span>
                <span className="text-gray-800 font-bold tracking-wide">{licenseData.CNIC}</span>
              </div>

              {/* Father Name */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">Father's Name</span>
                <span className="text-gray-700 font-semibold">{licenseData.father}</span>
              </div>

              {/* Allowed Vehicles */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">Allowed Vehicles</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {licenseData.allowedVehicles.map((vehicle, index) => (
                    <span key={index} className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded border border-emerald-200">
                      {vehicle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Date of Birth */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">
                  <i className="fas fa-birthday-cake text-green-600 mr-1"></i> Date of Birth
                </span>
                <span className="text-gray-700 font-medium">{licenseData.dob}</span>
              </div>

              {/* Blood Group & Height */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                  <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">
                    <i className="fas fa-tint text-red-500 mr-1"></i> Blood
                  </span>
                  <span className="text-red-600 font-bold">{licenseData.BloodGroup}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                  <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">
                    <i className="fas fa-arrows-alt-v text-blue-500 mr-1"></i> Height
                  </span>
                  <span className="text-gray-700 font-medium">{licenseData.height}</span>
                </div>
              </div>

              {/* Date of Issue */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">
                  <i className="far fa-calendar-alt text-green-600 mr-1"></i> Date of Issue
                </span>
                <span className="text-gray-700 font-medium">{licenseData.issueDate}</span>
              </div>

              {/* Date of Expiry */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
                <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">
                  <i className="far fa-calendar-times text-red-500 mr-1"></i> Date of Expiry
                </span>
                <span className="text-gray-700 font-medium">{licenseData.expiryDate}</span>
              </div>

            </div>

            {/* Address */}
            <div className="mt-6 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition">
              <span className="text-xs font-semibold text-gray-400 uppercase block tracking-wider">
                <i className="fas fa-map-marker-alt text-emerald-600 mr-1"></i> Permanent Address
              </span>
              <span className="text-gray-700 font-medium block mt-1 leading-relaxed">{licenseData.address}</span>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-500 text-xs sm:text-sm text-yellow-800 flex items-start space-x-3">
              <i className="fas fa-info-circle mt-0.5 text-base text-yellow-600"></i>
              <p>
                <strong>Note:</strong> This is an officially generated digital verification card copy. Scanning the barcode or QR printed on original physical cards will sync live data instantly with the Punjab IT Board (PITB) database.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* 4. FOOTER SECTION */}
      <footer className="bg-gray-900 text-gray-400 text-sm mt-auto border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-shield-alt text-yellow-400"></i> Punjab Driving License Verification Portal
              </p>
              <p className="text-xs mt-1 text-gray-500">&copy; 2026 Government of Punjab. All Rights Reserved.</p>
            </div>
            <div className="flex space-x-4 text-xs font-medium text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition">PITB Support</a>
            </div>
            <div className="text-center md:text-right text-xs text-gray-500">
              Designed & Powered by <span class="text-emerald-400 font-semibold">Traffic Police IT Wing</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;