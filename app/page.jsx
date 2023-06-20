"use client"
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';
import ExtraDropdowns from './components/extraDropdowns';
import { useState,useEffect } from 'react';

export default function Home() {

  
  const [basketItemsIds, setBasketItemsIds] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('basketItems'));
    } else {
      return [];
    }
  });
  
  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('basketItems', JSON.stringify(basketItemsIds));
    }
  }, [basketItemsIds]);

  return (
    <>
      <Navbar basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />
      <ExtraDropdowns />
      <HeroImage basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds} />
    </>
  );
}
