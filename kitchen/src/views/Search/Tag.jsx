import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import ExploreBox from "../../components/Global/ExploreBox";
import axios from "axios";
import Explore from "../Explore/Explore";

function Tag() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/filter/tag?s=${
          window.location.pathname.split("/")[2]
        }`
      );
      setData(res.data);
    };
    fetch();
  }, []);
  console.log(data);
  const tag = window.location.pathname.split("/")[2];

  return (
    <Layout>
      <div className='my-20'>
        <div className='text-3xl text-center'>Recipes with the tag: #{tag}</div>
        <div className='my-10 max-w-[70%] mx-auto gap-x-5'>
          <ExploreBox item={data} status='tag' />
        </div>
      </div>
    </Layout>
  );
}

export default Tag;
