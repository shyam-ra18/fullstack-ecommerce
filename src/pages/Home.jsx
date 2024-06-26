import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/productList/components/ProductList";
import Footer from "../features/common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
      <Footer/>
    </div>
  );
};

export default Home;
