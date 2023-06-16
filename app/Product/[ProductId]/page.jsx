import React from 'react'
import Products from "./records.json";
import Navbar from 'app/components/navbar.jsx';
import ExtraDropdowns from 'app/components/extraDropdowns.jsx';
import Image from 'next/image';
import WoodenSpoon from '/public/WoodenSpoon.jpg';

function page({params}) {

    return (
        <>
        <Navbar />
        <ExtraDropdowns />
        <div >
          <div className="grid md:grid-cols-2  grid-cols-1 pt-12 px-4">
            <div className="border-r-4 border-black-500 pr-4 mx-auto my-auto">
              <Image src={getImage(Number(params.ProductId))} alt={"Product Photograph"} width={500} height={500} />
            </div>
            <div className='pl-6 pt-6 my-auto pb-12'>
              <h1 className='text-4xl pb-4'>{getTitle(Number(params.ProductId))}</h1>
              <h2 className='text-3xl pb-4'>£{getPrice(Number(params.ProductId))}</h2>
              <p className='text-xl pb-6'>{getDescription(Number(params.ProductId))}</p>
              <button className='bg-gray-200 rounded-full p-4'>Add to basket</button>
            </div>
          </div>
        </div>
      </>
  )
}


const getTitle = (id) =>{
    const productss = Products.find((item) => item.id === id)
    return productss.title;
}

const getDescription = (id) =>{
    const product = Products.find((item) => item.id === id)
    return product.description;
}

const getPrice = (id) =>{
    const product = Products.find((item) => item.id === id)
    return product.price;
}
const getImage = (id) =>{
  const product = Products.find((item) => item.id === id)
    const productImage = product.image ? product.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
    return productImage
  }

export default page