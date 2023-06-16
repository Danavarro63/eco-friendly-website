import React from 'react'

function extraDropdowns() {
  return (
    <div className='bg-gray-100 h-12 text-gray-500 md:flex md:flex-row justify-center items-center gap-4 hidden'>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">New Arrivals </a>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">Skincare</a>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">Kitchen</a>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">Bathroom</a>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">Gifts</a>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">On the move</a>
        <a className='rounded-3xl bg-gray-200 p-1 px-2 hover:bg-gray-300' href="#">Reusable</a>
    </div>
  )
}

export default extraDropdowns