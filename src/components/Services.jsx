import React from 'react';
import { FaUser, FaCar, FaClock, FaMedal } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="text-primary text-3xl md:text-4xl mb-4 flex justify-center">
      <Icon />
    </div>
    <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base mb-4">{description}</p>
    <button className="mt-2 bg-primary text-white px-4 md:px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
      Read More
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: FaUser,
      title: "Our Best Workers",
      description: "Expert team of mechanics ready to serve you"
    },
    {
      icon: FaCar,
      title: "Fast Car Service",
      description: "Quick and efficient auto repair services"
    },
    {
      icon: FaClock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for your needs"
    },
    {
      icon: FaMedal,
      title: "Best Materials",
      description: "Using only top-quality parts and materials"
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          We Provide Best Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;