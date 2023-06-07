import { useState, useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
function AddComment({ path }) {
  const user = useContext(AuthContext);

  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post(
        "http://localhost:8800/api/comments",
        {
          userID: user.user._id,
          name: user.user.username,
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
  };
  return (
    <div className=''>
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
  );
}

export default AddComment;
