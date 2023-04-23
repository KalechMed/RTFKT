import React from "react";

const Detail = ({ title, imageUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      
    </div>
  );
};

export default Detail;