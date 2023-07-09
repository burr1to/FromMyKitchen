import React from "react";

const Image = ({ src, alt, addStyles, onClick, style, ...rest }) => {
  return (
    <picture>
      <img
        src={src}
        loading='lazy'
        alt={alt}
        style={style}
        {...rest}
        onClick={onClick}
      />
    </picture>
  );
};

export default Image;
