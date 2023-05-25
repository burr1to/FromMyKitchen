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
            status === "latest"
              ? "grid grid-cols-4 gap-x-4"
              : "grid grid-cols-3"
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
                  className='w-[300px] mx-auto object-cover rounded-[20px]'
                />
              </div>
              <div className='text-[22px] text-center py-4'>{single.name}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default SecondBox;

//flex flex-col items-center border border-black p-5
