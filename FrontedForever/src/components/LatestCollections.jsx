import React from 'react'
import { ShopContext } from '../context/ShopContext';
import Titles from './Titles';
import ProductItems from './ProductItems';
import { useEffect, useState, useContext } from 'react';

const LatestCollections = () => {
    const { products } = useContext(ShopContext);
    {/* console.log(products); */}

    const [latestProducts,setlatestProducts] = useState([]);

    useEffect(() => {
        const latest = products.slice(0, 10);
        setlatestProducts(latest);
    },[]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Titles tex1="Latest" text2="Collections" />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, molestiae?</p>
        </div>

        {/* Displaying the latest products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ml-15 mr-20'>
            {
            latestProducts.map((item, index) => (
                <ProductItems
                key={index}
                id={item._id}
                image={item.image} // Add this prop
                name={item.name}
                price={item.price}
                />
            ))
            }

        </div>

    </div>
  )
}

export default LatestCollections