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
  const [itemsPerPage] = useState(6);
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitted },
  } = useForm({
    defaultValues: {
      filterType: "",
    },
  });

  const watchedFields = watch(["filterName"]);

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
  const current = initdata.slice(firstIndex, lastIndex);

  const paginate = (pageNumber, e) => {
    setCurrentPage(pageNumber);
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (data.filterType !== "") {
      console.log("yay");
    } else if (data.filterName !== "") {
      const res = await axios.get(
        `http://localhost:8800/api/filter/name?search=${data.filterName}`
      );
      console.log(res.data);
      setFilter(res.data);
    } else {
      const res = await axios.get("http://localhost:8800/api/recipes");

      setFilter(res.data);
    }
    reset();

    // const res = await axios.get(
    //   `http://localhost:8800/api/recipes?data=${data}`
    // );
    // setData(null);
  };

  return (
    <Layout>
      <div className='flex justify-center text-5xl my-20'>
        Explore My Kitchen
      </div>
      <div className='grid sm:grid-cols-7 md:grid-cols-8 max-w-[90%] mx-auto my-14 '>
        <div className='col-span-2 relative '>
          <span className='text-2xl'>Filter Results</span>
          <div className='my-7 max-w-[80%]'>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className='flex flex-col gap-y-3 my-5'>
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
              <div className='flex flex-col gap-y-3 my-5'>
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

              <div className='flex flex-col gap-y-3 my-5'>
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

              <div className='flex flex-col gap-y-3 my-5'>
                <label>
                  <span className='text-[color:var(--primary)] text-xl'>
                    Filter by type
                  </span>
                </label>
                <select
                  className='border border-gray-400 px-1 py-1 rounded-lg'
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
                <button type='Submit'>Filter</button>
              </div>
            </form>
          </div>
        </div>
        <div className=' col-span-6 grid sm:grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10'>
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
