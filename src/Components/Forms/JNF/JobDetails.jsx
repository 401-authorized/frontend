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
        style={{width:"80%"}}
        onBlur={(event) => fieldBlurHandler(event, "designation")}
      />
      <TextInput
        placeholder="Hyderabad"
        label="Place of Posting"
        {...form.getInputProps("placeOfPosting")}
        style={{width:"80%"}}
        onBlur={(event) => fieldBlurHandler(event, "placeOfPosting")}
      />
      <Textarea
        label="Job Description"
        autosize
        minRows={2}
        maxRows={10}
        {...form.getInputProps("description")}
        style={{width:"80%"}}
        onBlur={(event) => fieldBlurHandler(event, "description")}
      />
    </Group>
  );
};

export default JobDetails;
