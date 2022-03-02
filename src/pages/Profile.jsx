import { Space } from "@mantine/core";
import DashboardHeader from "../Components/Layout/HeaderLayout";
import ProfilePage from "../Components/Profile/ProfilePage";

const Profile = () => {
  return (
    <>
      <DashboardHeader />
      <Space h="xl" />
      <ProfilePage />
    </>
  );
};

export default Profile;
