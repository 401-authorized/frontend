import { Space } from "@mantine/core";
import React from "react";
import LoggedInHeader from "../Components/Layout/LoggedInHeader";
import ChangePassword from "../Components/Profile/ChangePassword";

function ChangePasswordPage() {
  return (
    <>
      <LoggedInHeader />
      <Space h="xl"/>
      <ChangePassword />
    </>
  );
}

export default ChangePasswordPage;
