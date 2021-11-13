import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Menubar from "../../../Shared/Menubar/Menubar";
import Products from "../AllProducts/Products/Products";
import Banner from "../Banner/Banner";
import Motto from "../Motto/Motto";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Menubar></Menubar>
      <Banner></Banner>
      <Motto></Motto>
      <Products></Products>
      <Reviews></Reviews>
      <PhotoGallery></PhotoGallery>
      <Footer></Footer>
    </div>
  );
};

export default Home;
