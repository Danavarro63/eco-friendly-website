"use client"
import React,{useState,useEffect} from 'react'
import Products from "app/Product/[ProductId]/records.json";
import Navbar from 'app/components/navbar.jsx';
import ExtraDropdowns from 'app/components/extraDropdowns.jsx';
import Image from 'next/image';
import {AiOutlineCloseCircle} from "react-icons/ai"
function checkout() {
  
  const [basketItemsIds, setBasketItemsIds] = useState([]);
  const [uniqueBasketItemsIds, setUniqueBasketItemsIds] = useState([]);

  useEffect(() => {
    const storedBasketItems = JSON.parse(localStorage.getItem('basketItems'));
    if (storedBasketItems) {
      setBasketItemsIds(storedBasketItems);
      setUniqueBasketItemsIds([...new Set(storedBasketItems)]);
    }
  }, []);


  

  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItemsIds));
  }, [basketItemsIds]);

  const BasketItem = ({ id }) => {
    const quantity = basketItemsIds.reduce((accumulator, currentItem) => {
      if (currentItem === id) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  
    const price = (Products[id].price * quantity).toFixed(2);
  
    return (
      <div className="flex py-8 w-full border justify-around">
        <div className="p-2 flex flex-row items-center">
          <div className="w-24 h-24 overflow-hidden mr-4 flex-shrink-0">
            <img
              src={Products[id].image}
              alt="ProductImage"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl w-36">{Products[id].title}</h1>
            <p className="text-gray-700">
              Quantity: {quantity}
            </p>
            <p className="text-gray-500">
              Price = £{price}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button>
            <AiOutlineCloseCircle
              size={40}
              onClick={() => removeFromBasket(id)}
            />
          </button>
        </div>
      </div>
    );
  };

  return (

    <div >
      <Navbar basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />
      <ExtraDropdowns />
      <div >

      {basketItemsIds && basketItemsIds.length > 0 && <div className='md:p-14 grid md:grid-cols-2'> 
         <div className='md:h-2/4 h-full  overflow-y-scroll'>
        {uniqueBasketItemsIds
                .map(function (itemId) {
                  return (
                    <BasketItem id={itemId} basketItemsIds={basketItemsIds} removeFromBasket={removeFromBasket}/>
                    )
                  })}
                  </div>
          
          <div className='p-12 h-2/4 flex flex-col'>
            <h1 className=' font-bold text-3xl mb-12'>Basket Totals</h1>
            <div className='flex justify-between'>
              <p>SubTotals :</p>
              <p>{calculateTotal()}</p>
              {console.log(calculateTotal())}
            </div>
            <div className='flex justify-between'>
              <p>Shipping: Royal Mail 48h Tracked :</p>
              <p>£4.99</p>
            </div>
            <div className='flex justify-between'>
              <p>Total : </p>
              <p>{(Number(calculateTotal()) + Number(4.99)).toFixed(2)}</p>
            </div>


            <p className='bg-blue-400 rounded-3xl my-24 h-12 text-white px-2 flex justify-center md:text-xl lg:text-2xl sm:text-lg items-center hover:bg-blue-500 cursor-pointer'>
              Proceed To checkout
          </p>


          </div>
          </div>
      }
      {
        basketItemsIds.length == 0  && 
        <div className='flex flex-col items-center justify-center'>
          <h1 className='pt-24 pb-12 text-4xl'>Empty Basket</h1>
          <p className='py-6 text-2xl'>There is nothing in your basket</p>
          <p className='text-2xl'>Please add things to your basket to checkout</p>
          {console.log(basketItemsIds)}
        </div>
      }
    </div>
  </div>
  )

  function calculateTotal() {
    let total = 0;
    if (!basketItemsIds) {
      return '0.00';
    }
    for (let i = 0; i < basketItemsIds.length; i++) {
      total = total + Number(Products[basketItemsIds[i]].price);
    }
    return total.toFixed(2);
  }
  
  function removeFromBasket(id) {
    const updatedBasketItemsIds = basketItemsIds.filter((x) => x !== id);
    setBasketItemsIds(updatedBasketItemsIds);
    const newUniqueItems = [...new Set(updatedBasketItemsIds)];
    setUniqueBasketItemsIds(newUniqueItems);
  }
  

};




export default checkout