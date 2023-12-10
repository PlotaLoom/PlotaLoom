const LiveAuction = () => {
    return (
      <div className="flex flex-col justify-between items-center bg-white p-4 mt-10">
        <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
        <div className="grid grid-cols-3 gap-4">
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* Travel Monkey Club */}
          <div className="flex flex-col justify-between items-center mb-4">
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Travel Monkey Club</h2>
              <img
                src="https://image.png"
                alt="Travel Monkey Club"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <p className="text-sm font-medium">Created By Trista Francis</p>
            <p className="text-sm font-medium">Current Bid 5.89 ETH</p>
            <div className="flex flex-row justify-between items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Place Bid
              </button>
              <a href="#" className="text-blue-500 font-medium">
                View History
              </a>
            </div>
          </div>
  
          {/* Sir Lion Swag */}
          <div className="flex flex-col justify-between items-center mb-4">
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Sir Lion Swag</h2>
              <img
                src="https://image.png"
                alt="Sir Lion Swag"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <p className="text-sm font-medium">Created By Trista Francis</p>
            <p className="text-sm font-medium">Current Bid 5.09 ETH</p>
            <div className="flex flex-row justify-between items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Place Bid
              </button>
              <a href="#" className="text-blue-500 font-medium">
                View History
              </a>
            </div>
          </div>
  
          {/* Another Item */}
          <div className="flex flex-col justify-between items-center mb-4">
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="text-lg font-bold">Another Item</h2>
              <img
                src="https://image.png"
                alt="Another Item"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <p className="text-sm font-medium">Created By Someone Else</p>
            <p className="text-sm font-medium">Current Bid 4.50 ETH</p>
            <div className="flex flex-row justify-between items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Place Bid
              </button>
              <a href="#" className="text-blue-500 font-medium">
                View History
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LiveAuction;
  