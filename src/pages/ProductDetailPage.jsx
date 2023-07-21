import React from "react";
import ProductDetails from "../features/productList/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
