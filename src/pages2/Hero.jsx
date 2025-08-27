// src/pages2/Hero.jsx
import React from 'react';
import { href, Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r  x from-pink-100 via-pink-200 to-pink-100 text-center py-24 px-6"
     style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/vibrant-joyful-scene-colorful-balloons-confetti-presents-set-against-backdrop-childrens-birthday-party-323977407.jpg')" }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-700 mb-6 leading-tight">
          Celebrate Your Special Moments 🎂
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Book birthdays, engagements, baby showers, anniversaries, and more with ease.
        </p>
        <button className="px-8 py-3 bg-pink-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-pink-700 transition ">
          <Link to="/products" >🎁 Explore Packages</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
