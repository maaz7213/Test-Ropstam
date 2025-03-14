// import { Play } from "lucide-react";

// const TreatmentSection = () => {
//     return (
//         <section 
//         className="bg-gradient-to-b from-blue-50 to-white py">
//         <div className="">
//           {/* Top Section with Mission Statement & Stats */}
//           <div
//           style={{
//             backgroundImage: `url('/images/Rectangle 34624123.svg')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//           className="py-16"
//         >
//           <div className=" w-[65%] mx-auto px-6">
//             <div className="flex flex-col md:flex-row gap-16">
//               {/* Left Side - Heading + Mission */}
//               <div className="md:w-1/2">
//                 <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
//                   Breaking Barriers to Recovery
//                 </h2>
//                 <p className="text-gray-600">
//                   Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities. We're deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.
//                 </p>
//               </div>
              
//               {/* Right Side - Description + Stats */}
//               <div className="md:w-1/2">
//                 {/* Description */}
//                 <div className="mb-12">
//                   <p className="text-gray-600">
//                     We're not just offering a service; we're creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery—whether it's stigma, inconvenience, or lack of access to quality care.
//                   </p>
//                 </div>
                
//                 {/* Statistics */}
//                 <div className="flex justify-between w-full">
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-teal-500">500+</p>
//                     <p className="text-gray-700 mt-1">Patients Treated</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-teal-500">300+</p>
//                     <p className="text-gray-700 mt-1">Centers Nationwide</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-4xl font-bold text-teal-500">4.9/5</p>
//                     <p className="text-gray-700 mt-1">Patients Satisfaction</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
      
//           {/* Bottom Section with Video & Text */}
//           <div className="w-[65%] h-[395px] mx-auto px-6 py-16">
//           <div className="flex flex-col md:flex-row items-center gap-12 overflow-hidden">
//             {/* Left Side Text - with light blue border on left */}
//             <div className="">
//             <div className="max-w-[638px]">
//               <p className="text-teal-500 font-semibold uppercase text-sm tracking-wider">
//                 WELCOME TO RECOVERY DELIVERED
//               </p>
              
//               {/* Heading with border */}
             
//               <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight w-full max-w-2xl">
//               Your Fully Online Suboxone Treatment Platform
//             </h3>
             
              
//               {/* Description paragraphs */}
//               <div className="mt-4">
//                 <p className="text-gray-600 font-cabinet text-[20px] font-normal leading-[150%] tracking-[0%]">
//                   100% online opioid treatment with licensed buprenorphine providers starts at just <span className="font-semibold">$99/month</span>.
//                 </p>
//                 <p className="text-gray-600 mt-4 font-cabinet text-[20px] font-normal leading-[150%] tracking-[0%]">
//                   With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script.
//                 </p>
//               </div>
//             </div>
//           </div>
        
//             {/* Right Side Video Thumbnail */}
            
//               <div className="relative w-full md:w-1/2 h-80 md:h-auto">
//                 {/* Video Thumbnail Image */}
//                 <img
//                   src="/images/Rectangle1.png"
//                   alt="Video Thumbnail"
//                   className="w-full h-full object-cover rounded-3xl"
//                 />
          
//                 {/* Play Button Centered Over Image */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="relative w-[80px] h-[80px] flex items-center justify-center">
//                     {/* Outer Pulsing Circle */}
//                     <div className="absolute w-full h-full bg-[#49C7AB] opacity-30 rounded-full animate-ping"></div>
          
//                     {/* Inner Semi-Transparent Circle */}
//                     <div className="absolute w-[60px] h-[60px] bg-[#49C7AB] opacity-50 rounded-full"></div>
          
//                     {/* Play Icon Button */}
//                     <div className="relative w-[50px] h-[50px] bg-[#49C7AB]  flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition">
//                       <Play className="text-white w-8 h-8" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//         </div>
//       </section>
      
//     );
//   };
  
//   export default TreatmentSection;
import { Play } from "lucide-react";

const TreatmentSection = () => {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white ">
            <div className="w-full">
                {/* Top Section with Mission Statement & Stats */}
                <div
                    style={{
                        backgroundImage: `url('/images/Rectangle 34624123.svg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="py-16 px-4 md:px-8 lg:px-0"
                >
                    <div className="w-full max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
                            {/* Left Side - Heading + Mission */}
                            <div className="md:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                    Breaking Barriers to Recovery
                                </h2>
                                <p className="text-gray-600 text-base md:text-lg">
                                    Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities. We're deeply committed to removing obstacles to recovery, ensuring our clients get the support they need.
                                </p>
                            </div>
                            
                            {/* Right Side - Description + Stats */}
                            <div className="md:w-1/2">
                                {/* Description */}
                                <div className="mb-8">
                                    <p className="text-gray-600 text-base md:text-lg">
                                        We're not just offering a service; we're creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery—whether it's stigma, inconvenience, or lack of access to quality care.
                                    </p>
                                </div>
                                
                                {/* Statistics */}
                                <div className="flex flex-col md:flex-row flex-wrap justify-between gap-6">
                                    <div className="text-center w-full md:w-auto">
                                        <p className="text-3xl md:text-4xl font-bold text-teal-500">500+</p>
                                        <p className="text-gray-700 mt-1 text-sm md:text-base">Patients Treated</p>
                                    </div>
                                    <div className="text-center w-full md:w-auto">
                                        <p className="text-3xl md:text-4xl font-bold text-teal-500">300+</p>
                                        <p className="text-gray-700 mt-1 text-sm md:text-base">Centers Nationwide</p>
                                    </div>
                                    <div className="text-center w-full md:w-auto">
                                        <p className="text-3xl md:text-4xl font-bold text-teal-500">4.9/5</p>
                                        <p className="text-gray-700 mt-1 text-sm md:text-base">Patient Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Section with Video & Text */}
                <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-0 py-16">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Left Side Text - with light blue border on left */}
                        <div className="w-full md:w-1/2">
                            <p className="text-teal-500 font-semibold uppercase text-sm tracking-wider">
                                WELCOME TO RECOVERY DELIVERED
                            </p>
                            
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight w-full">
                                Your Fully Online Suboxone Treatment Platform
                            </h3>
                            
                            <div className="mt-4">
                                <p className="text-gray-600 text-lg">
                                    100% online opioid treatment with licensed buprenorphine providers starts at just <span className="font-semibold">$99/month</span>.
                                </p>
                                <p className="text-gray-600 mt-4 text-lg">
                                    With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script.
                                </p>
                            </div>
                        </div>
                    
                        {/* Right Side Video Thumbnail */}
                        <div className="relative w-full md:w-1/2 h-56 md:h-80">
                            {/* Video Thumbnail Image */}
                            <img
                                src="/images/Rectangle1.png"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                            
                            {/* Play Button Centered Over Image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex items-center justify-center">
                                    {/* Outer Pulsing Circle */}
                                    <div className="absolute w-full h-full bg-[#49C7AB] opacity-30 rounded-full animate-ping"></div>
                                    
                                    {/* Inner Semi-Transparent Circle */}
                                    <div className="absolute w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-[#49C7AB] opacity-50 rounded-full"></div>
                                    
                                    {/* Play Icon Button */}
                                    <div className="relative w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-[#49C7AB] flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition">
                                        <Play className="text-white w-6 md:w-8 h-6 md:h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TreatmentSection;