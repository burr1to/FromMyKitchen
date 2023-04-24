import React from "react";
import { useState } from "react";

function Test() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const imgFile = e.target.files[0];
    setImage(imgFile);
  };
  const handleSubmit = (e) => {
    console.log(image);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Test;
