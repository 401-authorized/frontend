import { Group, Textarea, TextInput } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const SalaryDetails = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center" style={{ margin: "30px 0" }}>
      <WelcomeFont>Salary Details</WelcomeFont>
      <TextInput
        placeholder="50"
        label="CTC (in LPA)"
        {...form.getInputProps("ctc3")}
        onBlur={(event) => fieldBlurHandler(event, "ctc3")}
      />
      <TextInput
        label="CTC Breakup"
        {...form.getInputProps("ctcbreakup3")}
        onBlur={(event) => fieldBlurHandler(event, "ctcbreakup3")}
      />
      <Textarea
        label="Bond Details (If any)"
        autosize
        minRows={2}
        maxRows={6}
        {...form.getInputProps("bonddetails3")}
        onBlur={(event) => fieldBlurHandler(event, "bonddetails3")}
      />
    </Group>
  );
};

export default SalaryDetails;
