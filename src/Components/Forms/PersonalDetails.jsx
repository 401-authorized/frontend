import { Group, TextInput } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

const PersonalDetails = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center" style={{ margin: "30px 0" }}>
      <WelcomeFont>Contact Personnel Details</WelcomeFont>
      <TextInput placeholder="" label="Name" {...form.getInputProps('name6')} onBlur={event => fieldBlurHandler(event,"name6")}/>
      <TextInput placeholder="" label="Designation" {...form.getInputProps('designation6')} onBlur={event => fieldBlurHandler(event,"designation6")}/>
      <TextInput placeholder="" label="Email Address" {...form.getInputProps('email6')} onBlur={event => fieldBlurHandler(event,"email6")}/>
      <TextInput placeholder="" label="Mobile Number" {...form.getInputProps('number6')} onBlur={event => fieldBlurHandler(event,"number6")}/>
    </Group>
  );
};

export default PersonalDetails;
