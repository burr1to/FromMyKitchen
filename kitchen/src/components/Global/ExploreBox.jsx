import React, { useEffect } from "react";
import Image from "./Image";
import path from "./../../context/utils";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function ExploreBox({ item, loading, status }) {
  if (loading) {
    return (
      <div className='flex justify-center w-[100%] items-center'>
        <ClipLoader
          color={"orange"}
          loading={loading}
          width='100%'
          height='10px'
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );
  } else {
    if (status === "search")
      return (
        <>
          {item?.map((element, index) => (
            <Link
              to={`${path[1]}/${element._id}`}
              key={index}
              className='flex items-center w-[95%] mx-auto'
            >
              <div className='my-2'>
                <Image
                  src={`${path[0]}/${element.photo}`}
                  className='rounded-lg w-[200px] object-cover'
                />
              </div>

              <div className='px-10 text-[22px]'>{element.name}</div>
            </Link>
          ))}
        </>
      );
    else if (status === "favorite")
      return (
        <div className='grid grid-cols-4 space-x-5'>
          {item?.map((element, index) => (
            <Link
              to={`${path[1]}/${element.recipeID}`}
              key={index}
              className='border border-[color:var(--primary)] rounded-[25px] col-span-1'
            >
              <div className='w-[90%] h-auto p-4 mx-auto'>
                <Image
                  src={`${path[0]}/${element.photo}`}
                  alt='wtf'
                  className='rounded-[30px] w-[300px] h-auto'
                />
              </div>

              <div className='text-[] text-center my-4 px-2 text-[22px]'>
                {element.name}
              </div>
            </Link>
          ))}
        </div>
      );
    else
      return (
        <div className='grid grid-cols-4 gap-4'>
          {item?.map((element, index) => (
            <Link
              to={`${path[1]}/${element._id}`}
              key={index}
              className='border border-[color:var(--primary)] rounded-[25px] col-span-1'
            >
              <div className='p-4 mx-auto'>
                <Image
                  src={`${path[0]}/${element.photo}`}
                  alt='wtf'
                  className='rounded-[30px] w-[400px] h-[250px] object-cover'
                />
              </div>

              <div className='text-center my-4 px-2 text-[20px]'>
                {element.name}
              </div>
            </Link>
          ))}
        </div>
      );
  }
}

export default ExploreBox;
