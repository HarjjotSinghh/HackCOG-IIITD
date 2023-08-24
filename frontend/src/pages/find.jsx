import React from 'react';
import logo from "../assets/img/android-chrome-192x192.png"

function Find() {
    return (
        <div className="bg-black h-screen">

            <section className="flex gap-24 items-start pl-10">
                <div className="z-[-1]">
                    <img src="https://images.unsplash.com/photo-1656337789708-cdf37b07112d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="user-image" className="h-screen object-cover mask-gradient-to-r from-black to-transparent"/>
                </div>

                <div className="flex flex-col mt-[-90px] space-y-10">
                    <h2 className="font-sacramento text-[#f7ffb4] text-7xl font-light">
                        This is, <em className="font-kanit font-light text-[#C8FFD4]">James</em>
                    </h2>
                    <p className="text-left max-w-[500px] pl-12 text-[#B8E8FC] font-kanit">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                </div>
            </section>

            <section className="absolute bottom-7 right-12 flex gap-2 items-center justify-center p-4 bg-[#2F2F2F] rounded-lg">
                <div className="w-12 h-12 bg-antiquewhite rounded-full"></div>
                <div className="w-12 h-12 bg-antiquewhite rounded-full"></div>
                <div className="w-12 h-12 bg-antiquewhite rounded-full"></div>
            </section>
        </div>
    );
}

export default Find;
