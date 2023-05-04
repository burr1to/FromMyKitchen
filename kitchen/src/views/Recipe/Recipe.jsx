import React, { useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import Image from "../../components/Global/Image";
import axios from "axios";
import { useState } from "react";
import food from "./../../assets/explore.jpg";
import Comment from "../../components/Global/Comment";
import bread from "./../../assets/bread.jpg";
import samay from "./../../assets/samay.png";
import { useNavigate } from "react-router-dom";

function Recipe() {
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8800/api/comments");
      console.log(res.data);
      setComment(res.data);
      setLoading(false);
    };

    fetch();
  }, []);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const ingredients = [
    { name: "Ginger", quantity: 3 },
    { name: "Potato", quantity: 5 },
    { name: "Garlic", quantity: 7 },
    { name: "Ginger", quantity: 3 },
    { name: "Potato", quantity: 5 },
  ];

  const photos = [food, bread, food, samay];

  const tags = [{ tag: "cuisine" }, { tag: "newari" }, { tag: "hearty" }];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const [tag, setTag] = useState();

  const navigate = useNavigate();

  return (
    <Layout>
      <div className='my-10 relative max-w-[75%] mx-auto'>
        <div className=''>
          <div className='p-10'>
            <span className='text-7xl'>Samaya Baji</span>
            <p className='my-3 text-[25px]'>Newari Cuisine</p>
            <div>
              <ul>
                {tags?.map((tag, index) => (
                  <li
                    className='cursor-pointer inline-block border mx-1 px-4 border-gray-300 rounded-lg'
                    key={index}
                    onClick={() => {
                      setTag(tag.tag);
                      navigate(`/${tag.tag}`, { state: { tag } });
                    }}
                  >
                    #{tag.tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-cols pt-8 gap-x-7 '>
              <div>
                {photos.map((photo, index) => (
                  <Image
                    key={index}
                    onClick={() => handleOpen(index)}
                    src={photo}
                    className='object-cover cursor-pointer h-[160px] w-[160px] rounded-[25px] my-2'
                  />
                ))}
              </div>
              <div>
                <Image
                  src={open ? photos[slideNumber] : samay}
                  alt=''
                  className='min-w-[600px] w-[100%] h-[700px] max-w-[900px] object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
          <div>
            <p className='text-justify'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div className=' py-5 mt-5'>
            <ul className='text-[22px] flex flex-row space-x-12'>
              <li className='border border-[color:var(--secondary)] bg-[color:var(--secondary)] py-2 px-5 rounded-lg'>
                Prep Time: 2 Hours
              </li>
              <li className=' border border-[color:var(--secondary)] bg-[color:var(--secondary)] py-2 px-5 rounded-lg'>
                Cook Time: 1 Hours
              </li>
            </ul>
          </div>

          <div className='my-16 max-w-[20%]'>
            <span className='text-3xl my-12'>Ingredients</span>
            <ul className='text-[19px] my-5'>
              {ingredients?.map((ingredient, index) => (
                <li className='mt-1' key={index}>
                  <div className='relative '>
                    {ingredient.name}
                    <span className='absolute right-0'>
                      {ingredient.quantity}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='my-16'>
            <span className='text-3xl'>Instructions</span>
          </div>
        </div>
        <div>{loading ? "Loading..." : <Comment comment={comment} />}</div>
      </div>
    </Layout>
  );
}

export default Recipe;
