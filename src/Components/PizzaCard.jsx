import React from 'react';

const PizzaCard = ({ pizza }) => {
  const checkStrongBeer = (isStrong) => {
    return (
      <p className={`text-center ${isStrong ? "text-red-500" : "text-teal-500"}`}>
        The Beer is {isStrong ? "up" : "not up to"} 5%
      </p>
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={pizza.image} alt="Card image cap" />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Name:</span> {pizza.name}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Dish description:</span> {pizza.description}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Best pairing beer:</span> {pizza.beer_pairing}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold text-blue-500">Price:</span> {pizza.price}$
        </p>
        {checkStrongBeer(pizza.strong_beer)}
        <button
          onClick={() => {
            alert(pizza.name + " ");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          More info
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
