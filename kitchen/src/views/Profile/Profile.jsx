import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import icon from "../../assets/update-icon.png"
import pp from "../../assets/pp.jpeg"
import ExploreBox from "../../components/Global/ExploreBox";
import axios from "axios";

function Profile() {

  const [imageUrl, setImageUrl] = useState(pp)
  const [username, setUsername] = useState("Username")
  const [fname, setFname] = useState("Fullname")
  const [email, setEmail] = useState("user@gmail.com")
  const [bio, setBio] = useState("this is my bio")
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
      );

      setData(res.data.meals);
      setLoading(false);
    };

    fetch();
  }, []);

  const favorite = data.slice(0, 2);
  const uploaded = data.slice(3,5)

  return(
    <Layout>
<div className='px-12' >
  <div><h1 className="text-[32px] text-[color:var(--primary)] ">Profile</h1></div>
  <div>
  <div className="my-6 flex gap-3 mt-2">
    <h2 className="h-8 w-30 text-black font-bold flex items-center ">Personal Info</h2>
    <div className="h-7 w-8">
      <img src={icon} className="h-full w-full object-contain hover:cursor-pointer" alt="Icon"/>
    </div>
  </div>
  <div>
    <div className="flex gap-3 mt-3">
    <img src={imageUrl} alt="Personal Photo Image" className="rounded-md h-20 w-auto"/>
    <div className="justify-center items-center">
      <h2><span class="text-black">Username: </span>{username}</h2>
      <h2><span class="text-black">Name: </span>{fname}</h2>
      <h2><span class="text-black">Email: </span>{email}</h2>
      <h2><span class="text-black">Bio: </span>{bio}</h2>
    </div>
  </div>
  </div>
</div>
<hr className="border my-6 border-black"/>
  <h2 className="h-8 w-30 text-black mb-6 mt-3">Favorited Recipes</h2>
  <div className=' col-span-6 grid sm:grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10'>
          <ExploreBox item={favorite} loading={loading} />
        </div>
  <hr className="border mt-12 mb-6 border-black"/>
  <h2 className="h-8 w-30 text-black mb-6 mt-3">Uploaded Recipes</h2>
  <div className="mb-20">
  <div className=' grid sm:grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-10'>
          <ExploreBox item={uploaded} loading={loading} />
        </div>
  </div>
</div>
    </Layout>
  );
}

export default Profile;
