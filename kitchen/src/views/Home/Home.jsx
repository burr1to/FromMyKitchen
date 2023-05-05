import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Slide from "../../components/HomeSlider/Slide";
import test from "./../../assets/explore.jpg";
import Image from "../../components/Global/Image";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/recipes/get/random"
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  const items = [
    "Chicken Alfredo with White Sauce",
    "Fettucine with Cilantro Dressing",
    "Italian Meatballs with Sphagetti",
    "Samaya Baji with Aila (Newari Alcohol)",
  ];
  return (
    <Layout>
      <div className=''>
        <Slide />
        <div className='text-center mt-20 mb-9'>
          <span className='text-[32px] text-[color:var(--primary)]'>
            Our Recipes you might love
          </span>
        </div>
        <div className='grid grid-cols-4 w-full max-w-[80%] mx-auto mb-28 mt-8 gap-8'>
          {items.map((item, index) => (
            <div className='col-span-1 flex flex-col items-center' key={index}>
              <div>
                <Image
                  src={test}
                  className='w-[400px] h-auto rounded-t-[20px]'
                />
              </div>
              <div className='p-6 text-[22px] text-center rounded-b-[20px] border border-[color:var(--primary)]'>
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
