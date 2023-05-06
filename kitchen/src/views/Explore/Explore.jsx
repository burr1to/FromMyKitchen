import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../components/Global/Pagination";
import Layout from "./../../components/Layout/Layout";
import ExploreBox from "../../components/Global/ExploreBox";
import Filter from "../../components/Global/Filter";

function Explore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8800/api/recipes");
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    };

    fetch();
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const current = data.slice(firstIndex, lastIndex);

  const paginate = (pageNumber, e) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className='flex justify-center text-5xl my-20'>
        Explore My Kitchen
      </div>
      <div className='grid sm:grid-cols-7 md:grid-cols-8 max-w-[90%] mx-auto my-14 '>
        <div className='col-span-2 relative '>
          <span className='text-2xl'>Filter Results</span>
          <Filter />
        </div>
        <div className=' col-span-6 grid sm:grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10'>
          <ExploreBox item={current} loading={loading} />
        </div>
      </div>
      <div className='my-10 flex justify-center max-w-[100%]'>
        <Pagination
          paginate={paginate}
          per={itemsPerPage}
          total={data.length}
        />
      </div>
    </Layout>
  );
}

export default Explore;
