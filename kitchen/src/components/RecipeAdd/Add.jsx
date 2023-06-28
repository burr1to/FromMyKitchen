import { useForm, useFieldArray } from "react-hook-form";
import Layout from "../Layout/Layout";
import Image from "../Global/Image";
import upload from "./../../assets/upload.png";
import { useState, useContext } from "react";
import axios from "axios";
import { BiUpload } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";

function Add() {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);

  const a = useContext(AuthContext);

  const { register, handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      foodtype: "",
      culture: "",
    },
  });

  const { isDirty, isValid, touchedFields, dirtyFields } = formState;

  console.log({ touchedFields, dirtyFields, isDirty, isValid });
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
    setImg(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleDelete = (img) => {
    setImg(null);
    setImage(null);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const photoForm = new FormData();
    const fileName = Date.now() + img.name;
    const form = new FormData();
    form.append("ctime", data.ctime);
    form.append("ptime", data.ptime);
    form.append("description", data.description);
    form.append("ingredients", JSON.stringify(data.ingredients));
    form.append("methods", JSON.stringify(data.methods));
    form.append("tags", JSON.stringify(data.tags));
    form.append("size", data.size);
    form.append("name", data.name);
    form.append("id", a.user._id);
    form.append("photo", fileName);
    form.append("type", data.foodtype);
    form.append("culture", data.culture);
    photoForm.append("name", fileName);
    photoForm.append("file", img);
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
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setImg(null);
    setImage(null);
    setError(false);
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <h2>Loading..</h2>;
  } else {
    return (
      <Layout>
        <div className='grid grid-cols-2'>
          <div className=''>
            <div className='w-full my-16 px-10 max-w-[90%] mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-y-5 w-full my-8'>
                  <p className='my-8 text-4xl'>Add your own personal recipe</p>
                  <label>
                    <span className='text-[color:var(--primary)] text-xl'>
                      Food Name
                    </span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='border-0 border-b-2 focus:outline-none border-gray-400'
                    {...register("name", { required: true, maxLength: 60 })}
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
                      {...register("ptime", { required: true, maxLength: 5 })}
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
                      {...register("ctime", { required: true, maxLength: 5 })}
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
                    placeholder='How many people would this dish feed?'
                    id='size'
                    type='number'
                    {...register("size", { required: true, maxLength: 3 })}
                    className='border-0 border-b-2 focus:outline-none border-gray-400'
                  />
                </div>
                <div className=' flex flex-col w-full gap-y-4 my-8 '>
                  <label>
                    <span className=' text-[color:var(--primary)]  text-xl'>
                      Food Type
                    </span>
                  </label>
                  <select
                    className='border-0 py-3 border-b-2 focus:outline-none border-gray-400'
                    id='type'
                    {...register("foodtype", { required: true })}
                  >
                    <option value='Mains'>Mains</option>
                    <option value='Soup'>Soup</option>
                    <option value='Appetizer'>Appetizer</option>
                    <option value='Drinks'>Drinks</option>
                    <option value='Sauces'>Sauces</option>
                    <option value='Dessert'>Dessert</option>
                    <option value='Dessert'>Other</option>
                  </select>
                </div>
                <div className=' flex flex-col w-full gap-y-4 my-8 '>
                  <label>
                    <span className=' text-[color:var(--primary)]  text-xl'>
                      Ethnic Group
                    </span>
                  </label>
                  <select
                    className='border-0 py-3 border-b-2 focus:outline-none border-gray-400'
                    id='culture'
                    {...register("culture", { required: true })}
                  >
                    <option value='Newari'>Newari</option>
                    <option value='Gurung'>Gurung</option>
                    <option value='Sherpa'>Sherpa</option>
                    <option value='Tharu'>Tharu</option>
                    <option value='Mid Western'>Mid Western</option>
                    <option value='Far Western'>Far Western</option>
                    <option value='Nepali'>Nepali</option>
                    <option value='Foreign'>Foreign</option>
                  </select>
                </div>
                <div className=' flex flex-col w-full gap-y-6 my-8 '>
                  <label>
                    <span className=' text-[color:var(--primary)] text-xl'>
                      Description ( 500 words )
                    </span>
                  </label>
                  <textarea
                    rows='6'
                    id='description'
                    type='text'
                    {...register("description", {
                      required: true,
                      maxLength: 500,
                    })}
                    className='border-2 px-4 py-2 rounded-lg focus:outline-none border-gray-400'
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
                        <div className='flex flex-col gap-y-3'>
                          <span>Ingredient</span>
                          <input
                            className='border-0 border-b-2 focus:outline-none border-gray-400'
                            {...register(`ingredients.${index}.name`)}
                          />
                        </div>
                        <div className='flex flex-col w-[100px] gap-y-3'>
                          <label>Quantity</label>
                          <input
                            type='number'
                            className='border-0 border-b-2 focus:outline-none border-gray-400'
                            {...register(`ingredients.${index}.quantity`, {
                              valueAsNumber: true,
                            })}
                          />
                        </div>
                        <div className='flex flex-col w-[150px] gap-y-3'>
                          <label>Unit</label>
                          <select
                            id='unit'
                            className='border-0 border-b-2 focus:outline-none border-gray-400 pb-2 pt-1'
                            {...register(`ingredients.${index}.unit`)}
                          >
                            <option value='pieces'>pieces</option>
                            <option value='tbsps'>tbsps</option>
                            <option value='pinches'>pinches</option>
                            <option value='kgs'>kgs</option>
                            <option value='gs'>gs</option>
                            <option value='cups'>cups</option>
                            <option value='mls'>mls</option>
                            <option value='ls'>ls</option>
                          </select>
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
                        <div className='flex w-full'>
                          <h1 className='text-[18px]'>{index + 1}.</h1>
                          <input
                            className='border-0 border-b-2 focus:outline-none border-gray-400 w-full'
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
                    <label htmlFor='image' className=''>
                      <div className='flex items-center gap-x-3'>
                        <BiUpload size='30px' />
                        <p>Upload your photo</p>
                      </div>
                    </label>
                    <input
                      type='file'
                      id='image'
                      onChange={handleChange}
                      className='border-0 outline-0 hidden'
                    />
                    <div className='my-10'>
                      <div>
                        <Image
                          src={image}
                          className='w-[400px] h-auto max-w-[800px] object-cover'
                        />
                        {img ? (
                          <button
                            className='my-2 border border-gray-300 px-4 py-1 rounded-lg'
                            onClick={handleDelete}
                          >
                            Delete
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {isValid ? (
                  ""
                ) : (
                  <p className='text-red-500 my-2'>
                    Check for any errors in the form!!
                  </p>
                )}
                <button
                  type='submit'
                  className={
                    isValid
                      ? "text-white bg-[color:var(--primary)] py-1 px-3 rounded-lg"
                      : "bg-gray-400 py-1 px-3 rounded-lg text-white"
                  }
                  disabled={!isDirty || !isValid}
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
