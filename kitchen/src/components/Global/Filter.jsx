import React from "react";
import { useForm } from "react-hook-form";
function Filter() {
  const { register, handleSubmit, control } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='my-7 max-w-[80%]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className='flex flex-col gap-y-3 my-5'>
          <label>
            <span className='text-[color:var(--primary)] text-xl'>
              Filter by name
            </span>
          </label>
          <input
            type='text'
            id='filterName'
            className=' focus:outline-none border-gray-400 rounded-lg'
            {...register("filterName", { required: true, maxLength: 30 })}
          />
        </div>
        {/* Tag */}
        <div className='flex flex-col gap-y-3 my-5'>
          <label>
            <span className='text-[color:var(--primary)] text-xl'>
              Filter by tag
            </span>
          </label>
          <input
            type='text'
            id='filterTag'
            className=' focus:outline-none border-gray-400 rounded-lg'
            {...register("filterTag", { required: true, maxLength: 10 })}
          />
        </div>

        <div className='flex flex-col gap-y-3 my-5'>
          <label>
            <span className='text-[color:var(--primary)] text-xl'>
              Filter by type
            </span>
          </label>
          <select
            className='border border-gray-400 px-1 py-1 rounded-lg'
            {...register("filterType")}
          >
            <option value='Soup'>Soup</option>
            <option value='Appetizer'>Appetizer</option>
            <option value='Mains'>Mains</option>
            <option value='Drinks'>Drinks</option>
            <option value='Sauces'>Sauces</option>
            <option value='Dessert'>Dessert</option>
          </select>
        </div>
        <div>
          <button type='Submit'>Filter</button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
