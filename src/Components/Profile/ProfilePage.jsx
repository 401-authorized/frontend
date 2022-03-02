import { Button, Card, Center, Group, Text } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";
import WelcomeFont from "../UI/WelcomeFont";
import ProfileItem from "./ProfileItem";

const HRdata = {
  name: "Tanwir",
  email: "tanwir@csesociety.ac.in",
  designation: "Director",
  number: "9872536472",
  company: "The CSE Society",
};

const ProfilePage = () => {
  const { user } = useAuth();
  console.log(user);
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
        <ProfileItem tag="Name" value={user.hr.name} />
        <ProfileItem tag="Email" value={user.hr.email} />
        <ProfileItem tag="Designation" value={user.hr.designation} />
        <ProfileItem tag="Number" value={user.hr.mobileNumber} />
        <ProfileItem tag="Company" value={user.hr.company} />
        <Group position="center" align="center">
          <Button size="md">Edit</Button>
        </Group>
        {/* </Group> */}
      </Card>
    </Group>
  );
};

export default ProfilePage;
