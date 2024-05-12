import React from 'react';
// Import your image at the top of your file

const BackgroundImageTextOverlay = () => {
  return (
    <div className="relative flex items-center justify-center h-100 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center text-white max-w-lg p-5 bg-black bg-opacity-50 rounded-lg">
        <h1>Let's grow your business from the inside out.</h1>
        <button className="mt-5 px-6 py-2 bg-yellow-500 rounded font-bold">Click Here to Take the Quiz</button>
      </div>
    </div>
  );
};

export default BackgroundImageTextOverlay;