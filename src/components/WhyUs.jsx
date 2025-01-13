import React from 'react';
import { FaCog, FaUserTie, FaCar, FaUsers } from 'react-icons/fa';

const WhyUs = () => {
  const features = [
    { icon: FaCog, text: "We're Experts" },
    { icon: FaUserTie, text: "We are young talented certified engineers" },
    { icon: FaCar, text: "Fast Car Services" },
    { icon: FaUsers, text: "Our Best Workers" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img src="/img9.jpg" alt="Mechanic" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">We Are The Best</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <feature.icon className="text-primary text-2xl" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;