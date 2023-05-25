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

  const { user, loading, error, dispatch } = useContext(AuthContext);
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
    <div className='flex h-screen'>
      <div className='w-2/5 bg-[#FF9B0017] relative'>
        <div className='h-full'>
          <img
            src={login_img}
            alt='Image'
            className='object-cover h-full ml-50 mt-12'
            style={{ minWidth: "115%" }}
          />
          <div className='absolute top-0 left-0 p-10'>
            <Link to='/'>
              <img
                src={logo}
                alt='Logo'
                className='logo-image ml-20 -mt-10'
                style={{ height: "115px", width: "230px" }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-3/5 flex flex-col justify-center items-center'>
        <div className='w-2/3'>
          <h2 className='text-4xl font-bold mb-10'>Login</h2>
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
                className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:ring-0 sm:w-2/5'
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
                className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:ring-0 sm:w-2/5'
                {...register("password", { required: true, maxLength: 30 })}
              />
            </div>
            <div className='flex justify-between items-center mb-6'>
              <div className='text-gray-700 text-2xl absolute top-0 right-0 mt-5 mr-8 '>
                Don't have an account? {""}
                <Link to='/signup' className='text-[#FF9B00]'>
                  Sign up
                </Link>
              </div>
              <button
                type='submit'
                className='bg-[#FF9B00] text-white py-2 px-6 rounded-md text-xl font-bold transition duration-300'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
