import { useEffect, useState, useContext } from "react";
import Layout from "./../../components/Layout/Layout";
import Image from "../../components/Global/Image";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import Comment from "../../components/Global/Comment";
import { Link } from "react-router-dom";
import Favorite from "../../components/Global/Favorite";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import path from "./../../context/utils";

function Recipe() {
  const [comment, setComment] = useState([]);
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);
  const user = useContext(AuthContext);

  const navigate = useNavigate();

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

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`update`, { state: { data } });
  };

  return (
    <Layout>
      <div className='my-10 relative max-w-[75%] mx-auto'>
        <div>
          <div className='p-10'>
            <div className='flex gap-x-10 items-center'>
              <span className='text-7xl'>{data.name}</span>

              {user.user ? (
                <Favorite path={currentPath} user={user.user} data={data} />
              ) : (
                ""
              )}
            </div>

            <p className='my-3 text-[25px]'>{data.culture} Cuisine</p>

            <div>
              <ul>
                {data.tags?.map((tag, index) => (
                  <li
                    className='cursor-pointer inline-block border mx-1 px-4 border-gray-300 rounded-lg'
                    key={index}
                  >
                    <Link to={`/recipes/${tag.tag}`}> #{tag.tag}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='grid grid-cols-2 gap-6 my-4'>
              <div>
                <Image
                  src={`${path[0]}/${data.photo}`}
                  alt='No Image Found'
                  className='max-w-[640px] max-h-[600px] rounded-lg'
                />
              </div>

              <div className='py-4'>
                <p className='text-justify text-[24px]'>{data.description}</p>
                <ul className='text-[22px] flex space-x-12 my-6'>
                  <li className='border border-[color:var(--secondary)] bg-[color:var(--secondary)] py-2 px-5 rounded-lg'>
                    Prep Time: {data.pTime} mins
                  </li>
                  <li className=' border border-[color:var(--secondary)] bg-[color:var(--secondary)] py-2 px-5 rounded-lg'>
                    Cook Time: {data.cTime} mins
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>

          <div className='my-16 max-w-[20%]'>
            <span className='text-3xl my-12'>Ingredients</span>
            <ul className='text-[19px] my-5'>
              {data.ingredients?.map((ingredient, index) => (
                <li className='mt-1' key={index}>
                  <div className='relative '>
                    {ingredient.name}
                    <span className='absolute right-0'>
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='my-16'>
            <span className='text-3xl'>Instructions</span>
            <ul className='text-[19px] my-5'>
              {data.methods?.map((method, index) => (
                <li className='mt-1' key={index}>
                  <div className='relative'>
                    {index + 1}. {method.method}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {user.user && data.userID === user.user._id ? (
            <div
              onClick={handleClick}
              className='flex justify-center py-2 px-4 border border-[color:var(--secondary)] active:bg-[color:var(--secondary)] active:text-white rounded-lg hover:bg-[color:var(--secondary)] hover:text-white cursor-pointer text-xl'
            >
              Update your recipe
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h1 className='my-14 text-3xl'>Comments</h1>
          {loading ? (
            <div className='flex justify-center w-[100%] items-center'>
              <ClipLoader
                color={"orange"}
                loading={loading}
                width='100%'
                height='10px'
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            </div>
          ) : (
            <Comment comment={comment} path={currentPath} user={user} />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
