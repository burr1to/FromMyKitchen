import React from "react";

const Image = ({ src, alt, addStyles, onClick, style, ...rest }) => {
  return <img src={src} alt={alt} style={style} {...rest} onClick={onClick} />;
};

export default Image;
