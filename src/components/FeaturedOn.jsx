const FeaturedOn = () => {
  const logos = [
    "/CBS News.png",
    "/ABC.png",
    "/NBC.png",
    "/FOX.png"
  ];
  return (
    <div className="w-[65%] h-[110px] mx-auto flex items-center justify-between px-8 py-4">
      <div>
        <p className="text-teal-500 text-xs uppercase font-semibold">As Seen</p>
        <h2 className="text-2xl font-bold text-gray-800">Featured On</h2>
      </div>
      
      {/* Logos Section with Flip Effect */}
      <div 
  style={{
    display: "flex",
    alignItems: "center",
    gap: "24px",
    width: "50%", // Ensures it fills the available space
    overflow: "hidden", // Hides overflow to prevent breaking animation
    position: "relative" // Keeps everything structured properly
  }}
>
  {/* Animated Scrolling Container */}
  <div 
    style={{
      display: "flex",
      alignItems: "center",
      gap: "70px",
      width: "max-content", // Prevents width restriction for smooth movement
      animation: "scrollLeft 10s linear infinite"
    }}
  >
    {/* Duplicated Logos for Seamless Loop */}
    {[...logos, ...logos].map((logo, index) => (
      <img 
        key={index} 
        src={logo} 
        alt="Featured Logo" 
        style={{ height: "32px", objectFit: "contain",  }} 
      />
    ))}
  </div>
</div>



    <style>
        {`
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedOn;
