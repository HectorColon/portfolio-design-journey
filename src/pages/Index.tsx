
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">
        <Navigate to="/about" replace />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
