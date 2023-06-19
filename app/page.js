"use client"
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';
import ExtraDropdowns from './components/extraDropdowns';
import { useState,useEffect } from 'react';

export default function Home() {

  const [basketItemsIds,setBasketItemsIds] = useState(() => JSON.parse(localStorage.getItem('basketItems')) || [1,2,3,4,5])
  useEffect(() => {
    localStorage.setItem('basketItems', JSON.stringify(basketItemsIds));
  }, [basketItemsIds]);

  return (
    <>
      <Navbar basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />
      <ExtraDropdowns />
      <HeroImage basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />
    </>
  );
}
