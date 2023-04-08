import React from "react";
import Image from "../Global/Image";
import slide from "./../../assets/homepage.png";
function Slide() {
  return (
    <div className='grid grid-cols-5 text-[color:var(--primary)]'>
      <div className=' col-span-2 w-full mx-auto flex flex-col justify-center text-center'>
        <p className='text-3xl '>Connect over food</p>
      </div>
      <div className='col-span-3'>
        <Image src={slide} className='-rotate-12' />
      </div>
    </div>
  );
}

export default Slide;
