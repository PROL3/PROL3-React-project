import React from 'react';

const PizzaCard = ({ item }) => {
  const checkStrongBeer = (isStrong) => {
    return (
      <p className={`text-center ${isStrong ? "text-red-500" : "text-teal-500"}`}>
        The Beer is {isStrong ? "up" : "not up to"} 5%
      </p>
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={item.image} alt="item image" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Name:</span> {item.name}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Description:</span> {item.description}
        </p>
        {/* Check if the item type is item, then show beer pairing */}
        {item.type === 'item' && item.beer_pairing && (
          <p className="text-gray-700 text-base">
            <span className="font-bold text-blue-500">Best pairing beer:</span> {item.beer_pairing}
          </p>
        )}
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Price:</span> {item.price}$
        </p>
        {/* Check if the item has strong beer information */}
        {item.isStrong !== undefined && checkStrongBeer(item.isStrong)}
        <button
          onClick={() => {
            alert(item.name + " ");
          }}
          className=" mt-2 bg-gray-900 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
          More info
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
