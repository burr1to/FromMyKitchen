import React from "react";
import ingredient from "./../../assets/upload.png";
import Image from "../../components/Global/Image";
import logo from "./../../assets/Illustration.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

function Register() {
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
  };

  return (
    <div className='grid grid-cols-3 h-[100vh] max-h-[100vh]'>
      <div className='relative'>
        <div className='w-[80%] mx-auto'>
          <Image src={logo} className='w-[300px]' />
        </div>
        <div>Image</div>
      </div>
      <div className='col-span-2 mx-auto w-[60%] flex flex-col justify-evenly'>
        <div>
          <span>Sign Up</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className='flex w-full space-x-5 justify-evenly'>
            <div className='flex flex-col w-full'>
              <label>
                <span className='text-xl'>Full Name</span>
              </label>
              <input
                type='text'
                id='name'
                className=''
                {...register("name", { required: true, maxLength: 30 })}
              />
            </div>
            <div className='flex flex-col w-full'>
              <label>
                <span className='text-xl '>Username</span>
              </label>
              <input
                type='text'
                id='username'
                className=''
                {...register("username", {
                  required: true,
                  maxLength: 30,
                })}
              />
            </div>
          </section>
          <section className='flex w-full space-x-5 justify-evenly'>
            <div className='flex flex-col w-full'>
              <label>
                <span className='text-xl'>Email Address</span>
              </label>
              <input
                type='email'
                id='email'
                className=''
                {...register("email", { required: true, maxLength: 30 })}
              />
            </div>
          </section>
          <section className='flex w-full space-x-5 justify-evenly'>
            <div className='flex flex-col w-full'>
              <label>
                <span className='text-xl'>Password</span>
              </label>
              <input
                type='password'
                id='password'
                className=''
                {...register("password", {
                  required: true,
                  maxLength: 30,
                  minLength: { value: 8, message: "8 characters minimum!!!" },
                })}
              />
            </div>
          </section>

          <button>Create Account</button>
        </form>
        <div>Already have an account? Log In</div>
      </div>
    </div>
  );
}

export default Register;
