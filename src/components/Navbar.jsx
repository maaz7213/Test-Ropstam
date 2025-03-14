
// const Navbar = () => {

//   return (
//     <div className="relative z-10 flex justify-around items-center px-6 py-4">
//     <div className="bg-[#0000001A] backdrop-blur-md flex justify-between w-[65%] px-6 py-6 items-center rounded-2xl">
//       <div className="text-white text-4xl font-bold ">LOGO</div>
//       <div className="flex items-center ">
//         <nav className="hidden md:flex space-x-8 text-white mr-4 ">
//           <a href="#" className="hover:underline">
//             Home
//           </a>
//           <a href="#" className="hover:underline">
//             About Us
//           </a>
//           <a href="#" className="hover:underline">
//             Owners
//           </a>
//           <a href="#" className="hover:underline">
//             Tenants
//           </a>
//           <a href="#" className="hover:underline">
//             Properties
//           </a>
//         </nav>
//       </div>
//       <div>
//         <a
//           href="#"
//           className="px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition"
//         >
//           Start Treatment
//         </a>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 flex justify-center items-center px-6 py-4">
      <div className="bg-[#0000001A] backdrop-blur-md flex justify-between w-full max-w-5xl px-6 py-4 items-center rounded-2xl">
        <div className="text-white text-3xl md:text-4xl font-bold">LOGO</div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Owners</a>
          <a href="#" className="hover:underline">Tenants</a>
          <a href="#" className="hover:underline">Properties</a>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#" className="px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition">
            Start Treatment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#000000CC] backdrop-blur-md py-4 flex flex-col items-center space-y-4 md:hidden rounded-b-2xl z-66">
          <a href="#" className="text-white text-lg hover:underline">Home</a>
          <a href="#" className="text-white text-lg hover:underline">About Us</a>
          <a href="#" className="text-white text-lg hover:underline">Owners</a>
          <a href="#" className="text-white text-lg hover:underline">Tenants</a>
          <a href="#" className="text-white text-lg hover:underline">Properties</a>
          <a
            href="#"
            className="px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-500 transition"
          >
            Start Treatment
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;