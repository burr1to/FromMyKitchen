import React, { useEffect, useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Slide from "../../components/HomeSlider/Slide";
import imgPath from "./../../context/utils";
import Image from "../../components/Global/Image";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/filter/random");

        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <Layout>
      <div className=''>
        <Slide />
        <div className='text-center mt-20 mb-9'>
          <span className='text-[32px] text-[color:var(--primary)]'>
            Our Recipes you might love
          </span>
        </div>
        <div className='md:flex w-full max-w-[74%] mx-auto mb-28 mt-8 gap-10'>
          {data?.map((item, index) => (
            <div className='col-span-1 flex flex-col ' key={index}>
              <div>
                <Image
                  src={`${imgPath[0]}/${item.photo}`}
                  className='w-[100%] rounded-t-[20px] object-cover'
                  alt='asdasd'
                />
              </div>
              <div className='p-6 text-[20px] text-center rounded-b-[20px] border border-[color:var(--primary)]'>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
