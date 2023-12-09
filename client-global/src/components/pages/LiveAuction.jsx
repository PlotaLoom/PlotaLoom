import React from "react";

const LiveAuction = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h1 className="text-3xl font-bold mt-3 mb-3">Marketplace</h1>
      <div className="flex flex-row justify-between">

        <div className="flex flex-col mr-4">
          <img src="https://i.imgur.com/Guard.png" alt="Travel Monkey Club" />
          <p className="text-xl font-bold">Travel Monkey Club</p>
          <p className="text-base">Created By: Trista Francis</p>
          <p className="text-base">Current Bid: 5.89 ETH</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5">
            Place Bid
          </button>
          <a href="#">View History</a>
        </div>
        <div className="flex flex-col mr-4">
          <img src="https://i.imgur.com/Guard.png" alt="Sir Lion Swag" />
          <p className="text-xl font-bold">Sir Lion Swag</p>
          <p className="text-base">Created By: Trista Francis</p>
          <p className="text-base">Current Bid: 5.09 ETH</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5">
            Place Bid
          </button>
          <a href="#">View History</a>
        </div>
        <div className="flex flex-col mr-4">
          <img src="https://i.imgur.com/Guard.png" alt="Civilian"/>
          <p className="text-xl font-bold">Civilian</p>
          <p className="text-base">Created By: Trista Francis</p>
          <p className="text-base">Current Bid: 6.89 ETH</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5">
            Place Bid
          </button>
          <a href="#">View History</a>
        </div>
        <div className="flex flex-col">
          <img src="https://i.imgur.com/Guard.png" alt="Guard" />
          <p className="text-xl font-bold">Guard</p>
          <p className="text-base">Created By: Trista Francis</p>
          <p className="text-base">Current Bid: 7.89 ETH</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-5">
            Place Bid
          </button>
          <a href="#">View History</a>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
