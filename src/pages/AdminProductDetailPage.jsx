import React from "react";
import Navbar from "../features/navbar/Navbar";
import AdminProductDetails from "../features/admin/AdminProductDetails";

const AdminProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductDetails />
      </Navbar>
    </div>
  );
};

export default AdminProductDetailPage;
