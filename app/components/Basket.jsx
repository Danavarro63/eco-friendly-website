import React, {useState,useEffect} from 'react'
import {AiOutlineCloseCircle, AiOutlineMinus} from "react-icons/ai"
import {BsPlusLg} from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import Products from "app/Product/[ProductId]/records.json";
function Basket({basketItemsIds,setBasketItemsIds}) {

    const [uniqueBasketItemsIds, setUniqueBasketItemsIds] = useState([]);
  
    useEffect(() => {
      const storedBasketItems = JSON.parse(localStorage.getItem('basketItems'));
      if (storedBasketItems) {
        setBasketItemsIds(storedBasketItems);
        setUniqueBasketItemsIds([...new Set(storedBasketItems)]);
      }
    }, []);
  

    function removeFromBasket(id) {
        const updatedBasketItemsIds = basketItemsIds.filter((x) => x !== id);
        setBasketItemsIds(updatedBasketItemsIds);
        const newUniqueItems = [...new Set(updatedBasketItemsIds)];
        setUniqueBasketItemsIds(newUniqueItems);
    }

    function addToBasket(id) {
        const updatedBasketItemsIds = [
            ...basketItemsIds,
            id
        ];
        setBasketItemsIds(updatedBasketItemsIds);
        const newUniqueItems = [...new Set(updatedBasketItemsIds)];
        setUniqueBasketItemsIds(newUniqueItems);
    }

    function removeOneFromBasket(id) {

        if (basketItemsIds.reduce((accumulator, currentItem) => {
            if (currentItem === id) {
                return accumulator + 1;
            }
            return accumulator;
        }, 0) === 1) {
            removeFromBasket(id)
        }
        const indexToRemove = basketItemsIds.indexOf(id);
        if (indexToRemove !== -1) {
            const updatedBasketItemsIds = [...basketItemsIds];
            updatedBasketItemsIds.splice(indexToRemove, 1);
            setBasketItemsIds(updatedBasketItemsIds);
        }
    
        
}


    return (
        <div className='z-50 w-full max-w-4xl border-2 p-4 h-96 overflow-y-scroll ml-auto mr-12'>
            <h1 className='text-3xl mx-auto w-full'>Basket</h1>
            {uniqueBasketItemsIds
                .map(function (itemId) {
                    return (<BasketItem
                    key={itemId}
                        id={itemId}
                        removeOneFromBasket={removeOneFromBasket}
                        basketItemsIds={basketItemsIds}
                        removeFromBasket
                        ={removeFromBasket}
                        addToBasket={addToBasket}/>);
                })}

            <Link
                className=' bg-blue-400 rounded-3xl h-8 text-white px-2 flex justify-center items-center hover:bg-blue-500 cursor-pointer' href={"/Checkout"}>
                Checkout
            </Link>
        </div>
    )
}

const BasketItem = ({id, basketItemsIds, removeFromBasket, addToBasket, removeOneFromBasket}) => {
    return (
        <div className="flex py-2 w-full border-b">
            <div className="p-2">
                <Image src={Products[id].image} width={75} height={75} alt={"ProductImage"}/>
            </div>
            <div className="flex-grow">
                <div className="flex justify-between">
                    <h1>{Products[id].title}</h1>
                </div>
                <p className="text-gray-700">quantity: {basketItemsIds
                      .reduce((accumulator, currentItem) => {
                          if (currentItem === id) {
                              return accumulator + 1;}
          return accumulator;
        }, 0)}
                </p>
                <p className="text-gray-500">{`£${Products[id]
                        .price} x ${basketItemsIds
                        .reduce((accumulator, currentItem) => {
                            if (currentItem === id) {
                                return accumulator + 1;}
            return accumulator;
          }, 0)} = £${ (Products[id].price * basketItemsIds.reduce((accumulator, currentItem) => {
                                    if (currentItem === id) {
                                        return accumulator + 1;}
            return accumulator;
          }, 0)).toFixed(2)}`}</p>
            </div>
            <div className="flex items-center">
                <button><BsPlusLg size={40} onClick={() => addToBasket(id)}/></button>
                <button><AiOutlineMinus size={40} onClick={() => removeOneFromBasket(id)}/></button>
                <button><AiOutlineCloseCircle size={40} onClick={() => removeFromBasket(id)}/></button>
            </div>
        </div>
    );
};

export default Basket