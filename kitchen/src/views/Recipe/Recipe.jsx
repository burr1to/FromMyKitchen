import { useEffect, useState, useContext } from "react";
import Layout from "./../../components/Layout/Layout";
import Image from "../../components/Global/Image";

import axios from "axios";
import food from "./../../assets/explore.jpg";
import Comment from "../../components/Global/Comment";
import bread from "./../../assets/bread.jpg";
import samay from "./../../assets/samay.png";
import { Link } from "react-router-dom";
import Favorite from "../../components/Global/Favorite";
import { AuthContext } from "../../context/AuthContext";

function Recipe() {
  const [comment, setComment] = useState([]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const user = useContext(AuthContext);

  const currentPath = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);

      const recipe = await axios.get(
        `http://localhost:8800/api/recipes/${currentPath}`
      );
      const res = await axios.get(
        `http://localhost:8800/api/comments/${currentPath}`
      );

      setData(recipe.data);

      setComment(res.data);
      setLoading(false);
    };

    fetch();
  }, []);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [food, bread, food, samay];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  return (
    <Layout>
      <div className="my-10 relative max-w-[75%] mx-auto">
        <div className="">
          <div className="p-10">
            <div className="flex gap-x-10 items-center">
              <span className="text-7xl">{data.name}</span>
              <Favorite path={currentPath} user={user.user} />
            </div>

            <p className="my-3 text-[25px]">Newari Cuisine</p>
            <div>
              <ul>
                {data.tags?.map((tag, index) => (
                  <li
                    className="cursor-pointer inline-block border mx-1 px-4 border-gray-300 rounded-lg"
                    key={index}
                  >
                    <Link to={`/recipes/${tag.tag}`}> #{tag.tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-cols pt-8 gap-x-7 ">
              <div>
                {photos.map((photo, index) => (
                  <Image
                    key={index}
                    onClick={() => handleOpen(index)}
                    src={photo}
                    className="object-cover cursor-pointer h-[160px] w-[160px] rounded-[25px] my-2"
                  />
                ))}
              </div>
              <div>
                <Image
                  src={open ? photos[slideNumber] : samay}
                  alt=""
                  className="min-w-[600px] w-[100%] h-[700px] max-w-[900px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-justify text-[24px]">{data.description}</p>
          </div>
          <div className=" py-5 mt-5">
            <ul className="text-[22px] flex flex-row space-x-12">
              <li className="border border-[color:var(--secondary)] bg-[color:var(--secondary)] py-2 px-5 rounded-lg">
                Prep Time: {data.pTime} mins
              </li>
              <li className=" border border-[color:var(--secondary)] bg-[color:var(--secondary)] py-2 px-5 rounded-lg">
                Cook Time: {data.cTime} mins
              </li>
            </ul>
          </div>

          <div className="my-16 max-w-[20%]">
            <span className="text-3xl my-12">Ingredients</span>
            <ul className="text-[19px] my-5">
              {data.ingredients?.map((ingredient, index) => (
                <li className="mt-1" key={index}>
                  <div className="relative ">
                    {ingredient.name}
                    <span className="absolute right-0">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-16">
            <span className="text-3xl">Instructions</span>
            <ul className="text-[19px] my-5">
              {data.methods?.map((method, index) => (
                <li className="mt-1" key={index}>
                  <div className="relative">
                    {index + 1}. {method.method}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {data.userID === user.user._id ? (
            <Link
              to={"update"}
              className="flex justify-center py-2 px-4 border border-[color:var(--secondary)] active:bg-[color:var(--secondary)] active:text-white rounded-lg hover:bg-[color:var(--secondary)] hover:text-white cursor-pointer text-xl"
            >
              Update your recipe
            </Link>
          ) : (
            ""
          )}
        </div>
        <div>
          <h1 className="my-14 text-3xl">Comments</h1>
          {loading ? (
            "Loading..."
          ) : (
            <Comment comment={comment} path={currentPath} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
