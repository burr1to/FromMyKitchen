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
  const [favorite, setFavorite] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const userRecipe = await axios.get(
        `http://localhost:8800/api/recipes/user/${user.user._id}`
      );
      setData(userRecipe.data);

      const favRecipe = await axios.get(
        `http://localhost:8800/api/favorite/${user.user._id}`
      );

      console.log(favRecipe.data);

      setFavorite(favRecipe.data);
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
          <div>
            <div className='flex gap-5 items-center'>
              <Image
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
        <h2 className='text-3xl my-5 text-center'>Favorited Recipes</h2>
        <div className='flex gap-x-4 max-w-[80%] mx-auto my-10 '>
          <ExploreBox item={favorite} loading={loading} status='favorite' />
        </div>
        <hr className='border mt-12 mb-6 border-[color:var(--secondary)]' />
        <h2 className=' text-3xl my-5 text-center'>Uploaded Recipes</h2>

        <div className='flex gap-x-4 max-w-[80%] mx-auto my-10'>
          <ExploreBox item={data} loading={loading} />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
