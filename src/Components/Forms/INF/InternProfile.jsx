import { TextInput, Textarea, Group, RadioGroup, Radio } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const InternProfile = ({ form }) => {
  return (
    <Group direction="column" align="center" position="center">
      <WelcomeFont>Intern Profile</WelcomeFont>
      <TextInput
        label="Job Designation"
        {...form.getInputProps("designation")}
        required
        style={{ width: "80%" }}
      />
      <Textarea
        {...form.getInputProps("description")}
        label="Job Description"
        minRows="5"
        maxRows="10"
        required
        style={{ width: "80%" }}
      />
      <RadioGroup
        {...form.getInputProps("mode")}
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
        style={{ width: "80%" }}
        {...form.getInputProps("placeOfPosting")}
      />
    </Group>
  );
};

export default InternProfile;
