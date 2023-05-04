import { useForm, useFieldArray } from "react-hook-form";
import Layout from "../Layout/Layout";
import Image from "../Global/Image";
import upload from "./../../assets/upload.png";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Add() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const a = useContext(AuthContext);

  const { register, handleSubmit, control } = useForm({});
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

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const photoForm = new FormData();
    const fileName = Date.now() + file.name;

    const form = new FormData();
    form.append("ctime", data.ctime);
    form.append("ptime", data.ptime);
    form.append("description", data.description);
    form.append("ingredients", JSON.stringify(data.ingredients));
    form.append("methods", JSON.stringify(data.methods));
    form.append("tags", JSON.stringify(data.tags));
    form.append("size", data.size);
    form.append("name", a.user.name);
    form.append("id", a.user._id);
    form.append("photo", fileName);

    photoForm.append("name", fileName);
    photoForm.append("file", file);

    await axios
      .post("http://localhost:8800/api/recipes/photo", photoForm, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .post("http://localhost:8800/api/recipes", form, {
        headers: {
          withCredentials: true,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <h2>Loading..</h2>;
  } else {
    return (
      <Layout>
        <div className='grid grid-cols-2 '>
          <div className=''>
            <div className='w-full my-16 px-10 max-w-[90%] mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-5 w-full my-8'>
                  <p className='my-8 text-4xl'>Add your own personal recipe</p>
                  <label>
                    <span className='text-[color:var(--primary)] text-xl'>
                      Name
                    </span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='border-0 border-b-2 focus:outline-none border-gray-400'
                    {...register("name", { required: true, maxLength: 30 })}
                  />
                </div>
                <div className='flex gap-x-12'>
                  <div className=' flex flex-col w-full gap-y-4 '>
                    <label>
                      <span className=' text-[color:var(--primary)]  text-xl'>
                        Prep Time (mins)
                      </span>
                    </label>
                    <input
                      type='number'
                      id='ptime'
                      className='border-0 border-b-2 focus:outline-none border-gray-400'
                      {...register("ptime", { required: true, maxLength: 30 })}
                    />
                  </div>
                  <div className=' flex flex-col w-full gap-y-4 '>
                    <label>
                      <span className=' text-[color:var(--primary)]  text-xl'>
                        Cooking Time (mins)
                      </span>
                    </label>
                    <input
                      id='ctime'
                      type='number'
                      className='border-0 border-b-2 focus:outline-none border-gray-400'
                      {...register("ctime", { required: true, maxLength: 30 })}
                    />
                  </div>
                </div>
                <div className=' flex flex-col w-full gap-y-4 my-8 '>
                  <label>
                    <span className=' text-[color:var(--primary)]  text-xl'>
                      Serving Size
                    </span>
                  </label>
                  <input
                    id='size'
                    type='number'
                    {...register("size", { required: true, maxLength: 30 })}
                    className='border-0 border-b-2 focus:outline-none border-gray-400'
                  />
                </div>
                <div className=' flex flex-col w-full gap-y-6 my-8 '>
                  <label>
                    <span className=' text-[color:var(--primary)] text-xl'>
                      Description
                    </span>
                  </label>
                  <input
                    id='size'
                    type='text'
                    {...register("description", {
                      required: true,
                      maxLength: 30,
                    })}
                    className='border-2 px-4 rounded-lg focus:outline-none border-gray-400'
                  />
                </div>
                <div className='my-7 '>
                  <label>
                    <span className=' text-[color:var(--primary)] text-xl'>
                      Ingredients
                    </span>
                  </label>
                  {ingFields.map((field, index) => {
                    return (
                      <div
                        className='flex gap-5 p-4 items-center'
                        key={field.id}
                      >
                        <div className='flex flex-col'>
                          <span>Ingredient</span>
                          <input
                            className='border-0 border-b-2 focus:outline-none border-gray-400'
                            {...register(`ingredients.${index}.name`)}
                          />
                        </div>
                        <div className='flex flex-col'>
                          <label>Quantity</label>
                          <input
                            type='number'
                            className='border-0 border-b-2 focus:outline-none border-gray-400'
                            {...register(`ingredients.${index}.quantity`, {
                              valueAsNumber: true,
                            })}
                          />
                        </div>
                        <div>
                          <button
                            type='button'
                            className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
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
                      type='button'
                      className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
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
                    <span className='text-xl  text-[color:var(--primary)] '>
                      Methods
                    </span>
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
                            className='border-0 border-b-2 focus:outline-none border-gray-400'
                            {...register(`methods.${index}.method`)}
                          />
                        </div>

                        <div>
                          <button
                            type='button'
                            className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
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
                      type='button'
                      className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
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
                    <span className=' text-[color:var(--primary)]  text-xl'>
                      Tags
                    </span>
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
                            className='border-0 border-b-2 focus:outline-none border-gray-400'
                            {...register(`tags.${index}.tag`)}
                          />
                        </div>

                        <div>
                          <button
                            type='button'
                            className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
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
                      type='button'
                      className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
                      onClick={() => {
                        tagAppend({
                          tag: "",
                        });
                      }}
                    >
                      Add Tags
                    </button>
                  </div>
                  <div className='my-10'>
                    <input
                      type='file'
                      id='image'
                      onChange={handleChange}
                      className='border-none'
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  className=' text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg'
                >
                  Submit
                </button>
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
}

export default Add;
