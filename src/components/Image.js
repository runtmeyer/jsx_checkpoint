import React from "react";

const Image = ({ image }) => {
  return <img src={image} alt="Product" style={{ width: 100, height: 100, borderRadius: 10}}/>;
};

export default Image;