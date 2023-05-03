import React from "react";
import Image from "./../Global/Image";
import image from "./../../assets/explore.jpg";

function SecondBox() {
  return (
    <div className='flex flex-col items-center border border-black p-5'>
      <div>
        <Image src={image} className='w-[80%] mx-auto object-cover' />
      </div>
      <div>yooooooo</div>
    </div>
  );
}

export default SecondBox;
