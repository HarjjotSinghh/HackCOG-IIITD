import React from 'react';
import logo from "../assets/img/android-chrome-192x192.png";
import { webAppName } from '../App';

function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="home-page text-center">
        <h1 className="text-6xl absolute top-1/3 left-1/3 z-[-1] font-extrabold text-blue-800m -translate-x-1/2 -translate-y-1/2">Welcome To CONNEXUS</h1>
      </div>
      <section id="buttons" className="mt-20">
        <div className="flex justify-center items-center space-x-8">
          <button type="button" className="btn btn-secondary px-4 py-2 bg-gray-500 text-lg font-bold text-white">Primary</button>
          <button type="button" className="btn btn-secondary px-4 py-2 bg-gray-500 text-lg font-bold text-white">Primary2</button>
          <div className="border-2 border-green-500 h-24"></div>
        </div>
      </section>

      <div className="fixed top-0 right-0 h-screen w-[50%] bg-black overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover transform translate-x-[100%]"
        >
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}


export default Home;

