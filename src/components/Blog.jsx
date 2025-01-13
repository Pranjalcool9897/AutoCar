import React from 'react';

const BlogCard = ({ image, date, author, title }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-48 md:h-56">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 md:p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{author}</span>
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{title}</h3>
      <a href="#" className="text-primary font-semibold hover:text-red-600 transition duration-300">Read More</a>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      image: '/img7.jpg',
      date: 'Jan 20, 2024',
      author: 'By Tom Fox',
      title: 'Facts That You Should Know About Car Service'
    },
    {
      image: '/img10.jpg',
      date: 'Jan 15, 2024',
      author: 'By Tom Fox',
      title: 'Here What No One Tells You About Car Service'
    },
    {
      image: '/img11.jpg',
      date: 'July 24, 2023',
      author: 'By Tom Fox',
      title: 'The Truth About Car Service Is About To Be Revealed'
    }
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Recent Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;