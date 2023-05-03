import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import Image from "../../components/Global/Image";
import all from "./../../assets/all.png";
import ingredient from "./../../assets/ingredient.png";
import ExploreBox from "../../components/Global/ExploreBox";
import axios from "axios";
import { Link } from "react-router-dom";
import Latest from "../../components/Global/Latest";

function Search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [hidden, setHidden] = useState(true);

  const { register, handleSubmit } = useForm();

  const handleToggle = () => {
    setHidden(!hidden);
  };

  const onSubmit = async (data, e) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`
    );
    setData(res.data.meals);
    console.log("Okasd");
    setLoading(false);
  };

  console.log(data);
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1 className='my-10 text-4xl'>Recipes</h1>
        <div className='border-2 border-gray-400 px-5 md:w-[600px] rounded-[20px] relative'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex justify-end gap-x-2'
          >
            <input
              {...register("search")}
              className='border-none w-full focus:outline-0'
              placeholder='Search for recipes..'
            />
            <button type='submit' onClick={handleToggle}>
              <FiSearch size='25px' color='#ff9b00' />
            </button>
          </form>
          {hidden ? (
            ""
          ) : (
            <div className=' w-[90%] rounded-lg mx-auto absolute mt-1 z-10 bg-white shadow'>
              <ExploreBox item={data} loading={loading} status='search' />
            </div>
          )}
        </div>

        <div className='my-12 flex justify-center items-center text-center gap-x-16 max-w-[50%]'>
          <div className='flex flex-col gap-y-9'>
            <Image src={all} />

            <Link
              to='/explore'
              className='text-xl hover:underline cursor-pointer hover:text-[color:var(--primary)]'
            >
              Explore Recipes
            </Link>
          </div>
          <div className='flex flex-col gap-y-16'>
            <Image src={ingredient} className='w-[90%]' />
            <Link
              to='/explore/all'
              className='text-xl hover:underline cursor-pointer hover:text-[color:var(--primary)]'
            >
              Explore by ingredients
            </Link>
          </div>
        </div>
      </div>
      <div className='max-w-[70%] mx-auto my-15'>
        <h1 className='my-10 text-3xl text-center'>Latest Uploaded Recipes</h1>
        <Latest />
      </div>
    </Layout>
  );
}

export default Search;
