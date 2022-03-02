import { Button, Group, Space, Text } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

const About = () => {
  return (
    <Group position="center">
      <WelcomeFont>Career Development Center</WelcomeFont>
      <Text>
        The Training & Placement Cell invites Companies to visit IIT (ISM) and
        conduct the process to offer Full Time to the students. The T&P Cell
        provides the link to download the Job Notification Form(JNF)& Internship
        Notification Form(INF). The JNF and/or INF needs to be filled in by the
        company. The completed form(s) to be sent, through
        Email(tp@iitism.ac.in), to the T&P Cell.
      </Text>
      <Button style={{ minWidth: "30%", margin:"1.5rem 0" }}>Login</Button>
    </Group>
  );
};

export default About;
