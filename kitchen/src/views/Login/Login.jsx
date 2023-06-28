import React, { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Image from "./../../components/Global/Image";
import login_img from "./../../assets/login-ingredient.png";
import logo from "./../../assets/Illustration.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm();

  const { user, loading, dispatch } = useContext(AuthContext);
  const onSubmit = async (data) => {
    dispatch({ type: "LOGIN_START" });
    try {
      await axios
        .post("http://localhost:8800/api/users/login", data, {
          withCredentials: true,
        })
        .then((res) => {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          navigate("/");
        })
        .catch((err) => {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        });
    } catch {}
  };

  return (
    <div className='grid grid-cols-3 h-[100vh]'>
      <div className='hidden lg:flex bg-[#FF9B0017] relative'>
        <Image
          src={login_img}
          alt='Image'
          className='object-cover absolute h-screen left-0'
        />
      </div>

      <div className='col-span-3 lg:col-span-2 flex flex-col justify-center items-center bg-white'>
        <div className=''>
          <Link to='/'>
            <Image
              src={logo}
              alt='Logo'
              className='logo-image w-[300px] px-6 py-1'
            />
          </Link>
        </div>
        <div className='w-full text-center mx-auto '>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6'>
              <label
                htmlFor='username'
                className='block text-gray-700 text-xl font-bold mb-2'
              >
                Username
              </label>
              <input
                type='text'
                id='username'
                className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:outline-none sm:w-2/5'
                {...register("username", { required: true, maxLength: 30 })}
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='block text-gray-700 text-xl font-bold mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:outline-none sm:w-2/5'
                {...register("password", { required: true, maxLength: 30 })}
              />
            </div>
            <div className='flex flex-col items-center mb-6 space-y-4'>
              <button
                type='submit'
                className='bg-[#FF9B00] text-white py-2 px-6 rounded-md text-xl font-bold transition'
              >
                Login
              </button>
              <div className='text-xl'>
                <p>Don't have an account?</p>
                <Link to='/signup' className='text-[#FF9B00] '>
                  Sign up here
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
