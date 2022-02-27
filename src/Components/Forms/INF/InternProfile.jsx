import { TextInput, Textarea, Group, RadioGroup, Radio } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const InternProfile = () => {
  return (
    <Group direction="column" align="center" position="center">
      <WelcomeFont>Intern Profile</WelcomeFont>
      <TextInput label="Job Designation" required style={{ width: "80%" }} />
      <Textarea
        label="Job Description"
        minRows="5"
        maxRows="10"
        required
        style={{ width: "80%"}}
      />
      <RadioGroup
        label="Mode of Internship"
        required
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-start",
          margin: "0 70px",
        }}
      >
        <Radio value="Virtual">Virtual</Radio>
        <Radio value="Physical">Physical</Radio>
      </RadioGroup>
      <TextInput
        label="Place of Posting (If Physical)"
        style={{ width: "80%"}}
      />
    </Group>
  );
};

export default InternProfile;
