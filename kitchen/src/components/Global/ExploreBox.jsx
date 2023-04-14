import React from "react";
import Image from "./Image";

function ExploreBox({ item, loading }) {
  if (loading) {
    return <h2>Loading..</h2>;
  } else {
    return (
      <>
        {item?.map((element, index) => (
          <div
            key={index}
            className='border border-gray-400 rounded-[25px] flex flex-col'
          >
            <div>
              <div className='w-[320px] h-auto p-4 mx-auto'>
                <Image src={element.strMealThumb} className='rounded-[30px]' />
              </div>
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
