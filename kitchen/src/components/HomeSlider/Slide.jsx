import React from "react";
import Image from "../Global/Image";
import slide from "./../../assets/homepage.png";
function Slide() {
  return (
    <div className='grid grid-cols-5 text-[color:var(--primary)]'>
      <div className=' col-span-2 w-full mx-auto flex flex-col justify-center text-center relative'>
        <p className='md:text-5xl'>Connect over food</p>
        <div className='md:py-5 text-left md:max-w-[70%] mx-auto'>
          <p className='py-3'>
            Whether it's a simple weeknight dinner with family, a festive
            holiday gathering with friends, or a romantic meal for two,
            FromMyKitchen has recipes for all.
          </p>
          <button className='border border-[color:var(--primary)] rounded-lg p-3'>
            Explore Recipes
          </button>
        </div>
      </div>
      <div className='col-span-3'>
        <Image src={slide} className='-rotate-12' />
      </div>
    </div>
  );
}

export default Slide;
