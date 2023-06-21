"use client"
import Navbar from '../components/navbar';
import React,{useState,useEffect} from 'react';
import ExtraDropdowns from '../components/extraDropdowns';
import Image from 'next/image';
import WoodenSpoon from '/public/WoodenSpoon.jpg';

export default function Home() {
  const [basketItemsIds, setBasketItemsIds] = useState([]);
  const [uniqueBasketItemsIds, setUniqueBasketItemsIds] = useState([]);

  useEffect(() => {
    const storedBasketItems = JSON.parse(localStorage.getItem('basketItems'));
    if (storedBasketItems) {
      setBasketItemsIds(storedBasketItems);
      setUniqueBasketItemsIds([...new Set(storedBasketItems)]);
    }
  }, []);
    
return (

    
    <>
      <Navbar basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />
      <ExtraDropdowns />
      <div >
        <div className="grid md:grid-cols-2  grid-cols-1 pt-12 px-4">
          <div className="pr-4">
            <Image src={WoodenSpoon} alt={"Product Photograph"} />
          </div>
          <div className='pl-6 pt-6 my-auto pb-12'>
            <h1 className='text-4xl pb-4'>Product Name</h1>
            <h2 className='text-3xl pb-4'>£5.50</h2>
            <p className='text-xl pb-6'>This is a description of the product.</p>
            <button className='bg-gray-200 rounded-full p-4'>Add to basket</button>
          </div>
        </div>
      </div>
      <div className='flex pt-12 flex-col'>
          <h1 className='mx-auto text-6xl pb-12'>Description</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis animi consectetur eligendi tempora veritatis possimus commodi fugit distinctio corporis. Nobis, ex voluptates ullam debitis soluta iusto. Dignissimos et omnis, dicta quo quos voluptate cumque quibusdam eaque voluptatem sint illum molestiae doloribus recusandae nam impedit ratione, distinctio quis. Deleniti veniam numquam, repellat esse magni odio, eligendi saepe minima recusandae nobis maiores?</p>
      </div>
    </>
  );
}
