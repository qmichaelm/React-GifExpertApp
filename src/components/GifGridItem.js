import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__pulse" align="center">
      <img src={url} alt={title}></img>
    </div>
  );
};
