import React from 'react';
import logo from "../assets/img/android-chrome-192x192.png";

function Find() {
  return (
    <div className="bg-black h-screen overflow-hidden relative flex justify-center items-center">
      <section className="flex gap-24 items-center">
        <div className="z-[-1] relative h-[50vh] w-[25vw]">
          <img
            src="https://images.unsplash.com/photo-1656337789708-cdf37b07112d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="user-image"
            className="h-full w-full object-cover mask-gradient-to-r from-black to-transparent"
          />
        </div>

        <div className="flex flex-col mt-4 space-y-10">
          <h2 className="font-sacramento text-[#f7ffb4] text-4xl md:text-7xl font-light">
            This is, <em className="font-kanit font-light text-[#C8FFD4]">James</em>
          </h2>
          <p className="text-left max-w-[500px] md:pl-12 text-[#B8E8FC] font-kanit">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua...
          </p>
        </div>
      </section>

      <footer className="absolute bottom-0 left-0 right-0 text-center bg-black p-4 text-gray-400">
        <p>&copy; 2023 Connexus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Find;
