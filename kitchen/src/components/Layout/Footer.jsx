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
        <div className='flex justify-between md:w-[50%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
    </div>
  );
}
