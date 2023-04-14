import React from "react";
import Layout from "./../../components/Layout/Layout";
import Image from "../../components/Global/Image";
import axios from "axios";
import { useState } from "react";
import food from "./../../assets/explore.jpg";

function Recipe() {
  const ingredients = [
    { name: "Ginger", quantity: 3 },
    { name: "Potato", quantity: 5 },
    { name: "Garlic", quantity: 7 },
    { name: "Ginger", quantity: 3 },
    { name: "Potato", quantity: 5 },
    { name: "Garlic", quantity: 7 },
    { name: "Ginger", quantity: 3 },
    { name: "Potato", quantity: 5 },
    { name: "Garlic", quantity: 7 },
  ];

  const tags = ["cuisine", "newari", "hearty"];
  return (
    <Layout>
      <div className='my-10 relative'>
        <div className='grid h md:grid-cols-5 md:max-w-[70%] mx-auto justify-center items-center gap-x-4'>
          <div className='md:col-span-3 p-10'>
            <span className='text-7xl'>Samaya Baji</span>
            <p className='my-3 text-[25px]'>Newari Cuisine</p>
            <div>
              <ul>
                {tags?.map((tag, index) => (
                  <li className='cursor-pointer inline-block border mx-1 px-4 border-gray-300 rounded-lg'>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className='border border-red-500 py-5 mt-5'>
              <ul className='text-[18px]'>
                <li>Prep Time: 2 Hours</li>
                <li>Cook Time: 1 Hours</li>
                <li>Feeds: 3 people</li>
              </ul>
            </div>
            <div className='border border-blue-500 mt-10 max-w-[40%]'>
              <span className='text-3xl my-12'>Ingredients</span>
              <ul className='text-[19px] my-5'>
                {ingredients?.map((ingredient, index) => (
                  <li className='mt-1' key={index}>
                    <div className='relative '>
                      {ingredient.name}
                      <span className='absolute right-0'>
                        {ingredient.quantity}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className='border border-rose-900 my-5'>
              <h1 className='text-xl'>Method</h1>
            </div>
          </div>
          <div className='md:col-span-2'>
            <div className=' md:absolute md:top-0 pt-8'>
              <Image src={food} alt='' className='' />
              <div>Multiple images?</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
