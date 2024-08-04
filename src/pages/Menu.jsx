import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { pizzaGenerator } from '../functions/pizzaGenerator';
import { filterArray } from '../functions/filterArray';
import pizzaArray from '../PizzaArray.json';
import Button from '../Components/Button';
import { sliceArray } from '../functions/sliceArray';
import NeBaButton from '../Components/NeBaButton';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [choose, setChoose] = useState('');
  const [currentArr, setCurrentArr] = useState(pizzaArray.slice(0, 3));
  const [filteredArr, setFilteredArr] = useState(pizzaArray);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputPageNumber, setInputPageNumber] = useState('');

  // Update filtered array whenever searchTerm or choose changes
  useEffect(() => {
    const newFilteredArr = filterArray(pizzaArray, choose, searchTerm);
    setFilteredArr(newFilteredArr);
    setCurrentArr(sliceArray(newFilteredArr, 1)); // Reset to the first page
    setPageNumber(1); // Reset page number
  }, [searchTerm, choose]);

  const handleNextButtonClick = () => {
    if (pageNumber < Math.ceil(filteredArr.length / 3)) {
      setCurrentArr(sliceArray(filteredArr, pageNumber + 1));
      setPageNumber(pageNumber + 1);
    }
  };

  const handleBackButtonClick = () => {
    if (pageNumber > 1) {
      setCurrentArr(sliceArray(filteredArr, pageNumber - 1));
      setPageNumber(pageNumber - 1);
    }
  };

  const handleButtonClick = (pageNumber) => {
    setCurrentArr(sliceArray(filteredArr, pageNumber));
    setPageNumber(pageNumber);
  };

  const buttonGenerator = (pages) => {
    let buttons = [];
    for (let i = 1; i <= pages; i++) {
      buttons.push(<Button number={i} key={i} func={() => handleButtonClick(i)} page={pageNumber} />);
    }
    return buttons;
  };

  const goToPage = () => {
    const page = parseInt(inputPageNumber, 10);
    if (!isNaN(page) && page >= 1 && page <= Math.ceil(filteredArr.length / 3)) {
      setCurrentArr(sliceArray(filteredArr, page));
      setPageNumber(page);
      setInputPageNumber('');
    } else {
      alert('Invalid page number');
    }
  };

  return (
    <div>
      <Header />
      <main className='container mx-auto mt-32'>
        <div className='flex justify-center items-center gap-3 mb-4'>
          <form className='flex flex-col sm:flex-row items-center gap-2 mt-3'>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for order..."
              value={searchTerm}
              className='border rounded px-4 py-2'
            />
            <select className='border-2 h-10' onChange={(e) => setChoose(e.target.value)} value={choose}>
              <option value="">Select a category</option>
              <option value="beer">Beer</option>
              <option value="pasta">Pasta</option>
              <option value="pizza">Pizza</option>
            </select>
          </form>
        </div>
        <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center'>
          {currentArr.length > 0 ? pizzaGenerator(currentArr) : <p>No results found.  try another product.</p>}
        </div>
        <div className='flex justify-center items-center gap-3 mt-4'>
          <NeBaButton
            status="Back"
            func={handleBackButtonClick}
            disabled={pageNumber <= 1}
          />
          {buttonGenerator(Math.ceil(filteredArr.length / 3))}
          <NeBaButton
            status="Next"
            func={handleNextButtonClick}
            disabled={pageNumber >= Math.ceil(filteredArr.length / 3)}
          />
        </div>
        <div className='flex justify-center items-center gap-3 mt-4 mb-4'>
          <input
            type="number"
            value={inputPageNumber}
            onChange={(e) => setInputPageNumber(e.target.value)}
            placeholder="Go to page..."
            className='border rounded px-4 py-2'
          />
          <button
            onClick={goToPage}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Go
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
  