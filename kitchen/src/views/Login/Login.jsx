import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Image from "./../../components/Global/Image";
import test from "./../../assets/login-bg.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:8800/api/users/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Successful login");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='m-0 p-0 bg-gradient-to-r from-cyan-500 to-[#00df8f]'>
      <div className='flex items-center mx-auto h-[100vh] max-w-[60%] '>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-3'>
            <div className='col-span-2 flex flex-col justify-center p-6 pb-15 rounded-l-lg bg-white'>
              <span className='text-3xl my-6'>Login</span>
              <div className=''>
                <label
                  htmlFor='username'
                  className='block mb-2 text-lg font-bold text-gray-900 '
                >
                  Username
                </label>
                <input
                  type='text'
                  placeholder='Enter Username'
                  id='username'
                  className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:border-[#00df9a] mb-5'
                  {...register("username", { required: true, maxLength: 30 })}
                />
                <label
                  htmlFor='password'
                  className='block mb-2 text-lg font-medium text-gray-900 '
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Enter Password'
                  className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:border-[#00df9a] mb-5'
                  {...register("password", { required: true, maxLength: 30 })}
                />
                <div className='flex justify-center'>
                  <button
                    className='px-8 py-2 cursor-pointer border border-[#00df9a] rounded-lg  hover:bg-[#00df9a]  hover:ease-in-out hover:transition-all'
                    type='submit'
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image className='rounded-r-lg' src={test} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
