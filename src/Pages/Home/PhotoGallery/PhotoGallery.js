import React from "react";
import "./PhotoGallery.css";
import img1 from "../../../images/userclick/1.jpeg";
import img2 from "../../../images/userclick/2.jpeg";
import img3 from "../../../images/userclick/3.jpeg";
import img4 from "../../../images/userclick/4.jpeg";
import img5 from "../../../images/userclick/5.jpeg";
import img6 from "../../../images/userclick/6.jpeg";
import img7 from "../../../images/userclick/7.jpeg";
import img8 from "../../../images/userclick/8.jpeg";

const PhotoGallery = () => {
  return (
    <>
      <h1 className="text-center m-auto text-secondary pt-5">
        <i className="fas fa-2x text-info fa-camera"></i> Valuable Click from{" "}
        <span className="text-success">Our Clients</span> ___
      </h1>
      <div className="p-5 m-auto row g-0 photo-grid">
        <div className="col-sm-5">
          <img className="img-thumbnail" alt=".." src={img1} />
        </div>
        <div className="col-sm-4">
          <img className="img-thumbnail " alt=".." src={img6} />
        </div>
        <div className="col-sm-3">
          <img className="img-thumbnail " alt=".." src={img3} />
        </div>
        <div className="col-sm-3">
          <img className="img-thumbnail " alt=".." src={img4} />
        </div>
        <div className="col-sm-4">
          <img className="img-thumbnail " alt=".." src={img5} />
        </div>
        <div className="col-sm-5">
          <img className="img-thumbnail " alt=".." src={img8} />
        </div>
        <div className="col-sm-6">
          <img className="img-thumbnail " alt=".." src={img7} />
        </div>
        <div className="col-sm-6">
          <img className="img-thumbnail" alt=".." src={img2} />
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
