"use client"
import React, { useState } from 'react';
import Freeshipping from './freeshipping';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import products from "app/Product/[ProductId]/records.json";
import Link from 'next/link';
import Select from "react-select";
import Basket from "./Basket.jsx";

import Logo from 'public/ecofriendly-transformed.png';
import Image from 'next/image';

function Navbar() {
  const options = products.map((product) => ({
    value: product.title,
    label: product.title,
  }));

  const categories = ['all', 'baby', 'bathroom', 'health', 'personal'];

  const [menuOpen, setIsMenuOpen] = useState(false);
  const [basketOpen, setIsBasketOpen] = useState(false);

  const toggleBasket = () => {
    setIsBasketOpen(!basketOpen);
  };

  console.log(basketOpen);
  const togglehamburger = () => {
    setIsMenuOpen(!menuOpen);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery && searchQuery.value) {
      const product = products.find(
        (product) => product.title.toLowerCase() === searchQuery.value.toLowerCase()
      );
      if (product) {
        window.location.href = `/Product/${product.id}`;
      } else {
        console.log(product);
        console.log(searchQuery.value);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Freeshipping />
      <div className='h-24 items-center pl-12 justify-between pr-12 flex'>
        <button onClick={togglehamburger} className="md:hidden cursor-pointer">
          {menuOpen ? (
            <div className=''>
              <ul className='border-2 gap-4 w-48 left-0 absolute ml-4 pb-4 z-20 bg-white flex flex-col '>
                <div>
                  <RiCloseLine size={40} />
                </div>
                <li className=' hover:text-gray-700 hover:scale-110 '> <a href="#">All</a></li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#">Baby</a></li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#">Beauty</a></li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#">Pet</a></li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#"></a>Dairy</li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#"></a>New Arrivals</li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#"></a>Skincare</li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#"></a>Kitchen</li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#"></a>Bathroom</li>
                <li className=' hover:text-gray-700 hover:scale-110'> <a href="#"></a>Gifts</li>
              </ul>
            </div>

          ) : (
              <RxHamburgerMenu size={40} />

            )}
        </button>

        <div className='flex flex-row'>
          <Link href="/">
            <Image className='cursor-pointer' src={Logo} alt={"logo"} width={100} />
          </Link>
          <div className='md:flex md:flex-row md:gap-12 items-center hidden'>
            <select className='h-8 bg-gray-100 rounded-2xl text-sm p-1 ml-4 border border-black/10'>
              <option value="All">All</option>
              <option value="baby">Baby</option>
              <option value="beauty">beauty</option>
              <option value="pet">pet</option>
              <option value="dairy">dairy</option>
            </select>
            <div className='flex flex-row items-center bg-gray-100 rounded-2xl h-10 px-2 justify-between'>
              <BiSearchAlt2 />
              <Select
                options={options}
                value={searchQuery}
                onChange={(selectedOption) => setSearchQuery(selectedOption)}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                isClearable
                isSearchable
                className="w-96 rounded-lg focus:outline-none outline-none"
                classNamePrefix="react-select"
                styles={{
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    display: 'none',
                    boxShadow: 'none',
                    zIndex: 20,
                    outline: 'none',

                  }),
                }}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className='hidden md:flex md:flex-row md:gap-4 items-center'>
          <p className='cursor-pointer hover:text-black/75'>Login</p>
          <div className='flex flex-row gap-2 items-center cursor-pointer hover:text-black/75'>
            <button onClick={toggleBasket}>Basket/£0.00</button>
            <BsBag onClick={toggleBasket} />
          </div>
          <div className=' bg-blue-400 rounded-3xl h-8 text-white px-2 flex justify-center items-center hover:bg-blue-500 cursor-pointer'>
            Checkout
          </div>
        </div>
        <BsBag size={40} className="md:hidden cursor-pointer" onClick={togglehamburger} />
      </div>

      {basketOpen &&
        <Basket />}
    </>
  );
}

export default Navbar;
