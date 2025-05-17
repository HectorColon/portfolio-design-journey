
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full">
              <h1 className="big-title">404</h1>
            </div>
            
            <h1 className="text-white mb-6">Page Not Found</h1>
            
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            
            <Link to="/">
              <Button className="bg-portfolio-primary hover:bg-portfolio-secondary text-white">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
