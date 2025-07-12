import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import sound from '../sounds/meditation.mp3';

// Import images
import bk7 from '../assets/bk7.png'; // Background image
import bk6 from '../assets/bk6.png'; // Yoga image

const Player = () => {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const soundBite = new Audio(sound);

  // Function to handle button click
  const handleClick = () => {
    soundBite.play();
    setDisable(true);
    setCount(count + 1);

    // Re-enable the button after 3 seconds
    setTimeout(() => {
      setDisable(false);
    }, 3000); // Adjust this duration as needed
  };

  return (
    <section
      className="relative bg-cover bg-center text-black p-5 h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bk7})`, // Use the imported background image
      }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
        "Meditation is not evasion; <br /> it is a serene encounter with reality."
      </h1>

      <div className="flex justify-center mb-8">
        <Button
          disabled={disable}
          onClick={handleClick}
          variant="dark"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Meditate
        </Button>
      </div>

      <h2 className="text-xl sm:text-2xl text-center mb-4">Total: {count}</h2>
      <h3 className="text-lg sm:text-xl text-center mb-8">Today's</h3>

      <div className="flex justify-center mb-8">
        {/* Display count directly without animation */}
        <h2 className="text-5xl">{count}</h2>
      </div>

      <div className="flex justify-center">
        <img
          className="w-40 sm:w-64 h-auto object-contain"
          src={bk6} // Yoga image used properly
          alt="cartoon doing yoga pose"
        />
      </div>
    </section>
  );
};

export default Player;
