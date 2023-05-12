import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import ExploreBox from "../../components/Global/ExploreBox";

function Tag() {
  const [tag, setTag] = useState();

  console.log(window.location.pathname.split("/")[1]);
  return (
    <Layout>
      {tag ? (
        <div className='flex justify-center my-20'>
          <span className='text-3xl'>Recipes with the tag: asd </span>
        </div>
      ) : (
        "What the fuck"
      )}
    </Layout>
  );
}

export default Tag;
