import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className='max-w-[100%] mx-auto py-16 px-12 grid lg:grid-cols-3 gap-9 text-gray-300 bg-black'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
          FromMyKitchen
        </h1>
        <p className='py-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className='flex justify-between md:w-[20%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-around mt-5'>
        <div>
          <h4 className='text-2xl font-medium text-gray-400 mb-5'>About Us</h4>
          <ul>
            <li className='py-2 text-sm'>Our Vision</li>
            <li className='py-2 text-sm'>Who We Are</li>
            <li className='py-2 text-sm'>Search for Recipes</li>
            <li className='py-2 text-sm'>Our Team</li>
          </ul>
        </div>
        <div>
          <h4 className='text-2xl font-medium text-gray-400 mb-5'>Support</h4>
          <ul>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>Our Policies</li>
            <li className='py-2 text-sm'>PepeLaugh</li>
            <li className='py-2 text-sm'>OmegaLul</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
