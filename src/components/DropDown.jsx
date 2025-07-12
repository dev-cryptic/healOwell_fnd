import { useContext, useState } from 'react';
import YogaContext from "../YogaContext";
import { poseImages } from '../utils/pose_images';

export default function DropDown({ poseList }) {
    const { currentPose, setCurrentPosefunc } = useContext(YogaContext);

    // State to control the visibility of the dropdown
    const [isOpen, setIsOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Handle selection of pose
    const handleSelectPose = (pose) => {
        setCurrentPosefunc(pose); // Set the selected pose
        setIsOpen(false); // Close the dropdown
    };

    return (
        <div className="flex justify-end relative">
            {/* Button for dropdown */}
            <button
                className="w-48 bg-white text-black border border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="button"
                onClick={toggleDropdown} // Toggle dropdown on click
            >
                {currentPose || 'Select Pose'}
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <ul className="dropdown-menu absolute right-0 top-12 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg max-h-[40vh] overflow-y-auto z-20">
                    {poseList.map((pose) => (
                        <li key={pose}>
                            <button
                                onClick={() => handleSelectPose(pose)} // Close dropdown after selection
                                className="flex items-center justify-start py-2 px-4 text-left w-full hover:bg-gray-200 rounded-md focus:outline-none"
                            >
                                {/* Pose name and image */}
                                <div className="flex items-center space-x-3">
                                    <p className="text-gray-800 text-sm">{pose}</p>
                                    <img
                                        src={poseImages[pose]}
                                        className="w-16 h-16 rounded-md object-cover"
                                        alt={`${pose} image`}
                                    />
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
