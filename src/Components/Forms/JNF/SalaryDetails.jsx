import { Group, Textarea, TextInput } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const SalaryDetails = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center" style={{ margin: "30px 0" }}>
      <WelcomeFont>Salary Details</WelcomeFont>
      <TextInput
        placeholder="50"
        label="CTC (in LPA)"
        {...form.getInputProps("ctc")}
        style={{width:"80%"}}
        onBlur={(event) => fieldBlurHandler(event, "ctc")}
      />
      <TextInput
        label="CTC Breakup"
        {...form.getInputProps("ctcBreakup")}
        style={{width:"80%"}}
        onBlur={(event) => fieldBlurHandler(event, "ctcBreakup")}
      />
      <Textarea
        label="Bond Details (If any)"
        autosize
        minRows={2}
        maxRows={10}
        {...form.getInputProps("bondDetails")}
        style={{width:"80%"}}
        onBlur={(event) => fieldBlurHandler(event, "bondDetails")}
      />
    </Group>
  );
};

export default SalaryDetails;
