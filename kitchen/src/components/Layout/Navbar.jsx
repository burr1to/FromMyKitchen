import { React, useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "./../../components/Global/Image";
import logo from "./../../assets/illustration.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:8800/api/users/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch({ type: "LOGOUT" });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='flex justify-between items-center max-w-[1360px] mx-auto px-4 relative text-black '>
      <div className='w-full'>
        <Link to='/'>
          <Image src={logo} className='object-contain w-[50%] h-auto' />
        </Link>
      </div>

      <ul className='hidden md:flex flex-row-reverse items-center w-full'>
        <li onClick={handleSubmit} className='p-4 cursor-pointer'>
          Logout
        </li>

        <li className='p-4 cursor-pointer'>Add Recipe</li>
        <li className='p-4 cursor-pointer'>Our Kitchen</li>
        <li className='px-4 py-3 cursor-pointer border border-[color:var(--primary)] rounded-lg'>
          <Link to='/explore'>Start Here</Link>
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
