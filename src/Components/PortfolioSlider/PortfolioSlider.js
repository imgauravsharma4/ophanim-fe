// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const PortfolioSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const portfolioItems = [
//     {
//       id: 1,
//       image: "../../assests/images/slideimg.png"
//     },
//     {
//       id: 2,
//       image: "../../assests/images/slideimg.png"
//     },
//     {
//       id: 3,
//       image: "../../assests/images/slideimg.png"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div className="flex items-center justify-center">
//         {/* Slider container */}
//         <div className="relative w-full max-w-6xl mx-auto px-4">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-800" />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-800" />
//           </button>

//           {/* Slides */}
//           <div 
//             className="flex transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {portfolioItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-full flex-shrink-0 px-4 py-8"
//               >
//                 <div className="bg-white rounded-lg shadow-lg p-4 mx-auto max-w-md">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-auto rounded-lg mb-4 object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Dots navigation */}
//           <div className="flex justify-center mt-4 gap-2">
//             {portfolioItems.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-2 w-2 rounded-full transition-colors ${
//                   currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioSlider;