import React from "react";
import ingredient from "./../../assets/upload.png";
import Image from "../../components/Global/Image";
import logo from "./../../assets/Illustration.png";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                id='fname'
                className=''
                {...register("fname", { required: true, maxLength: 30 })}
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
                {...register("username", { required: true, maxLength: 30 })}
              />
            </div>
          </section>
          <section className='flex w-full space-x-5 justify-evenly'>
            <div className='flex flex-col w-full'>
              <label>
                <span className='text-xl'>Email Address</span>
              </label>
              <input
                type='text'
                id='fname'
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
                type='text'
                id='fname'
                className=''
                {...register("email", { required: true, maxLength: 30 })}
              />
            </div>
          </section>
          <section className='flex w-full space-x-5 justify-evenly'>
            <div className='flex flex-col w-full'>
              <label>
                <span className='text-xl'>Verify Password</span>
              </label>
              <input
                type='text'
                id='fname'
                className=''
                {...register("email", { required: true, maxLength: 30 })}
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
