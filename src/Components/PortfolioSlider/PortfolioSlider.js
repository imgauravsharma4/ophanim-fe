import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slider2 from '../../assests/images/slider2.png'
import slider3 from '../../assests/images/slider3.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

// const sliderImageUrl = [
//   {
//     url: slider2,
//   },
//   {
//     url: slider2,
//   },
//   {
//     url: slider3,
//   },
//   {
//     url: slider3,
//   },
 
// ];

// const PortfolioSlider = () => {
//   return (
//     <div className='container'>
//       <Carousel
//         responsive={responsive}
//         autoPlay
//         swipeable
//         draggable
//         infinite
//         keyBoardControl
//         containerClass="carousel-container"
        
//       >
//         {sliderImageUrl.map((imageUrl, index) => (
//           <div key={index}>
//             <img src={imageUrl.url} alt={`slide-${index}`} className="slider-image" />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default PortfolioSlider;


// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 1
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
//     slidesToSlide: 1
//   },
//   mobile: {
//     breakpoint: { max: 768, min: 0 },
//     items: 1,
//     slidesToSlide: 1
//   }
// };

// const CustomButtonGroup = ({ next, previous }) => {
//   return (
//     <div className="absolute w-full flex justify-between items-center top-1/2 -translate-y-1/2">
//       <button 
//         onClick={previous}
//         className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg -ml-5 hover:bg-gray-100 transition-colors"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button 
//         onClick={next}
//         className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg -mr-5 hover:bg-gray-100 transition-colors"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

const PortfolioSlider = () => {
  const sliderImageUrl = [
    {
      url: slider2,
    },
    {
      url: slider2,
    },
    {
      url: slider3,
    },
    {
      url: slider3,
    },
   
  ];

  return (
    <div className="container mx-auto relative px-8">
      <Carousel
        responsive={responsive}
        autoPlay
        swipeable
        draggable
        keyBoardControl
        // customButtonGroup={<CustomButtonGroup />}
        arrows={false}
        renderButtonGroupOutside
        className="py-8"
        containerClass="carousel-container"
        itemClass="px-4"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={imageUrl.url} 
              alt={`slide-${index}`} 
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PortfolioSlider;