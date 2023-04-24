import { useForm, useFieldArray } from "react-hook-form";
import Layout from "../Layout/Layout";
import Image from "../Global/Image";
import upload from "./../../assets/upload.png";

function Add() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      ingredients: [{ name: "", quantity: 0 }],
      methods: [{ method: "Cut it out " }],
      tags: [{ tag: "cuisine" }],
    },
  });
  const {
    fields: ingFields,
    append: ingAppend,
    remove: ingRemove,
  } = useFieldArray({
    name: "ingredients",
    control,
  });

  const {
    fields: metFields,
    append: metAppend,
    remove: metRemove,
  } = useFieldArray({
    name: "methods",
    control,
  });

  const {
    fields: tagFields,
    append: tagAppend,
    remove: tagRemove,
  } = useFieldArray({
    name: "tags",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <div className='grid grid-cols-2'>
        <div className='border border-black'>
          <div className='w-full my-16 px-10 max-w-[80%] mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-y-2 w-full my-5'>
                <label>
                  <span className='text-xl '>Name</span>
                </label>
                <input
                  type='text'
                  id='name'
                  className='border-0 border-b-2 focus:outline-none'
                  {...register("name", { required: true, maxLength: 30 })}
                />
              </div>
              <div className=' flex gap-x-10'>
                <div className=' flex flex-col w-full gap-y-2 '>
                  <label>
                    <span className='text-xl'>Prep Time (mins)</span>
                  </label>
                  <input
                    type='number'
                    id='ptime'
                    className='border-0 border-b-2 focus:outline-none'
                    {...register("ptime", { required: true, maxLength: 30 })}
                  />
                </div>
                <div className=' flex flex-col w-full gap-y-2 '>
                  <label>
                    <span className='text-xl'>Cooking Time (mins)</span>
                  </label>
                  <input
                    id='ctime'
                    type='number'
                    className='border-0 border-b-2 focus:outline-none'
                    {...register("ctime", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
              <div className=' flex flex-col w-full gap-y-2 my-5 '>
                <label>
                  <span className='text-xl'>Serving Size</span>
                </label>
                <input
                  id='size'
                  type='number'
                  {...register("size", { required: true, maxLength: 30 })}
                  className='border-0 border-b-2 focus:outline-none'
                />
              </div>
              <div className=' flex flex-col w-full gap-y-2 my-5 '>
                <label>
                  <span className='text-xl'>Description</span>
                </label>
                <input
                  id='size'
                  type='text'
                  {...register("description", {
                    required: true,
                    maxLength: 30,
                  })}
                  className='border-2 px-4 rounded-lg focus:outline-none'
                />
              </div>
              <div className='my-7 '>
                <label>
                  <span className='text-xl'>Ingredients</span>
                </label>
                {ingFields.map((field, index) => {
                  return (
                    <div className='flex gap-5 p-4 items-center' key={field.id}>
                      <div className='flex flex-col'>
                        <span>Ingredient</span>
                        <input
                          className='border-0 border-b-2 focus:outline-none'
                          {...register(`ingredients.${index}.name`)}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <label>Quantity</label>
                        <input
                          type='number'
                          className='border-0 border-b-2 focus:outline-none'
                          {...register(`ingredients.${index}.quantity`, {
                            valueAsNumber: true,
                          })}
                        />
                      </div>
                      <div>
                        <button
                          className='border border-black p-1 rounded-lg'
                          onClick={() => {
                            ingRemove(index);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className=' mt-3'>
                  <button
                    className='border border-black p-1 rounded-lg'
                    onClick={() => {
                      ingAppend({
                        name: "",
                        quantity: 0,
                      });
                    }}
                  >
                    Add ingredients
                  </button>
                </div>
              </div>

              <div className='my-7 '>
                <label>
                  <span className='text-xl'>Methods</span>
                </label>
                {metFields.map((field, index) => {
                  return (
                    <div
                      className='flex gap-x-10 p-4 items-center'
                      key={field.id}
                    >
                      <div className='flex'>
                        <h1 className='text-[18px]'>{index + 1}.</h1>
                        <input
                          className='border-0 border-b-2 focus:outline-none'
                          {...register(`methods.${index}.method`)}
                        />
                      </div>

                      <div>
                        <button
                          className='border border-black p-1 rounded-lg'
                          onClick={() => {
                            metRemove(index);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className=' mt-3'>
                  <button
                    className='border border-black p-1 rounded-lg'
                    onClick={() => {
                      metAppend({
                        method: "",
                      });
                    }}
                  >
                    Add methods
                  </button>
                </div>
              </div>

              <div className='my-7 '>
                <label>
                  <span className='text-xl'>Tags</span>
                </label>
                {tagFields.map((field, index) => {
                  return (
                    <div
                      className='flex gap-x-10 p-4 items-center'
                      key={field.id}
                    >
                      <div className='flex'>
                        <h1 className='text-[18px]'>{index + 1}.</h1>
                        <input
                          className='border-0 border-b-2 focus:outline-none'
                          {...register(`tags.${index}.tag`)}
                        />
                      </div>

                      <div>
                        <button
                          className='border border-black p-1 rounded-lg'
                          onClick={() => {
                            tagRemove(index);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className=' mt-3'>
                  <button
                    className='border border-black p-1 rounded-lg'
                    onClick={() => {
                      tagAppend({
                        tag: "",
                      });
                    }}
                  >
                    Add Tags
                  </button>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div>
          <Image src={upload} />
        </div>
      </div>
    </Layout>
  );
}

export default Add;
