import { Group, Textarea, TextInput } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const JobDetails = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center" style={{ margin: "30px 0" }}>
      <WelcomeFont>Job Description</WelcomeFont>
      <TextInput placeholder="Software Developer" label="Designation" {...form.getInputProps('designation2')} onBlur={event => fieldBlurHandler(event,"designation2")}/>
      <TextInput placeholder="Hyderabad" label="Place of Posting" {...form.getInputProps('pop2')} onBlur={event => fieldBlurHandler(event,"pop2")}/>
      <Textarea label="Job Description" autosize minRows={2} maxRows={6} {...form.getInputProps('jobdesc2')} onBlur={event => fieldBlurHandler(event,"jobdesc2")}/>
    </Group>
  );
};

export default JobDetails;
