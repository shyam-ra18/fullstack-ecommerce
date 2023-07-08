import React from "react";
import UserProfile from "../features/user/components/UserProfile";
import Navbar from "../features/navbar/Navbar";

const UserProfilePage = () => {
  return (
    <>
      <Navbar>
        <h1 className="mx-auto text-3xl">My Profile</h1>
        <UserProfile />
      </Navbar>
    </>
  );
};

export default UserProfilePage;
