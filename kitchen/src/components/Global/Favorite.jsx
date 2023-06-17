import React, { useState, useEffect } from "react";

import { BsHeartFill } from "react-icons/bs";
import axios from "axios";

function Favorite({ path, user, data }) {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    setClick(!click);
    if (!click) {
      console.log("Favorited");
      axios.patch(
        `http://localhost:8800/api/users/favorite/${user}/${path}`,
        {
          recipeID: path,
          userID: user,
        },
        { withCredentials: true }
      );
    } else {
      axios.patch(
        `http://localhost:8800/api/users/unfavorite/${user}/${path}`,
        {},
        { withCredentials: true }
      );
    }
  };

  return (
    <div className='cursor-pointer'>
      <BsHeartFill
        size='30px'
        onClick={handleClick}
        className={click ? " fill-[color:var(--primary)]" : " fill-gray-400"}
      />
    </div>
  );
}

export default Favorite;
