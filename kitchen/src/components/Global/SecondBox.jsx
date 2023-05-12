import Image from "./../Global/Image";
import { Link } from "react-router-dom";

function SecondBox({ data, loading }) {
  const imgPath = "http://localhost:8800/uploads";
  return (
    <>
      {loading ? (
        "Loading.."
      ) : (
        <div className='flex justify-center items-center gap-x-5'>
          {data.map((single, index) => (
            <Link
              to={`/explore/${single._id}`}
              className='flex md:flex-col justify-center items-center gap-y-5'
              key={index}
            >
              <div>
                <Image
                  src={`${imgPath}/${single.photo}`}
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
