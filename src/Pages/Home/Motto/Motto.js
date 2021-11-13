import React from "react";
import "animate.css";
import mottoimg from "../../../images/motto/1.jpg";

const Motto = () => {
  return (
    <div>
      <div className="row mb-5 g-0 container-fluid">
        <div className="bg-info text-white">
          {" "}
          <h1 className="animate__animated animate__bounceInDown text-center py-5">
            # W e l c o m e
          </h1>
        </div>
        <div className="col-sm-4">
          <img className="w-100 h-100" src={mottoimg} alt="" />
        </div>
        <div className="col-sm-8 bg-success text-white">
          <div className="text-center p-5">
            <h1 className="animate__animated animate__bounceInDown">
              <i class="fas fa-2x fa-dove text-warning"></i> Falcons Eye
            </h1>
          </div>
          <h3 className="animate__animated animate__rubberBand text-center p-5">
            Looking for premium tech birds at your budget? <br /> We are here at
            your doorstep
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Motto;
