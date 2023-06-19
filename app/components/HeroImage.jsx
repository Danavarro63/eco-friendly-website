"use client"
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Products from "app/Product/[ProductId]/records.json";

function HeroImage({basketItemsIds,setBasketItemsIds}) {
  
  
  const [uniqueBasketItemsIds,setUniqueBasketItemsIds] = useState([...new Set(basketItemsIds)])
    useEffect(() => {
      setUniqueBasketItemsIds([...new Set(basketItemsIds)]);
    }, [basketItemsIds]);
    
  
    function addToBasket(id) {
      const updatedBasketItemsIds = [
          ...basketItemsIds,
          id
      ];
      setBasketItemsIds(updatedBasketItemsIds);
      const newUniqueItems = [...new Set(updatedBasketItemsIds)];
      setUniqueBasketItemsIds(newUniqueItems);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <ProductImageLarge addToBasket={addToBasket} id={31} src={Products[30].image} title={Products[0].title} />
      <div className='grid grid-cols-3 gap-4 p-4'>
        <ProductImageSmall addToBasket={addToBasket} id={32} src={Products[31].image} title={Products[31].title} />
        <ProductImageSmall addToBasket={addToBasket} id={33} src={Products[32].image} title={Products[32].title} />
        <ProductImageSmall addToBasket={addToBasket} id={34} src={Products[33].image} title={Products[33].title} />
      </div>
    </div>
  );
  
}


function ProductImageLarge({ src, title, id,addToBasket }) {
  return (
    <div className='relative'>
      <Image className='px-4 block' width={1500} height={1500} src={src} alt={"wooden spoon"} />
      <div className="flex flex-col gap-4 h-full w-full justify-between items-center absolute top-0 left-0 ">
        <h1 className='text-gray-600 left-0 sm:text-md md:text-xl lg:text-2xl xl:text-5xl font-light pt-10'>{title}</h1>
        <div className='gap-4 left-10 pb-10'>
          <div className="flex gap-4">
            <AddButton id={id-1} label="Add to Basket" addToBasket={addToBasket} /> <Button id={id} label="See More" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ label, id }) {
  return (
    <Link
      className="bg-gray-400 text-white md:py-6 md:px-8 py-2 px-4 text-xs md:text-xl rounded-lg hover:bg-gray-700 transition ease-in-out duration-500"
      href={`Product/${id}`}>
      {label}
    </Link>
  );
}
function AddButton({ label, id,addToBasket }) {
  return (
    <button
      className="bg-gray-400 text-white md:py-6 md:px-8 py-2 px-4 text-xs md:text-xl rounded-lg hover:bg-gray-700 transition ease-in-out duration-500"
      onClick={() => addToBasket(id)}>
      {label}
    </button>
  );
}

function ProductImageSmall({ src, title, id,addToBasket}) {
  return (
    <div className="relative">
      <Image
        width={1500} height={1500}
        className="block border-black/7 border-2"
        src={src}
        title="Project"
        alt={`Project Photo`}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }} />
      <div
        className="flex flex-col gap-4 h-full w-full border-black border-2 justify-between items-center absolute top-0 left-0  bg-gradient-to-r from-gray-500/60 to-gray-500/60 opacity-0 text-white hover:opacity-100 transition ease-in-out duration-500 hover:cursor-pointer">
        <h1 className='z-0 text-white left-0 sm:text-md md:text-xl lg:text-2xl font-light pt-10'>{title}</h1>
        <div className='gap-4 left-10 pb-20'>
          <div className="flex gap-4">
            <AddButtonSmall addToBasket={addToBasket} id={id-1} width={1500} height={1500} label="Add to 🛒" /> <ButtonSmall label="See More" id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonSmall({ url, label, id }) {
  return (
    <Link
      className="bg-gray-400 text-white md:py-6 md:px-8 py-2 px-4 text-xs md:text-xl rounded-lg hover:bg-gray-700 transition ease-in-out duration-500"
      href={`Product/${id}`}>
      {label}
    </Link>
  );
}

function AddButtonSmall({ url, label, id,addToBasket }) {
  return (
    <button
      className="bg-gray-400 text-white md:py-6 md:px-8 py-2 px-4 text-xs md:text-xl rounded-lg hover:bg-gray-700 transition ease-in-out duration-500"
      onClick={()=> addToBasket(id)}>
      {label}
    </button>
  );
}

export default HeroImage;
