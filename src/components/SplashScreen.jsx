import React from 'react';
import logo from '../assets/Images/R_logo.png';

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-fade-in-down mb-8">
        <img
          src={logo}
          alt="HRAIN Logo"
          className="w-32 h-32 animate-spin rounded-full"
        />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600 tracking-wider animate-fadeInUp">
          Welcome to HRAIN
        </h1>
        <p className="text-xl text-gray-600 font-light tracking-wide animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          Innovation of Future
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
