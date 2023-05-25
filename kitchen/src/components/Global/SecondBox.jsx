import Image from "./../Global/Image";
import { Link } from "react-router-dom";
import imgPath from "./../../context/utils";

function SecondBox({ data, loading, status }) {
  return (
    <>
      {loading ? (
        "Loading.."
      ) : (
        <div
          className={
            status === "latest" ? "grid grid-cols-4" : "grid grid-cols-3"
          }
        >
          {data.map((single, index) => (
            <Link
              to={`/explore/${single._id}`}
              className='gap-y-5 py-4'
              key={index}
            >
              <div>
                <Image
                  src={`${imgPath[0]}/${single.photo}`}
                  className='w-[65%] mx-auto object-cover rounded-lg'
                />
              </div>
              <div className='text-[20px] text-center py-3'>{single.name}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default SecondBox;

//flex flex-col items-center border border-black p-5
