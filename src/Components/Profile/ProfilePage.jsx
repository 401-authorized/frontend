import { Button, Card, Center, Group, Text } from "@mantine/core";
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
        <ProfileItem tag="Name" value={HRdata.name} />
        <ProfileItem tag="Email" value={HRdata.email} />
        <ProfileItem tag="Designation" value={HRdata.designation} />
        <ProfileItem tag="Number" value={HRdata.number} />
        <ProfileItem tag="Company" value={HRdata.company} />
        <Group position="center" align="center">
          <Button size="md" >Edit</Button>
        </Group>
        {/* </Group> */}
      </Card>
    </Group>
  );
};

export default ProfilePage;
