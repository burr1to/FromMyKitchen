import React from "react";
import Image from "./Image";

function ExploreBox({ item, loading, status }) {
  if (loading) {
    return "";
  } else {
    if (status === "search")
      return (
        <>
          {item?.map((element, index) => (
            <div key={index} className='flex items-center w-[95%] mx-auto'>
              <div className='w-[140px] h-auto my-4'>
                <Image src={element.strMealThumb} className='rounded-lg' />
              </div>
              <div className='text-center px-5 text-[18px]'>
                {element.strMeal}
              </div>
            </div>
          ))}
        </>
      );
    else
      return (
        <>
          {item?.map((element, index) => (
            <div
              key={index}
              className='border border-[color:var(--primary)] rounded-[25px] flex flex-col'
            >
              <div className='w-[90%] h-auto p-4 mx-auto'>
                <Image src={element.strMealThumb} className='rounded-[30px]' />
              </div>

              <div className='text-[] text-center my-4 px-2 text-[22px]'>
                {element.strMeal}
              </div>
            </div>
          ))}
        </>
      );
  }
}

export default ExploreBox;
