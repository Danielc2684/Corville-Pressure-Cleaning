import React from 'react';

const blogPosts = [
  { title: 'Benefits of Regular Pressure Washing', link: '#', description: 'Learn how regular pressure washing can extend the life of your home\'s exterior and keep it looking its best.' }
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.link}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;