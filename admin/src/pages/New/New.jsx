import React from "react";
import "./new.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "./../../forms.js";
import TextField from "@mui/material";

import Navbar from "../../components/Navbar/Navbar";

function New({ inputs, title }) {
  const [file, setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt='noImg'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image: <DriveFolderUploadOutlinedIcon />
                </label>
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type='file'
                  id='file'
                  placeholder='asd'
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input, index) => (
                <div className='formInput' key={index}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
