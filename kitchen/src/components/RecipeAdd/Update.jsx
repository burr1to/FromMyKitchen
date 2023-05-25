import { useForm, useFieldArray } from "react-hook-form";
import Layout from "../Layout/Layout";
import Image from "../Global/Image";
import upload from "./../../assets/upload.png";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BiUpload } from "react-icons/bi";
import { useLocation } from "react-router-dom";

function Update() {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(null);
  const [image, setImage] = useState(null);

  const recipe = useLocation();

  const [previous, setPrevious] = useState(recipe.state.data);

  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: previous.name,
      ptime: previous.pTime,
      ctime: previous.cTime,
      foodtype: previous.foodtype || null,
      culture: previous.culture || null,
      description: previous.description,
      size: previous.size,
    },
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
    setLoading(true);
    await axios
      .patch(
        `http://localhost:8800/api/recipes/${
          window.location.pathname.split("/")[2]
        }`,
        {
          name: data.name,
          ptime: data.ptime,
          ctime: data.ctime,
          foodtype: data.foodtype,
          culture: data.culture,
          description: data.description,
          size: data.size,
        },
        {
          withCredentials: true,
        }
      )
      .catch((err) => console.log(err));
    setLoading(false);
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className='grid grid-cols-2 '>
        <div className=''>
          <div className='w-full my-16 px-10 max-w-[90%] mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-y-5 w-full my-8'>
                <p className='my-8 text-4xl'>Update your recipe</p>
                <label>
                  <span className='text-[color:var(--primary)] text-xl'>
                    Food Name
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
                  placeholder='How many people would this dish feed?'
                  id='size'
                  type='number'
                  {...register("size", { required: true, maxLength: 30 })}
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
                  {...register("foodtype")}
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
                  {...register("culture")}
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
                    Description (Max 250 words)
                  </span>
                </label>
                <textarea
                  rows='6'
                  id='description'
                  type='text'
                  {...register("description", {
                    required: true,
                    maxLength: 250,
                  })}
                  className='border-2 px-4 py-2 rounded-lg focus:outline-none border-gray-400'
                />
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

export default Update;
