import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Layout from "../Layout/Layout";
import axios from "axios";
import pp from "./../../assets/pp.jpeg";
import { AuthContext } from "../../context/AuthContext";
import { BiUpload } from "react-icons/bi";
import Image from "../Global/Image";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const currentUser = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, control, reset } = useForm({});
  const [img, setImg] = useState(null);
  const [pre, setPre] = useState(null);
  const handleChange = (e) => {
    setImg(e.target.files[0]);
    setPre(URL.createObjectURL(e.target.files[0]));
  };

  const handleDelete = (img) => {
    setImg(null);
    setPre(null);
  };

  const onSubmit = async (data) => {
    const photoForm = new FormData();
    const fileName = Date.now() + img.name;

    photoForm.append("name", fileName);
    photoForm.append("file", img);
    setLoading(true);
    await axios
      .post("http://localhost:8800/api/recipes/photo", photoForm, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios.patch(
      `http://localhost:8800/api/users/update/${
        window.location.pathname.split("/")[2]
      }`,
      {
        name: data.name,
        username: data.username,
        email: data.email,
        profilePicture: fileName,
      },
      {
        withCredentials: true,
      }
    );
    setLoading(false);
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`${window.location.pathname.split("ed")[0]}`);
  };

  return (
    <Layout>
      {currentUser.user !== null ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col justify-center p-6 pb-15 rounded-l-lg bg-white max-w-[50%] mx-auto'>
            <span className='text-3xl my-6 text-center'>Edit your Profile</span>
            <div className='flex flex-col items-center justify-center my-10 gap-y-5'>
              <Image
                src={img ? pre : pp}
                className='w-[200px] h-[200px] rounded-[50%]'
              />
              <label htmlFor='image' className=''>
                <div className='flex items-center gap-x-3'>
                  <BiUpload size='30px' />
                  <p>Upload profile picture</p>
                </div>
              </label>
              <input
                type='file'
                id='image'
                onChange={handleChange}
                className='border-0 outline-0 hidden'
              />
              <button onClick={handleDelete}>Delete</button>
            </div>
            <div className=''>
              <label
                htmlFor='name'
                className='block mb-2 text-lg font-bold text-gray-900 '
              >
                Name
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                id='name'
                className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-[color:var(--primary)] mb-5'
                {...register("name", { required: true, maxLength: 50 })}
              />
              <label
                htmlFor='username'
                className='block mb-2 text-lg font-bold text-gray-900 '
              >
                Username
              </label>
              <input
                type='text'
                placeholder='Enter Username'
                id='username'
                className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-[color:var(--primary)] mb-5'
                {...register("username", { required: true, maxLength: 30 })}
              />

              <label
                htmlFor='email'
                className='block mb-2 text-lg font-medium text-gray-900 '
              >
                Email ID
              </label>
              <input
                type='email'
                id='email'
                placeholder='Enter email ID'
                className='w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-[color:var(--primary)] mb-5'
                {...register("email", { required: true, maxLength: 30 })}
              />
              <div className='flex justify-center'>
                <button
                  className='px-8 py-2 cursor-pointer border border-[color:var(--primary)] rounded-lg hover:text-white hover:bg-[color:var(--primary)]  hover:ease-in-out hover:transition-all'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        "No page nigga"
      )}
    </Layout>
  );
}

export default Edit;
