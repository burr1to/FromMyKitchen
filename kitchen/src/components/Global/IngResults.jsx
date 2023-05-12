import React from "react";
import SecondBox from "./SecondBox";

function IngResults({ data, loading }) {
  return (
    <div className=''>
      {loading ? "Loading" : <SecondBox data={data} type={"ingredient"} />}
    </div>
  );
}

export default IngResults;
