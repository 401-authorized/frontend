import { Group, Textarea, TextInput } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const JobDetails = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center" style={{ margin: "30px 0" }}>
      <WelcomeFont>Job Description</WelcomeFont>
      <TextInput
        placeholder="Software Developer"
        label="Designation"
        {...form.getInputProps("designation")}
        onBlur={(event) => fieldBlurHandler(event, "designation")}
      />
      <TextInput
        placeholder="Hyderabad"
        label="Place of Posting"
        {...form.getInputProps("placeOfPosting")}
        onBlur={(event) => fieldBlurHandler(event, "placeOfPosting")}
      />
      <Textarea
        label="Job Description"
        autosize
        minRows={2}
        maxRows={6}
        {...form.getInputProps("description")}
        onBlur={(event) => fieldBlurHandler(event, "description")}
      />
    </Group>
  );
};

export default JobDetails;
