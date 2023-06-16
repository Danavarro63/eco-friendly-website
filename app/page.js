"use client"
import Image from 'next/image';
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';
import ExtraDropdowns from './components/extraDropdowns';
import Products from './products.json';

export default function Home() {
  return (
    <>
      <Navbar />
      <ExtraDropdowns />
      <HeroImage />
    </>
  );
}
