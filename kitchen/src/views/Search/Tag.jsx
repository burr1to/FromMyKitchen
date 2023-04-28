import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import ExploreBox from "../../components/Global/ExploreBox";

function Tag() {
  const location = useLocation();
  const [tag, setTag] = useState(location.state.tag);
  console.log(tag);
  return (
    <Layout>
      <div className='flex justify-center my-20'>
        <span className='text-3xl'>Recipes with the tag: #{tag.tag} </span>
      </div>
    </Layout>
  );
}

export default Tag;
