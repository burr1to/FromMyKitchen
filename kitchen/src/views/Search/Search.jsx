import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import Image from "../../components/Global/Image";
import all from "./../../assets/all.png";
import ingredient from "./../../assets/ingredient.png";
import ExploreBox from "../../components/Global/ExploreBox";
import axios from "axios";

function Search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${data.search}`
    );
    setData(res.data.meals);
    setLoading(false);
  };

  console.log(data);
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <h1 className='my-10 text-4xl'>Recipes</h1>
        <div className='border-2 border-gray-400 px-5 md:w-[600px] rounded-[20px]'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex justify-end gap-x-2'
          >
            <input
              {...register("search")}
              className='border-none w-full focus:outline-0'
              placeholder='Search for recipes..'
            />
            <button type='submit' onClick={onSubmit}>
              <FiSearch size='25px' color='#ff9b00' />
            </button>
          </form>
        </div>
        <div className='my-12 flex justify-center items-center text-center gap-x-16 max-w-[50%]'>
          <div className='flex flex-col gap-y-9'>
            <Image src={all} />
            <span className='text-xl hover:underline cursor-pointer hover:text-[color:var(--primary)]'>
              Explore Recipes
            </span>
          </div>
          <div className='flex flex-col gap-y-16'>
            <Image src={ingredient} className='w-[90%]' />
            <span className='text-xl hover:underline cursor-pointer hover:text-[color:var(--primary)]'>
              Explore by ingredients
            </span>
          </div>
        </div>
      </div>
      <div>
        <ExploreBox item={data} loading={loading} />
      </div>
    </Layout>
  );
}

export default Search;
