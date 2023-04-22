import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "./../../components/Global/Image";
import logo from "./../../assets/illustration.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8800/api/users/logout");
    navigate("/login");
  };
  return (
    <div className='flex justify-between items-center max-w-[1360px] mx-auto px-4 relative text-black '>
      <div className='w-full'>
        <Image src={logo} className='object-contain w-[50%] h-auto' />
      </div>
      <ul className='hidden md:flex flex-row-reverse items-center w-full'>
        <li className='px-4 py-3 cursor-pointer border border-[color:var(--primary)] rounded-lg  hover:bg-[color:var(--primary)] hover:text-white  hover:ease-in-out hover:transition-all'>
          Start Here
        </li>
        <li className='p-4 cursor-pointer'>Explore</li>
        <li className='p-4 cursor-pointer'>Upload</li>
        <li onClick={handleSubmit} className='p-4 cursor-pointer'>
          Logout
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "z-10 fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className='w-full text-2xl font-bold text-[color:var(--primary)] m-2 mt-3 px-3'>
          FromMyKitchen
        </h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Recipes</li>
          <li className='p-4 border-b border-gray-600'>About Us</li>
          <li className='p-4 border-b border-gray-600'>Explore</li>
          <li className='p-4 border-b border-gray-600'>Log Out</li>
        </ul>
      </div>
    </div>
  );
}
