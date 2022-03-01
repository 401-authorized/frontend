import { Card, Center, Group, Text } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

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
      <Card withBorder radius="md" style={{ maxWidth: "50%" }}>
        <Center>
          <WelcomeFont>Profile</WelcomeFont>
        </Center>
        <Group position="center" align="flex-start" direction="column">
          <Text color="blue">Name</Text>
          <Text color="blue">Email</Text>
          <Text color="blue">Designation</Text>
          <Text color="blue">Contact Number</Text>
          <Text color="blue">Company Name</Text>
        </Group>
      </Card>
    </Group>
  );
};

export default ProfilePage;
