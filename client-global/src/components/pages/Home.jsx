import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="text-center">
          <h1 className="text-white text-6xl font-bold">Discover rare digital art and collect<br />sell extraordinary NFTs</h1>
          <p className="text-white text-2xl mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti excepturi omnis neque<br />adipisci sequi ullam unde in minus quis quos.</p>
        </div>
        <div className="flex flex-row justify-center items-center mt-10">
          <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded">Explore</button>
          <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded ml-4">Create</button>
        </div>
      </div>
  )
}

export default Home

  
