import { Space } from "@mantine/core";
import React from "react";
import DashboardHeader from "../../Components/Layout/HeaderLayout";
import ProfilePage from "../../Components/Profile/ProfilePage";

function AdminProfile() {
  return (
    <>
      <DashboardHeader />
      <Space h="xl" />
      <ProfilePage admin />
    </>
  );
}

export default AdminProfile;
