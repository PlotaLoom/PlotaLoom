const Flow = () => {
  return (
    <div className="flex flex-col items-center justify-enter  bg-black">
      <h1 className="text-3xl font-bold mb-4">Create and sell your NFTs</h1>
      <div className="flex flex-row flex-wrap justify-center">
        <div className="w-1/4 p-4">
          <h2 className="text-xl font-semibold mb-2">Setup your wallet</h2>
          <p className="text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Setup wallet</button>
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-xl font-semibold mb-2">Create your collection</h2>
          <p className="text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create collection</button>
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-xl font-semibold mb-2">Add your NFTs</h2>
          <p className="text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add NFTs</button>
        </div>
        <div className="w-1/4 p-4">
          <h2 className="text-xl font-semibold mb-2">List them for sale</h2>
          <p className="text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">List for sale</button>
        </div>
      </div>
    </div>
  );
};

export default Flow;
