import React, { useContext } from 'react';
import YogaContext from "../YogaContext";
import { poseInstructions } from '../utils/data';
import { poseImages } from '../utils/pose_images';

export default function Instructions() {
    const { currentPose } = useContext(YogaContext);

    return (
        <div className="flex flex-col-reverse md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-8">
            <ol className="w-full md:w-2/5 p-4 rounded-lg bg-gray-800 shadow-lg">
                {poseInstructions[currentPose].map((instruction, index) => (
                    <li key={index} className="my-5 text-white font-normal tracking-wide">
                        {instruction}
                    </li>
                ))}
            </ol>
            <img 
                className="h-[200px] md:h-[400px] aspect-square rounded-lg mt-5 md:mt-0 shadow-lg"
                src={poseImages[currentPose]}
                alt="pose_images"
            />
        </div>
    );
}
