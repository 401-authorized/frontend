import { Button, Card, Center, Group, Text } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";
import WelcomeFont from "../UI/WelcomeFont";
import ProfileItem from "./ProfileItem";

const ProfilePage = ({ admin }) => {
  const { user } = useAuth();
  const user_data = admin ? user : user.hr;
  console.log(user);
  console.log(user_data);
  return (
    <Group position="center" align="center" direction="column">
      <Card
        withBorder
        radius="md"
        style={{ minWidth: "50%", minheight: "100%" }}
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
            <ProfileItem tag="Company" value={user_data.company} />
          </>
        )}
        <Group position="center" align="center">
          <Button size="md">Edit</Button>
        </Group>
      </Card>
    </Group>
  );
};

export default ProfilePage;
