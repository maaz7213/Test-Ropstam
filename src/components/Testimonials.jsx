// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       rating: 4,
//       text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
//       name: "Nicholas O.",
//       image: "public/image(1).png",
//     },
//     {
//       id: 2,
//       rating: 4,
//       text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
//       name: "Christine M.",
//       image: "public/image(2).png",
//     },
//     {
//       id: 3,
//       rating: 4,
//       text: "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
//       name: "Heather B.",
//       image: "public/image(3).png",
//     },
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           className={`text-2xl ${
//             i <= rating ? "text-yellow-400" : "text-gray-200"
//           }`}
//         >
//           ★
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="w-full bg-white py-16 mt-[56px]">
//       <div className="px-10">
//         {/* Testimonials Header */}
//         <div className="w-[65%] mx-auto flex justify-between">
//           <div className="justify-center items-center">
//             <p className="text-teal-500 font-medium mb-2 text-left">
//               OUR CLIENT'S
//             </p>
//             <h2 className="text-4xl font-bold text-gray-900 text-left">
//               Testimonials
//             </h2>
//           </div>

//           <div className="flex justify-end mt-8">
//             <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-2">
//               <span className="sr-only">Previous</span>
//               &larr;
//             </button>
//             <button className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center">
//               <span className="sr-only">Next</span>
//               &rarr;
//             </button>
//           </div>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="w-[65%] mx-auto flex flex-wrap gap-6 justify-center mt-8">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white rounded-lg shadow-md p-8 w'[450px] flex-1 h-[356px]"
//             >
//               <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              
//               <div className="h-[200px]">
//               <p className="text-gray-700 mb-8 text-sm leading-relaxed">
//               {testimonial.text}
//               </p>
//               </div>

//               <div className="flex items-center justify-start">
//                 <img
//                   src={testimonial.image}
//                   alt={`${testimonial.name} avatar`}
//                   className="w-12 h-12 rounded-full mr-4 object-cover"
//                 />
//                 <p className="font-medium text-gray-800">{testimonial.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 4,
      text: "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
      name: "Nicholas O.",
      image: "public/image(1).png",
    },
    {
      id: 2,
      rating: 4,
      text: "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
      name: "Christine M.",
      image: "public/image(2).png",
    },
    {
      id: 3,
      rating: 4,
      text: "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
      name: "Heather B.",
      image: "public/image(3).png",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <p className="text-teal-500 font-medium mb-2">OUR CLIENT'S</p>
            <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
              &larr;
            </button>
            <button className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition">
              &rarr;
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:rotate-2 hover:scale-105"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed h-[120px] overflow-hidden">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} avatar`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <p className="font-medium text-gray-800">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;