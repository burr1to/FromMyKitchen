import React from "react";
import { useState, useEffect, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import pp from "../../assets/pp.jpeg";
import ExploreBox from "../../components/Global/ExploreBox";
import axios from "axios";
import Image from "../../components/Global/Image";
import path from "./../../context/utils";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Profile() {
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [prof, setProf] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const getUser = await axios.get(
        `http://localhost:8800/api/users/${user.user._id}`,
        {},
        { withCredentials: true }
      );
      setProf(getUser.data);

      const userRecipe = await axios.get(
        `http://localhost:8800/api/recipes/user/${user.user._id}`
      );
      setData(userRecipe.data);

      const favRecipe = await axios.get(
        `http://localhost:8800/api/favorite/${user.user._id}`
      );

      setFavorite(favRecipe.data);
      setLoading(false);
    };

    fetch();
  }, []);

  return (
    <Layout>
      <div className='px-12'>
        <h1 className='text-[32px] my-5 text-[color:var(--primary)] '>
          User Profile
        </h1>

        <div>
          <div>
            <div className='flex gap-5 items-center'>
              <Image
                src={prof ? `${path[0]}/${prof.profilePicture}` : pp}
                alt='Personal Photo Image'
                className='rounded-md h-[150px] w-auto'
              />
              <div className='flex flex-col gap-y-2'>
                <h2 className='text-2xl'>@{prof.username}</h2>
                <h2>
                  <span className='text-black'>Name: </span>
                  {prof.name}
                </h2>
                <h2>
                  <span className='text-black'>Email: </span>
                  {prof.email}
                </h2>
                <Link
                  to={`edit`}
                  className='text-center px-8 py-1 cursor-pointer border border-[color:var(--primary)] rounded-lg hover:text-white hover:bg-[color:var(--primary)]  hover:ease-in-out hover:transition-all'
                >
                  Edit Profile
                </Link>
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
