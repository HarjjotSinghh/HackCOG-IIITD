import React from 'react';
import logo from "../assets/img/android-chrome-192x192.png"
import { webAppName } from '../App';

function Home() {
    return (
        <div className="bg-gray-100">
            <div className="home-page text-center mt-48 mx-32">
                <h1 className="text-6xl font-extrabold text-blue-800">{webAppName}</h1>
                <h1 className="text-6xl absolute top-24 left-80 text-green-400 z-[-1] font-cursive">Welcome To</h1>
            </div>

            <section id="buttons" className="mt-20">
                <div className="flex justify-center items-center space-x-24">
                    <button type="button" className="btn btn-secondary px-4 py-2 bg-gray-500 text-lg font-bold text-white">Primary</button>
                    <div className="border-2 border-green-500 h-24"></div>
                    <button type="button" className="btn btn-secondary px-4 py-2 bg-gray-500 text-lg font-bold text-white">Primary2</button>
                    <div className="connexusL absolute right-[-44%] z-[-1]">
                        <img src={logo} alt="connexus logo" className="connexus-logo mt-24 w-[1300px] h-[1300px] z-[-1] animate-spin duration-10000 ease-in-out infinite"/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
