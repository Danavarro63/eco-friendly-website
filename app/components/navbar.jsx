"use client";
import React, { useState, useEffect } from 'react';
import Freeshipping from './freeshipping';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import products from "app/Product/[ProductId]/records.json";
import Link from 'next/link';
import Select from "react-select";
import Basket from "./Basket.jsx";
import Products from "app/Product/[ProductId]/records.json";
import Logo from 'public/ecofriendly-transformed.png';
import Image from 'next/image';

function Navbar({ basketItemsIds, setBasketItemsIds }) {
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
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  function calculateTotal() {
    let total = 0;
    if(!basketItemsIds){
      return;
    }
    for (let i = 0; i < basketItemsIds.length; i++) {
      total = total + Products[basketItemsIds[i]].price;
      console.log(Products[basketItemsIds[i]].price);
    }
    return total.toFixed(2);
  }

  return (
    <>
      <Freeshipping />
      <div className='h-24 items-center justify-between flex'>
      <div> 
        <Link href="/">
          <Image className='cursor-pointer' src={Logo} alt={"logo"} width={100} height={100} />
        </Link>
      </div>
      <div>
      <div className='flex flex-row items-center bg-gray-100 rounded-2xl h-10 px-2 justify-between lg:w-96 md:w-72 sm:w-60 xs:w-48 w-40'>
              <Select
                options={options}
                value={searchQuery}
                onChange={(selectedOption) => setSearchQuery(selectedOption)}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                isClearable
                isSearchable
                className="w-full rounded-lg focus:outline-none outline-none text-sm"
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
              <button onClick={handleSearch} className='text-sm'>Search</button>
        </div>
      </div>
      <div className='hidden md:flex md:flex-row md:gap-4 items-center'>
          <div className='flex flex-row gap-2 items-center cursor-pointer hover:text-black/75'>
            <button onClick={toggleBasket}>Basket/£{calculateTotal()}</button>
            <BsBag onClick={toggleBasket} />
          </div>
          <Link href={"/Checkout"} className='bg-blue-400 rounded-3xl h-8 text-white px-2 flex justify-center items-center hover:bg-blue-500 cursor-pointer text-sm'>
            Checkout
          </Link>
        </div>
        <BsBag size={40} className="md:hidden cursor-pointer" onClick={toggleBasket} />
      </div>

      {basketOpen &&
        <Basket  basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />}
    </>
  );
}

export default Navbar;