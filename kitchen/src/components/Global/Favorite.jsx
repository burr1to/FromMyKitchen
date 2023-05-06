import React, { useState, useEffect } from "react";

import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

function Favorite({ path, user }) {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    setClick(!click);
    if (!click) {
      console.log("Favorited");
      axios.post(
        "http://localhost:8800/api/favorite",
        {
          userID: user._id,
          recipeID: path,
        },
        { withCredentials: true }
      );
    } else {
      console.log("Unfavorited");
      axios.delete(`http://localhost:8800/api/favorite/${path}/${user._id}`);
    }
  };

  return (
    <div>
      <BsHeartFill
        size='30px'
        className={click ? " fill-red-500" : " fill-gray-400"}
        onClick={handleClick}
      />
    </div>
  );
}

export default Favorite;
