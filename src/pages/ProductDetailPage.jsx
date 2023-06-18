import React from "react";
import ProductDetails from "../features/productList/components/ProductDetails";
import Navbar from "../features/navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <Navbar>
      <ProductDetails />
    </Navbar>
  );
};

export default ProductDetailPage;
