import React from 'react';

const blogPosts = [
  { 
    title: 'Benefits of Regular Pressure Washing', 
    link: '#', 
    description: 'Learn how regular pressure washing can extend the life of your home\'s exterior and keep it looking its best.', 
    image: '/images/pressure_washing_benefits.jpg' // Example image
  }
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
