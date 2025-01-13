import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselSlide = ({ image, title, specs }) => (
  <div className="relative h-screen min-h-[600px] flex items-center">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title.main}
          <span className="text-primary">{title.highlight}</span>
        </h1>
        <div className="space-y-2">
          {specs.map((spec, index) => (
            <div key={index}>
              <p className="text-lg md:text-xl">{spec.label}</p>
              <p className="text-2xl md:text-3xl font-bold">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 " >
        <img src={image} alt="Car" className=" w-full h-auto max-h-[500px] object-contain" />
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

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-screen min-h-[600px]"
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