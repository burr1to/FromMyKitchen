import { useEffect } from "react";
import SecondBox from "./SecondBox";

function Latest() {
  useEffect(() => {}, []);
  return (
    <div className='grid grid-cols-4 gap-x-5'>
      <SecondBox />
      <SecondBox />
      <SecondBox />
      <SecondBox />
    </div>
  );
}

export default Latest;
