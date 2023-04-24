import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../components/Global/Pagination";
import Layout from "./../../components/Layout/Layout";
import ExploreBox from "../../components/Global/ExploreBox";

function Explore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
      );

      setData(res.data.meals);
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
      <div className='flex justify-center my-20'></div>
      <div className='grid grid-cols-7 max-w-[85%] mx-auto my-14 '>
        <div className='col-span-1'>Sidebar</div>
        <div className=' col-span-6 grid grid-cols-3 gap-x-10 gap-y-10'>
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
