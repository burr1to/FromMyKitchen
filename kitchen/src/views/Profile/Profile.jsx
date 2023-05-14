import React from "react";
import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import icon from "../../assets/update-icon.png";
import pp from "../../assets/pp.jpeg";
import ExploreBox from "../../components/Global/ExploreBox";
import axios from "axios";
import Image from "../../components/Global/Image";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const [imageUrl, setImageUrl] = useState(pp);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      setLoading(false);
    };

    fetch();
  }, []);

  return (
    <Layout>
      <div className='px-12'>
        <h1 className='text-[32px] text-[color:var(--primary)] '>
          User Profile
        </h1>

        <div>
          <div className='my-6 flex gap-3 mt-2'>
            <h2 className='text-black font-bold flex items-center '>
              Personal Info
            </h2>
            <div className='h-7 w-8'>
              <Image
                src={icon}
                className='h-full w-full object-contain cursor-pointer'
                alt='Icon'
              />
            </div>
          </div>
          <div>
            <div className='flex gap-5 items-center'>
              <img
                src={imageUrl}
                alt='Personal Photo Image'
                className='rounded-md h-20 w-auto max-h-20'
              />
              <div className='justify-center items-center'>
                <h2 className='text-2xl my-2'>@burrito</h2>
                <h2>
                  <span className='text-black'>Name: </span>
                  Sanskar
                </h2>
                <h2>
                  <span className='text-black'>Email: </span>
                  asd
                </h2>
                <h2>
                  <span className='text-black'>Bio: </span>
                  asd
                </h2>
              </div>
            </div>
          </div>
        </div>
        <hr className='border my-6 border-[color:var(--secondary)]' />
        <h2 className='text-2xl mb-6 mt-3'>Favorited Recipes</h2>
        <div className=' col-span-6 grid sm:grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10'>
          {/* <ExploreBox item={favorite} loading={loading} /> */}
        </div>
        <hr className='border mt-12 mb-6 border-[color:var(--secondary)]' />
        <h2 className=' text-2xl mb-6 mt-3'>Uploaded Recipes</h2>
        <div className='mb-20'>
          <div className=' grid sm:grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10'>
            {/* <ExploreBox item={uploaded} loading={loading} /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
