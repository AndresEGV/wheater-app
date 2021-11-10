import React from "react";

const ImagenesRegion = ({ img }) => {
  return (
    <div className="mt-5">
      {img.map((im, i) => (
        <img key={i} src={im} alt="" width="500" className="p-2" />
      ))}
    </div>
  );
};

export default ImagenesRegion;
