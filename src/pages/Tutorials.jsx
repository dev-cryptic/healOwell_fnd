import React from 'react';

import { tutorials, fixCamera } from '../utils/data';

export default function Tutorials() {
    return (
        <div className="overflow-hidden w-full h-screen bg-gradient-to-r from-orange-600 to-orange-500 p-5 font-sans">
            <h1 className="text-4xl text-white font-semibold text-center font-poppins lg:text-6xl">
                Basic Tutorials
            </h1>
            <div className="w-full pb-12">
                {tutorials.map((tutorial, index) => (
                    <p key={index} className="text-white text-base ml-16 mt-1 lg:text-lg lg:ml-24">
                        {tutorial}
                    </p>
                ))}
            </div>
            <h1 className="text-4xl text-white font-semibold text-center font-poppins lg:text-6xl">
                Camera Not Working?
            </h1>
            <div className="w-full pb-12">
                {fixCamera.map((points, index) => (
                    <p key={index} className="text-white text-base ml-16 mt-1 lg:text-lg lg:ml-24">
                        {points}
                    </p>
                ))}
            </div>
        </div>
    );
}
