"use client"
import React from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image';
import ExtraDropdowns from '../components/extraDropdowns';
import Error from "/public/error_404.jpeg";

function Page() {
  return (
    <div>
      {/* <Navbar basketItemsIds={basketItemsIds} setBasketItemsIds={setBasketItemsIds}/>
      <ExtraDropdowns />
      <div className='flex flex-col items-center justify-center'>
        <Image src={Error} width={500} height={500} />
      </div> */}
    </div>
  );
}

export default Page;
