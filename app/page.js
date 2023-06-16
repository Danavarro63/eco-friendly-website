"use client"
import Image from 'next/image';
import Navbar from './components/navbar';
import HeroImage from './components/HeroImage';
import ExtraDropdowns from './components/extraDropdowns';

export default function Home() {
  return (
    <>
      <Navbar />
      <ExtraDropdowns />
      <HeroImage />
    </>
  );
}
