import { useState } from 'react';
import LandModal from './LandModal';

const LiveAuction = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, imageSrc: "./public/1.jpeg", location: "Mumbai", price: "20 ETH" },
    { id: 2, imageSrc: "./public/2.jpeg", location: "Bangalore", price: "30 ETH" },
    { id: 3, imageSrc: "./public/3.jpeg", location: "Delhi", price: "10 ETH" },
  ];

  const handleUnlock = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col justify-between items-center bg-black p-14">
      <div className="flex justify-between items-center space-x-8">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col justify-between items-center">
            <div className="flex flex-row justify-between items-center">
              <img
                src={item.imageSrc}
                alt={'Item ${item.id}'}
                className="w-80 h-80"
              />
            </div>
            <br />
            <h2 className="text-lg font-bold text-white pb-2">{item.location}</h2>
            <p className="text-sm font-medium text-white pb-4">{item.price}</p>
            <div className="flex flex-row justify-between items-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                onClick={() => handleUnlock(item)}
              >
                Unlock
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <LandModal
          onClose={handleCloseModal}
          imageSrc={selectedItem ? selectedItem.imageSrc : ''}
        />
      )}
    </div>
  );
};

export default LiveAuction;
