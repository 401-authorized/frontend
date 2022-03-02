import { Space } from "@mantine/core";
import React from "react";
import LoggedInHeader from "../../Components/Layout/HeaderLayout";
import ChangePassword from "../../Components/Profile/ChangePassword";

function AdminChangePasswordPage() {
  return (
    <>
      <LoggedInHeader />
      <Space h="xl"/>
      <ChangePassword admin/>
    </>
  );
}

export default AdminChangePasswordPage;
