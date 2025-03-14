
import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Rectangle1.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-50"></div>
      </div>

      {/* Header/Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-7 flex flex-col justify-center md:justify-end h-full w-full max-w-4xl mx-auto px-6 text-white text-center md:text-left">
        <div>
          <p className="text-sm md:text-base tracking-wide">
            No lines. Less hassle. Lower costs.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4">
            Easy Online Suboxone
            <br className="hidden md:block" />
            Treatment for Opioid
            <br className="hidden md:block" />
            Addiction
          </h1>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#"
              className="px-6 py-3 bg-teal-400 text-white text-lg font-medium rounded-md hover:bg-teal-500 transition inline-flex items-center mb-6"
            >
              Download The App Today <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
