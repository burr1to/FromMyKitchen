import React from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useState } from "react";

function Recipe() {
  const [data, setData] = useState({});

  // const getRecipe = async () =>
  //   await axios
  //     .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
  //     .then((res) => {});

  // getRecipe();
  // console.log(data);

  return (
    <Layout>
      <div className='h-[50vh] my-10'>
        <div className='grid h grid-cols-3 md:max-w-[80%] mx-auto justify-center items-center gap-x-4'>
          <div className='col-span-2 border p-10 border-black'>
            <span className='text-3xl'>Samaya Baji</span>
            <p className='my-3'>Newari Cuisine</p>
            <div className='border border-red-500 py-5'>
              <ul className='font-bold'>
                <li>Prep Time: 2 Hours</li>
                <li>Cook Time: 1 Hours</li>
                <li>Serving: 10 Pieces</li>
              </ul>
            </div>
          </div>
          <div className='col-span-1 border border-red'></div>
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
