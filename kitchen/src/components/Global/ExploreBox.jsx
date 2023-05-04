import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

function ExploreBox({ item, loading, status }) {
  const imgPath = "http://localhost:8800/uploads";
  const nextPath = "http://localhost:5173/explore";
  if (loading) {
    return "Loading...";
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
            <Link
              to={`${nextPath}/${element._id}`}
              key={index}
              className='border border-[color:var(--primary)] rounded-[25px] flex flex-col'
            >
              <div className='w-[90%] h-auto p-4 mx-auto'>
                <Image
                  src={`${imgPath}/${element.photo}`}
                  alt='wtf'
                  className='rounded-[30px]'
                />
              </div>

              <div className='text-[] text-center my-4 px-2 text-[22px]'>
                {element.name}
              </div>
            </Link>
          ))}
        </>
      );
  }
}

export default ExploreBox;
