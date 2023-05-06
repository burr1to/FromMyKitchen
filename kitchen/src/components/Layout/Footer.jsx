import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Image from "./../../components/Global/Image";
import logo from "./../../assets/Illustration.png";

export default function Footer() {
  return (
    <div className='max-w-[100%] mx-auto py-8 px-12 grid lg:grid-cols-4 gap-9 bg-[color:var(--background)] '>
      <div>
        <div className='w-full'>
          <Image src={logo} className='object-contain w-[70%] h-auto' />
        </div>
        <p className='py-4 text-justify'>
          FromMyKitchen is a semester project made by kristo, cookiebani, mynus
          and burrito in hopes of learning a bit about web development and what
          not.
        </p>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-5'>
        <div>
          <h4 className='text-2xl font-medium text-[color:var(--primary)] mb-5'>
            Explore Us
          </h4>
          <ul className='text-black'>
            <li className='py-2 '>Our Vision</li>
            <li className='py-2 '>Who We Are</li>
            <li className='py-2 '>Search for Recipes</li>
            <li className='py-2'>Our Team</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-medium text-[color:var(--primary)] mb-5'>
            Support
          </h4>
          <ul className='text-black'>
            <li className='py-2 '>Contact Us</li>
            <li className='py-2 '>Our Policies</li>
            <li className='py-2 '>Copyright Laws</li>
            <li className='py-2 '>Support</li>
          </ul>
        </div>
      </div>
      <div>
        <div className='flex text-[color:var(--primary)] flex-col items-center gap-y-4 justify-evenly my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
    </div>
  );
}
