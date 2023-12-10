const LiveAuction = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-black p-4">
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      
      <div className="flex justify-between items-center">
        {/* Item 1 */}
        <div className="flex flex-col justify-between items-center mb-4">
          <div className="flex flex-row justify-between items-center mb-2">
            <img
              src="./public/1.jpeg"
              alt="Item 1"
              className="w-16 h-16"
            />
          </div>
          <br />
          <h2 className="text-lg font-bold">Mumbai</h2>
          <p className="text-sm font-medium">20 ETH</p>
          <div className="flex flex-row justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Unlock
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col justify-between items-center mb-4">
          <div className="flex flex-row justify-between items-center mb-2">
            <img
              src="./public/2.jpeg"
              alt="Item 2"
              className="w-16 h-16"
            />
          </div>
          <br />
          <h2 className="text-lg font-bold">Mumbai</h2>
          <p className="text-sm font-medium">20 ETH</p>
          <div className="flex flex-row justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Unlock
            </button>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col justify-between items-center mb-4">
          <div className="flex flex-row justify-between items-center mb-2">
            <img
              src="./public/3.jpeg"
              alt="Item 3"
              className="w-16 h-16"
            />
          </div>
          <br />
          <h2 className="text-lg font-bold">Mumbai</h2>
          <p className="text-sm font-medium">20 ETH</p>
          <div className="flex flex-row justify-between items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
              Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
