import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

function AddComment() {
  const [comment, setComment] = useState("");
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            id='comment'
            className='mt-5 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Enter your comment'
            {...register("comment", { required: true, maxLength: 100 })}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
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
