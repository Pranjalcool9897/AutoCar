import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`
      absolute top-1/2 transform -translate-y-1/2 z-10
      ${direction === 'left' ? 'left-4' : 'right-4'}
      w-12 h-12 rounded-full 
      bg-gradient-to-r from-blue-500 to-cyan-400
      hover:from-blue-600 hover:to-cyan-500
      shadow-lg hover:shadow-cyan-400/50
      transition-all duration-300 ease-in-out
      flex items-center justify-center
      group
    `}
  >
    <span className="text-white text-2xl transform group-hover:scale-125 transition-transform duration-300">
      {direction === 'left' ? '←' : '→'}
    </span>
  </button>
);

const CarouselSlide = ({ image, title, specs }) => (
  <div className="relative h-screen min-h-[600px] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
      <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 animate-fade-in">
        <div className="inline-block mb-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm">
          <span className="text-cyan-400 font-medium">New Model 2024</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-slide-in-left text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 leading-tight">
          {title.main}
          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 text-transparent bg-clip-text">
            {title.highlight}
          </span>
        </h1>
        <div className="space-y-4">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="animate-slide-in-left backdrop-blur-md bg-gradient-to-r from-white/10 to-white/5 
                         rounded-xl p-4 border border-white/10 transform hover:scale-105 
                         transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <p className="text-lg md:text-xl font-medium text-gray-300 uppercase tracking-wider mb-1">
                {spec.label}
              </p>
              <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-300 
                           text-transparent bg-clip-text">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 animate-slide-in-right relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl -z-10"></div>
        <img 
          src={image} 
          alt="Car" 
          className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]" 
        />
      </div>
    </div>
  </div>
);

const Hero = () => {
  const slides = [
    {
      image: '/car.png',
      title: { main: 'AutoCare', highlight: 'CARS' },
      specs: [
        { label: 'Top Speed', value: '300 km/h' },
        { label: 'WIDTH', value: '1852 mm' },
        { label: 'LENGTH', value: '4519 mm' }
      ]
    },
    {
      image: '/car2.png',
      title: { main: 'Premium', highlight: 'SERVICE' },
      specs: [
        { label: 'Experience', value: '15+ Years' },
        { label: 'Locations', value: '50+ Centers' },
        { label: 'Satisfaction', value: '100%' }
      ]
    },
    {
      image: '/car.png',
      title: { main: 'Expert', highlight: 'CARE' },
      specs: [
        { label: 'Mechanics', value: '100+' },
        { label: 'Brands', value: 'All Major' },
        { label: 'Support', value: '24/7' }
      ]
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-screen min-h-[600px]"
        {...settings}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;