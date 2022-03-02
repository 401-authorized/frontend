import { Button, Card, Center, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAuth } from "../../hooks/useAuth";
import WelcomeFont from "../UI/WelcomeFont";
import ProfileItem from "./ProfileItem";

const ProfilePage = ({ admin }) => {
  const matches = useMediaQuery("(min-width: 800px)");
  const { user } = useAuth();
  const user_data = admin ? user : user.hr;
  console.log(user);
  console.log(user_data);
  return (
    <Group position="center" align="center" direction="column">
      <Card
        withBorder
        radius="md"
        style={{ minWidth: `${matches ? "60%" : "80%"}`, minheight: "100%" }}
      >
        <Center>
          <WelcomeFont>Profile</WelcomeFont>
        </Center>
        {/* <Group position="center" align="flex-start" direction="column"> */}
        <ProfileItem tag="Name" value={user_data.name} />
        <ProfileItem tag="Email" value={user_data.email} />
        {!admin && (
          <>
            <ProfileItem tag="Designation" value={user_data.designation} />
            <ProfileItem tag="Number" value={user_data.mobileNumber} />
            <ProfileItem tag="Company" value={user_data.companyId.name} />
          </>
        )}
        <Group position="center" align="center">
          <Button size={matches ? "md" : "xs"}>Edit</Button>
          <Button size={matches ? "md" : "xs"}>Change Password</Button>
        </Group>
      </Card>
    </Group>
  );
};

export default ProfilePage;
