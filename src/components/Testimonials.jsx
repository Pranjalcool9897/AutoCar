import React from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What People Are Saying
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 text-white">
            <FaChevronLeft size={24} />
          </button>
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaQuoteLeft className="text-primary text-4xl" />
            </div>
            <p className="text-gray-600 mb-4">
              "There are many variations of passages of Lorem Ipsum typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make a type specimen book."
            </p>
            <div className="flex items-center justify-center">
              <img src="/pic12.jpg" alt="Maria Smith" className="w-12 h-12 rounded-full" />
              <h4 className="ml-4 font-bold">Maria Smith</h4>
            </div>
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white">
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;