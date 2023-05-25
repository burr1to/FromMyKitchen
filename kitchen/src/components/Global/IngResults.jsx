import React from "react";
import SecondBox from "./SecondBox";

function IngResults({ data, loading }) {
  return (
    <div className="border border-[color:var(--primary)]] rounded-lg my-4">
      <SecondBox data={data} type={"ingredient"} loading={loading} />
    </div>
  );
}

export default IngResults;
