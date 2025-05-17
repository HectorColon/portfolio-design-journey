
import React from 'react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full">
          <h1 className="big-title">POSTS</h1>
        </div>
        
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-white">
            <span className="text-gradient">Blog</span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center justify-center h-80 animate-slide-up">
          <h2 className="text-5xl text-white mb-8">Coming Soon</h2>
          <p className="text-gray-400 max-w-lg text-center mb-8">
            I'm working on creating valuable content to share my knowledge and experiences.
            Check back soon for articles on software development, technology trends, and more.
          </p>
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white">
            Notify Me When Live
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
