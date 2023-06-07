import React, { useEffect, useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import Slide from "../../components/HomeSlider/Slide";
import path from "./../../context/utils";
import Image from "../../components/Global/Image";
import axios from "axios";
import { Link } from "react-router-dom";
import ExploreBox from "../../components/Global/ExploreBox";
import ErrorBox from "../../components/Global/ErrorBox";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:8800/api/filter/random");

        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  const handleDismissError = () => {
    // Handle error dismissal logic here
    console.log("Error dismissed");
  };

  return (
    <Layout>
      <div>
        <Slide />
        <div className='text-center mt-20 mb-9'>
          <span className='text-[32px] text-[color:var(--primary)]'>
            Our Recipes you might love
          </span>
        </div>
        <div className='max-w-[80%] mx-auto my-10'>
          <ExploreBox item={data} loading={loading} />
        </div>
      </div>
    </Layout>
  );
}
