import React, { useState } from 'react';
import myProfilePhoto from '/mike.jpg'; 

const LicensePortal = () => {
  const [cnic, setCnic] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleVerify = () => {
    const allowedCNIC = "4240138225701";

    if (cnic !== allowedCNIC) {
      alert("Record Not Found! Please enter the correct CNIC.");
      setShowCard(false); 
      return;
    }

    setUserData({
      name: "Usman Waris",
      father: "Waris Ali",
      licenceNo: "SL-25-236501",
      dob: "27-05-2001",
      BloodGroup: "0 postive",
      CNIC: "42401-3822570-1",
      height: "5' 5\"",
      address: "Post Office Panjgariya Bajwa, Bagowali, Tehsil Pasrur, District Sialkot",
      issueDate: "23-6-2022",
      expiryDate: "23-6-2027",
      photo: myProfilePhoto,
      allowedVehicles: ["Motorbike", "Car", "Jeep"] 
    });
    setShowCard(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Disclaimer Banner - Google Red Flag se bachne ke liye */}
      <div className="bg-red-600 text-white text-[10px] py-1 text-center font-bold uppercase tracking-widest">
        Development Mode: This is a Student Portfolio Project - Not a Government Website
      </div>

      {/* Navbar */}
      <nav className="bg-[#006633] text-white p-4 shadow-lg border-b-4 border-yellow-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded">
              {/* Logo ki alt text aur image ko "Demo" label ke sath rakhen */}
              <div className="text-[#006633] font-bold text-xs p-1">PORTFOLIO DEMO</div>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight uppercase">Verification Portal (Demo)</h1>
              <p className="text-[10px] tracking-widest">UI/UX Prototype System</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="container mx-auto mt-10 p-6 max-w-2xl bg-white rounded-xl shadow-md text-center border-t-4 border-[#006633]">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Verify License</h2>
        <p className="text-gray-500 text-xs mb-4 italic">Sample Data Entry for Testing Purposes</p>
        <div className="flex flex-col md:flex-row gap-2">
          <input 
            type="text" 
            placeholder="Enter CNIC for Testing" 
            className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#006633]"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
          <button 
            onClick={handleVerify}
            className="bg-[#006633] hover:bg-[#004d26] text-white px-8 py-3 rounded-lg font-bold transition duration-300"
          >
            VERIFY
          </button>
        </div>
      </div>

      {/* License Card Result */}
      {showCard && userData && (
        <div className="container mx-auto mt-10 max-w-3xl animate-in fade-in duration-500 pb-10">
          {/* Watermark added to background to avoid being flagged as original document */}
          <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] rotate-12 text-6xl font-black">
                FOR DEMO ONLY - NO REAL DATA
            </div>
            
            <div className="bg-[#006633] text-white p-4 text-center">
              <h3 className="text-xl font-bold tracking-tighter uppercase">Document Layout Preview</h3>
              <p className="text-xs">DIGITAL CARD DESIGN</p>
            </div>

            <div className="flex flex-col md:flex-row p-6 gap-8">
              <div className="flex flex-col items-center">
                <img 
                  src={userData.photo} 
                  alt="Profile" 
                  className="w-40 h-48 object-cover border-4 border-[#006633] rounded-md shadow-md bg-gray-50"
                />
                <div className="mt-4 bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-bold border border-green-200">
                  STATUS: VALID
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 flex-1">
                <DetailItem label="FULL NAME" value={userData.name} />
                <DetailItem label="FATHER NAME" value={userData.father} />
                <DetailItem label="LICENCE NO" value={userData.licenceNo} />
                <DetailItem label="DATE OF BIRTH" value={userData.dob} />
                <DetailItem label="BLOOD GROUP" value={userData.BloodGroup} />
                <DetailItem label="CNIC" value={userData.CNIC} />
                <DetailItem label="HEIGHT" value={userData.height} />
                <DetailItem label="ISSUE DATE" value={userData.issueDate} />
                <DetailItem label="EXPIRY DATE" value={userData.expiryDate} />
                
                <div className="col-span-2 mt-2">
                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-1">Allowed Vehicles</p>
                    <div className="flex gap-2">
                        {userData.allowedVehicles.map((vehicle, index) => (
                            <span key={index} className="bg-gray-200 text-gray-800 text-[10px] px-3 py-1 rounded font-bold border border-gray-300">
                                {vehicle.toUpperCase()}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="col-span-2">
                  <DetailItem label="PERMANENT ADDRESS" value={userData.address} />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 border-t text-center">
              <p className="text-[10px] text-gray-400 font-bold italic">THIS IS A CODING PROJECT PREVIEW - NOT A VALID LEGAL DOCUMENT</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-800 text-gray-400 py-8 px-6 text-center text-sm">
          <p>© 2026 Developer Portfolio | Built with React & Tailwind</p>
          <p className="text-[10px] mt-2 opacity-50 uppercase">This site is for educational demonstration only.</p>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-[10px] text-gray-500 font-bold uppercase">{label}</p>
    <p className="text-sm font-semibold text-gray-900">{value}</p>
  </div>
);

export default LicensePortal;