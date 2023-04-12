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
  const [itemsPerPage] = useState(6);

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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className='grid grid-cols-7 max-w-[85%] mx-auto my-14 '>
        <div className='col-span-1'>Sidebar</div>
        <div className=' col-span-6 grid grid-cols-3 gap-x-10 gap-y-10'>
          <ExploreBox item={current} loading={loading} />
          <Pagination
            paginate={paginate}
            per={itemsPerPage}
            total={data.length}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Explore;
