import React from "react";
import TopNavbar from "../../Components/Header/TopNavbar";
import HeaderSlider from "../../Components/Slider/HeaderSlider";
import AllCategories from "../../Components/Categories/AllCategories";
import LatestProducts from "../../Components/Product/LatestProducts";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <>
      <TopNavbar />
      <HeaderSlider />
      <AllCategories />
      <LatestProducts />
      <Footer />
    </>
  );
}

export default Home;
