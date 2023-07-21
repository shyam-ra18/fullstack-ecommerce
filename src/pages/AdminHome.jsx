import React from "react";
import Navbar from "../features/navbar/Navbar";
import AdminProductList from "../features/admin/AdminProductList";
import Footer from "../features/common/Footer";

const AdminHome = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList />
      </Navbar>
      <Footer/>
    </div>
  );
};

export default AdminHome;
