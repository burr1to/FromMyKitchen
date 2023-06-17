import { Link } from "react-router-dom";
import paths from "./../../context/utils";
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";

function Comment({ path, user }) {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:8800/api/comments/${path}`);
      setComment(res.data);
      setLoading(false);
    };
    fetch();
  }, [count]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(
        "http://localhost:8800/api/comments",
        {
          userID: user._id,
          name: user.username,
          text: data.text,
          recipeID: path,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
    setCount(count + 1);
  };

  return (
    <div>
      <div className='my-4 mx-auto'>
        {comment.map((element, index) => (
          <div className='py-6' key={index}>
            <Link
              to={`${paths[2]}/${element.userID}`}
              className='text-gray-500 text-xl'
            >
              {element.name}
            </Link>
            <div className='flex justify-between px-4 my-3'>
              <p className='text-gray-800'>{element.text}</p>
              <p className='bg-[color:var(--primary)] text-white py-1 px-3 rounded-lg'>
                {element.createdAt.split("T")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
      {user && (
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white rounded px-8 pt-6 pb-8 mb-4'
          >
            <div className='mb-4'>
              <textarea
                type='text'
                id='text'
                className='mt-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                placeholder='Enter your comment'
                {...register("text", { required: true, maxLength: 100 })}
              />
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-[color:var(--secondary)] hover:bg-[color:var(--primary)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Submit
              </button>
              <span className='text-gray-500 text-xs'>Max 100 characters</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Comment;
