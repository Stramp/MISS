'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function CarouselDemo() {
  const slides = [
    { title: 'Inovação', color: 'bg-blue-500' },
    { title: 'Performance', color: 'bg-purple-500' },
    { title: 'Design', color: 'bg-indigo-500' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div
              className={`${slide.color} h-64 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-xl`}
            >
              {slide.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
