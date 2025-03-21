import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../components/Global/Pagination";
import Layout from "./../../components/Layout/Layout";
import ExploreBox from "../../components/Global/ExploreBox";

function Explore() {
  const [initdata, setInitData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitted },
  } = useForm({
    defaultValues: {
      filterType: "",
    },
  });

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8800/api/recipes");
      setInitData(res.data);
      setLoading(false);
    };

    fetch();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  let current = initdata.slice(firstIndex, lastIndex);

  const paginate = (pageNumber, e) => {
    setCurrentPage(pageNumber);
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (data.filterType !== "") {
      const res = await axios.get(
        `http://localhost:8800/api/filter/type?type=${data.filterType}`
      );
      setFilter(res.data);
    } else if (data.filterName !== "") {
      const res = await axios.get(
        `http://localhost:8800/api/filter/name?search=${data.filterName}`
      );
      setFilter(res.data);
    } else if (data.filterIngredient !== "") {
      const res = await axios.get(
        `http://localhost:8800/api/filter/single?ing=${data.filterIngredient}`
      );
      setFilter(res.data);
    } else if (data.filterTag !== "") {
      const res = await axios.get(
        `http://localhost:8800/api/filter/tag?s=${data.filterTag}`
      );
      setFilter(res.data);
    } else {
      setFilter(initdata);
    }

    reset();
  };

  return (
    <Layout>
      <div className='max-w-[90%] mx-auto text-5xl my-8'>
        Explore My Kitchen
      </div>
      <div className='flex flex-col'>
        <div className=''>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col md:flex-row gap-x-5 md:items-center justify-evenly max-w-[80%] mx-auto my-7'
          >
            {/* Name */}
            <div className='flex flex-col gap-y-3 my-5 w-full'>
              <label>
                <span className='text-[color:var(--primary)] text-xl'>
                  Filter by name
                </span>
              </label>
              <input
                type='text'
                id='filterName'
                className=' focus:outline-none border-gray-400 rounded-lg'
                {...register("filterName", { maxLength: 30 })}
              />
            </div>
            {/* Tag */}
            <div className='flex flex-col gap-y-3 my-5 w-full'>
              <label>
                <span className='text-[color:var(--primary)] text-xl'>
                  Filter by tag
                </span>
              </label>
              <input
                type='text'
                id='filterTag'
                className=' focus:outline-none border-gray-400 rounded-lg'
                {...register("filterTag", { maxLength: 10 })}
              />
            </div>

            <div className='flex flex-col gap-y-3 my-5 w-full'>
              <label>
                <span className='text-[color:var(--primary)] text-xl'>
                  Filter by ingredient
                </span>
              </label>
              <input
                type='text'
                id='filterIngredient'
                className=' focus:outline-none border-gray-400 rounded-lg'
                {...register("filterIngredient", { maxLength: 30 })}
              />
            </div>

            <div className='flex flex-col gap-y-3 my-5 w-full'>
              <label>
                <span className='text-[color:var(--primary)] text-xl'>
                  Filter by type
                </span>
              </label>
              <select
                className='border border-gray-400 px-2 py-1 rounded-lg'
                {...register("filterType")}
              >
                <option value='Soup'>Soup</option>
                <option value='Appetizer'>Appetizer</option>
                <option value='Mains'>Mains</option>
                <option value='Drinks'>Drinks</option>
                <option value='Sauces'>Sauces</option>
                <option value='Dessert'>Dessert</option>
              </select>
            </div>
            <div>
              <button
                type='Submit'
                className=' text-white text-[18px] mx-4 bg-[color:var(--primary)] py-1 px-6 rounded-lg'
              >
                Filter
              </button>
            </div>
          </form>
        </div>
        <div className='p-8 max-w-[90%] mx-auto '>
          {isSubmitted ? (
            <ExploreBox item={filter} loading={loading} />
          ) : (
            <ExploreBox item={current} loading={loading} />
          )}
        </div>
      </div>
      <div className='my-10 flex justify-center max-w-[100%]'>
        <Pagination
          paginate={paginate}
          per={itemsPerPage}
          total={initdata.length}
        />
      </div>
    </Layout>
  );
}

export default Explore;
