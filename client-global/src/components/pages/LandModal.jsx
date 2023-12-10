import React from "react";

const LandModal = ({ onClose, imageSrc }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80">
      <div className="bg-white p-8 rounded-lg text-center">
        {/* Use the passed image source */}
        <img src={imageSrc} alt="Big Image" className="w-80 h-80 mb-4" />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            Buy
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
            Auction
          </button>
          <a href="/chat">
            <button className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
              Chat
            </button>
          </a>
        </div>

        {/* Close button */}
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LandModal;
