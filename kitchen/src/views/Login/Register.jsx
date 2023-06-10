import { useNavigate } from "react-router-dom";
import ingredient from "./../../assets/upload.png";
import Image from "../../components/Global/Image";
import login_img from "./../../assets/login-ingredient.png";
import logo from "./../../assets/Illustration.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:8800/api/users/register", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    reset();
    navigate("/login");
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
          <h2 className='text-4xl font-bold mb-10'>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex mb-6'>
              <div className='w-1/2 mr-4'>
                <label
                  htmlFor='full-name'
                  className='block text-gray-700 text-xl font-bold mb-2'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='full-name'
                  className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:ring-0'
                  {...register("name", { required: true, maxLength: 30 })}
                />
              </div>
              <div className='w-1/2 ml-4'>
                <label
                  htmlFor='username'
                  className='block text-gray-700 text-xl font-bold mb-2'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:ring-0'
                  {...register("username", {
                    required: true,
                    maxLength: 30,
                  })}
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-xl font-bold mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:ring-0'
                {...register("email", { required: true, maxLength: 30 })}
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
                className='w-full px-3 py-2 rounded-md bg-[#F2EEE8] border-none text-lg focus:ring-0'
                {...register("password", {
                  required: true,
                  maxLength: 30,
                })}
              />
            </div>
            <div className='flex justify-between items-center mb-6'>
              <div className='text-gray-700 text-2xl absolute top-0 right-0 mt-5 mr-8 '>
                Already have an account? {""}
                <Link to='/login' className='text-[#FF9B00]'>
                  Login
                </Link>
              </div>
              <button
                type='submit'
                className='bg-[#FF9B00] text-white py-2 px-6 rounded-md text-xl font-bold'
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
