import React, { useState } from "react";
import { BsHeartFill } from "react-icons/bs";

function Favorite() {
  const [click, setClick] = useState(false);
  const handleClick = (e) => {
    setClick(!click);
    if (!click) {
      console.log("Favorited");
    } else {
      console.log("Unfavorited");
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
