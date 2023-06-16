"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Products from 'app/Product/[ProductId]/records.json';
import { AiOutlineCloseCircle, AiOutlineMinus } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';

const BasketItem = ({ id, basketItemsIds, removeFromBasket, addToBasket, removeOneFromBasket }) => {
  return (
    <div className="flex py-2 w-full border-b">
      <div className="p-2">
        <Image src={Products[id].image} width={75} height={75} alt={'ProductImage'} />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h1>{Products[id].title}</h1>
        </div>
        <p className="text-gray-700">quantity:</p>
        <p className="text-gray-500">{`£${Products[id].price} x ${basketItemsIds.reduce(
          (accumulator, currentItem) => {
            if (currentItem === id) {
              return accumulator + 1;
            }
            return accumulator;
          },
          0
        )} = £${(Products[id].price *
          basketItemsIds.reduce(
            (accumulator, currentItem) => {
              if (currentItem === id) {
                return accumulator + 1;
              }
              return accumulator;
            },
            0
          )).toFixed(2)}`}</p>
      </div>
      <div className="flex items-center">
        <button>
          <BsPlusLg size={40} onClick={() => addToBasket(id)} />
        </button>
        <button>
          <AiOutlineMinus size={40} onClick={() => removeOneFromBasket(id)} />
        </button>
        <button>
          <AiOutlineCloseCircle size={40} onClick={() => removeFromBasket(id)} />
        </button>
      </div>
    </div>
  );
};

const Basket = ({ basketItemsIds, removeFromBasket, addToBasket, removeOneFromBasket }) => {
  const uniqueBasketItemsIds = [...new Set(basketItemsIds)];

  return (
    <div className="z-50 w-fit border-2 p-4 h-96 overflow-scroll ml-auto mr-12">
      <h1 className="text-3xl mx-auto w-full">Basket</h1>
      {uniqueBasketItemsIds.map(function (itemId) {
        return (
          <BasketItem
            key={itemId} // Add key prop for React rendering
            id={itemId}
            removeOneFromBasket={removeOneFromBasket}
            basketItemsIds={basketItemsIds}
            removeFromBasket={removeFromBasket} // Fix prop name typo
            addToBasket={addToBasket}
          />
        );
      })}

      <div className="bg-blue-400 rounded-3xl h-8 text-white px-2 flex justify-center items-center hover:bg-blue-500 cursor-pointer">
        Checkout
      </div>
    </div>
  );
};

const ParentComponent = () => {
  const [basketItemsIds, setBasketItemsIds] = useState([
    1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1
  ]);

  const removeFromBasket = (id) => {
    const updatedBasketItemsIds = basketItemsIds.filter((x) => x !== id);
    setBasketItemsIds(updatedBasketItemsIds);
  };

  const addToBasket = (id) => {
    const updatedBasketItemsIds = [...basketItemsIds, id];
    setBasketItemsIds(updatedBasketItemsIds);
  };

  const removeOneFromBasket = (id) => {
    if (basketItemsIds.reduce((accumulator, currentItem) => {
      if (currentItem === id) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0) === 1) {
      removeFromBasket(id);
    }
    const indexToRemove = basketItemsIds.indexOf(id);
    if (indexToRemove !== -1) {
      const updatedBasketItemsIds = [...basketItemsIds];
      updatedBasketItemsIds.splice(indexToRemove, 1);
      setBasketItemsIds(updatedBasketItemsIds);
    }
  };

  const [basketOpen, setBasketOpen] = useState(false);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  return (
    <>
      {/* ... Other code ... */}
      <div className="hidden md:flex md:flex-row md:gap-4 items-center">
        <p className="cursor-pointer hover:text-black/75">Login</p>
        <div className="flex flex-row gap-2 items-center cursor-pointer hover:text-black/75">
          <button onClick={toggleBasket}>Basket/£0.00</button>
          {/* ... Other code ... */}
        </div>
        {/* ... Other code ... */}
      </div>
      {basketOpen && (
        <Basket
          basketItemsIds={basketItemsIds}
          removeFromBasket={removeFromBasket}
          addToBasket={addToBasket}
          removeOneFromBasket={removeOneFromBasket}
        />
      )}
    </>
  );
};

export default ParentComponent;
