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
              className='flex md:flex-col justify-center items-center gap-y-5'
              key={index}
            >
              <div>
                <Image
                  src={`${imgPath[0]}/${single.photo}`}
                  className='w-[85%] mx-auto object-cover rounded-lg'
                />
              </div>
              <div className='text-xl '>{single.name}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default SecondBox;

//flex flex-col items-center border border-black p-5
