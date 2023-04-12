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
            className='border border-black rounded-md flex flex-col'
          >
            <div>
              <div className='w-[320px] h-auto p-4 mx-auto'>
                <Image src={element.strMealThumb} />
              </div>
            </div>
            <div className='text-center mb-4 text-[18px]'>
              {element.strMeal}{" "}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ExploreBox;
