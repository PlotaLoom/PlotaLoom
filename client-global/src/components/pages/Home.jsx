import React from 'react';

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./public/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col justify-center items-center h-full relative z-10">
        <div className="text-center pb-10">
          <h1 className="text-white text-6xl font-bold">
            Redefining Property Dealings Globally!
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


  
