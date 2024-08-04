// components/Menu.jsx
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { pizzaGenerator } from '../functions/pizzaGenerator';
import { fetchImages } from '../functions/pixabayApi';
import pizzaArray from '../PizzaArray.json';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [choose, setChoose] = useState('');
  const [images, setImages] = useState([]);
  
  // Filter pizzas based on the search term
  const filteredPizzas = pizzaArray.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle form submission
  const send = async (e) => {
    e.preventDefault();
    if (choose === '') {
      alert('Please choose an option');
      return;
    }
    await fetchImages(choose, setImages);
  };

  
  return (
    <div>
      <Header />
      <main className='container mx-auto mt-32'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <form onSubmit={send} className='flex flex-col sm:flex-row items-center gap-2 mt-3'>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for order..."
              value={searchTerm} 
              className='border rounded px-4 py-2'
            />
            <select className='border-2 h-10' onChange={(e) => setChoose(e.target.value)}>
              <option value="">Select a category</option>
              <option value="beer">Beer</option>
              <option value="pasta">Pasta</option>
              <option value="pizza">Pizza</option>
            </select>
            <button
              type="submit"
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Search
            </button>
          </form>
        </div>
        <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
        {pizzaGenerator(images.length > 0 ? images : filteredPizzas)}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
