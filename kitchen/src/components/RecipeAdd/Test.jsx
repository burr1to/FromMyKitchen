import React from "react";
import { useState } from "react";

function Test() {
  const [image, setImage] = useState([]);

  const handleChange = (e) => {
    const imgFile = e.target.files;
    const imgArray = Array.from(imgFile);

    const showPreview = imgArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(showPreview);
    setImage(showPreview);
  };

  const handleDelete = (element) => {
    setImage(image.filter((e) => e !== element));
    URL.revokeObjectURL(element);
  };

  const handleSubmit = (e) => {
    console.log(image);
    e.preventDefault();
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='file' multiple onChange={handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        {image &&
          image.map((element, index) => {
            return (
              <div key={index}>
                <img src={element} />
                <button onClick={() => handleDelete(element)}>Delete</button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Test;
