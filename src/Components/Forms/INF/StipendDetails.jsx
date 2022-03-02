import {
  Group,
  Radio,
  RadioGroup,
  Input,
  TextInput,
  Space,
  Checkbox,
} from "@mantine/core";
import GradientFont from "../../UI/GradientFont";
import WelcomeFont from "../../UI/WelcomeFont";

const StipendDetails = ({ form }) => {
  return (
    <Group direction="column" position="center" align="center">
      <WelcomeFont>Stipend Details</WelcomeFont>
      <TextInput
        {...form.getInputProps("stipend")}
        label="Stipend Details"
        required
        style={{
          width: "80%",
        }}
      />
      <TextInput
        label="CTC for PPO selects"
        {...form.getInputProps("ctcDetails")}
        required
        style={{
          width: "80%",
        }}
      />
      <Checkbox
        label="PPO provision on performance basis"
        {...form.getInputProps("provisionForPPO", { type: "checkbox" })}
        style={{ width: "80%" }}
      />
    </Group>
  );
};

export default StipendDetails;
