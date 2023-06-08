import React, { useState, useEffect } from "react";

import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

function Favorite({ path, user, data }) {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    setClick(!click);
    // if (!click) {
    //   console.log("Favorited");
    //   axios.post(
    //     "http://localhost:8800/api/favorite",
    //     {
    //       userID: user._id,
    //       recipeID: path,
    //       photo: data.photo,
    //       name: data.name,
    //     },
    //     { withCredentials: true }
    //   );
    // } else {
    //   console.log("Unfavorited");
    //   axios.delete(`http://localhost:8800/api/favorite/${path}/${user._id}`);
    // }
  };

  return (
    <div
      className='border border-gray-500 flex py-2 px-4 items-center gap-x-4 rounded-lg cursor-pointer'
      onClick={handleClick}
    >
      <BsHeartFill
        size='30px'
        className={click ? " fill-[color:var(--primary)]" : " fill-gray-400"}
      />
      <p>Favorite Recipe</p>
    </div>
  );
}

export default Favorite;
