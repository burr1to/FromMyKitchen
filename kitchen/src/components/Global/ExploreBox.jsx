import React from "react";
import Image from "./Image";
import path from "./../../context/utils";
import { Link, useNavigate } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

function ExploreBox({ item, loading, status }) {
  if (loading) {
    return (
      <div className="flex justify-center">
        <BarLoader
          color={"orange"}
          loading={loading}
          width="1000px"
          height="10px"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    if (status === "search")
      return (
        <>
          {item?.map((element, index) => (
            <div key={index} className="flex items-center w-[95%] mx-auto">
              <div className="w-[140px] h-auto my-4">
                <Image
                  src={`${path[0]}/${element.photo}`}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center px-5 text-[18px]">{element.name}</div>
            </div>
          ))}
        </>
      );
    else
      return (
        <>
          {item?.map((element, index) => (
            <Link
              to={`${path[1]}/${element._id}`}
              key={index}
              className="border border-[color:var(--primary)] rounded-[25px] flex flex-col justify-center"
            >
              <div className="w-[90%] h-auto p-4 mx-auto">
                <Image
                  src={`${path[0]}/${element.photo}`}
                  alt="wtf"
                  className="rounded-[30px] w-[400px] h-auto"
                />
              </div>

              <div className="text-center my-4 px-2 text-[18px]">
                {element.name}
              </div>
            </Link>
          ))}
        </>
      );
  }
}

export default ExploreBox;
