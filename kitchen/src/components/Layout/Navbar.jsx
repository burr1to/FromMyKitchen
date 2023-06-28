import { React, useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import Image from "./../../components/Global/Image";
import logo from "./../../assets/Illustration.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BiLogIn, BiLogOut, BiUser } from "react-icons/bi";
import path from "./../../context/utils";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };
  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
    } else {
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
          sessionStorage.clear();
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(user);
  return (
    <div className='flex justify-between items-center max-w-[1360px] mx-auto px-4 relative text-black '>
      <div className='w-full'>
        <Link to={"/"}>
          <Image src={logo} className='w-[50%] h-auto' />
        </Link>
      </div>

      <ul className='hidden md:flex flex-row-reverse items-center justify-start gap-x-6 w-full text-[18px]'>
        {user ? (
          <li onClick={handleSubmit} className='cursor-pointer'>
            <BiLogOut size='30px' />
          </li>
        ) : (
          <li onClick={handleSubmit} className='cursor-pointer'>
            <BiLogIn size='30px' />
          </li>
        )}
        <li className='cursor-pointer'>
          <Link to={user ? `/profile/${user._id}` : "/login"}>
            {user ? (
              <Image
                src={`${path[0]}/${user.profilePicture}`}
                className='h-[42px] w-[42px] rounded-[100%] object-cover'
              />
            ) : (
              <BiUser size='30px' />
            )}
          </Link>
        </li>

        <li className='p-4 cursor-pointer'>
          <Link to={user ? `/recipes/add` : "/login"}>Add your recipe</Link>
        </li>

        <li className='px-4 py-3 cursor-pointer border border-[color:var(--primary)] rounded-lg'>
          <Link to='/recipes'>Start Here</Link>
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

          <li className='p-4 border-b border-gray-600'>Explore</li>
          {user ? (
            <li className='p-4 border-b border-gray-600'>Logout</li>
          ) : (
            <li className='p-4 border-b border-gray-600'>Login</li>
          )}
          <li className='p-4 border-b border-gray-600'>Log Out</li>
        </ul>
      </div>
    </div>
  );
}
