import React from "react";
import Layout from "./../../components/Layout/Layout";
function Recipe() {
  console.log("Jello");
  return (
    <Layout>
      <div className='grid h-[50vh] grid-cols-3 justify-center items-center'>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
}

export default Recipe;
