

const TreatmentProcess = () => {
  return (
    <div className="bg-gradient-to-br from-teal-400/50 to-white/40   w-full py-12 px-4">
      <div className="w-[65%] mx-auto px-6">
      <div className="w-full md:w-4/5 lg:w-[65%] mx-auto px-4 md:px-6">
      <div className="text-teal-400 font-medium mb-2">GET SAME-DAY ONLINE</div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 md:gap-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Suboxone Treatment In 10 Minutes</h1>
        
        <button className="bg-teal-400 text-white px-4 py-2 rounded-md flex items-center justify-center whitespace-nowrap">
          Download The App Today
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
      
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-29 mt-20">
          {/* Glowing orb in center */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <defs>
                <radialGradient id="outerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#43e5b1" stopOpacity="0.1" />
                  <stop offset="70%" stopColor="#43e5b1" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#e0f7fa" stopOpacity="0" />
                </radialGradient>
                
                <radialGradient id="orbGradient" cx="45%" cy="45%" r="50%" fx="30%" fy="30%">
                  <stop offset="0%" stopColor="#00e5c9" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#43e5b1" stopOpacity="0.7" />
                  <stop offset="90%" stopColor="#a5f7e6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#e0f7fa" stopOpacity="0.1" />
                </radialGradient>
                
                <radialGradient id="highlight" cx="30%" cy="30%" r="30%" fx="25%" fy="25%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
                
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                </filter>
              </defs>
              
              <circle cx="200" cy="200" r="180" fill="url(#outerGlow)" filter="url(#blur)" />
              <circle cx="200" cy="200" r="120" fill="url(#orbGradient)" />
              <circle cx="200" cy="200" r="90" fill="#00e5c9" filter="url(#blur)" opacity="0.6" />
              <circle cx="200" cy="200" r="100" fill="url(#highlight)" />
              <circle cx="200" cy="200" r="30" fill="#00e5c9" opacity="0.8" />
            </svg>
          </div>
          
          {/* Step 1 */}
          <div className="mt-16 flex justify-center">
        <div className="w-full max-w-lg rounded-2xl border border-teal-300 bg-gradient-to-b from-green-50 to-white p-4 shadow-sm flex flex-col justify-center items-center h-40 md:h-30 z-20">
          <h3 className="font-bold text-gray-800 mb-1">Step 1 - Download The App</h3>
            <p className="text-gray-600 text-sm">Click the link to download our app to get started.</p>
          </div>
          </div>
          
          {/* Step 2 */}
          <div className="mt-16 flex justify-center">
          <div className="w-full max-w-lg rounded-2xl border border-teal-300 bg-gradient-to-b from-green-50 to-white p-4 shadow-sm flex flex-col justify-center items-center h-40 md:h-30 z-20">
             <h3 className="font-bold text-gray-800 mb-1">Step 2 - Complete Onboarding Process & Documents</h3>
            <p className="text-gray-600 text-sm">Provide medical history and sign treatment forms.</p>
          </div>
          </div>
          
          {/* Step 3 */}
          <div className="mt-16 flex justify-center">
          <div className="w-full max-w-lg rounded-2xl border border-teal-300 bg-gradient-to-b from-green-50 to-white p-4 shadow-sm flex flex-col justify-center items-center h-40 md:h-30 z-20">
             <h3 className="font-bold text-gray-800 mb-1">Step 3 - Schedule Your First Visit</h3>
            <p className="text-gray-600 text-sm">Our onboarding team will send you a link to book your first meeting.</p>
          </div>
          </div>


          {/* Step 4 */}
          <div className="mt-16 flex justify-center">
        <div className="w-full max-w-lg rounded-2xl border border-teal-300 bg-gradient-to-b from-green-50 to-white p-4 shadow-sm flex flex-col justify-center items-center h-40 md:h-30 z-20">  
        <h3 className="font-bold text-gray-800 mb-1">Step 4 - Meet With Licensed Provider</h3>
            <p className="text-gray-600 text-sm">At the time of your appointment, open the app on your phone.</p>
          </div>
          </div>
        </div>
        
        {/* Step 5 - Centered below */}
        <div className="mt-25 flex justify-center">
        <div className="w-full max-w-lg rounded-2xl border border-teal-300 bg-gradient-to-b from-green-50 to-white p-4 shadow-sm flex flex-col justify-center items-center h-40 md:h-30 z-20">
          <h3 className="font-bold text-gray-800 mb-1">Step 5 - Pick Up Medication</h3>
          <p className="text-gray-600 text-sm">Your script will be sent to your pharmacy of choice for pick-up the same day.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TreatmentProcess;

