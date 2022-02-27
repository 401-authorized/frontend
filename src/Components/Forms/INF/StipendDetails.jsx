import {
  Group,
  Radio,
  RadioGroup,
  Input,
  TextInput,
  Space,
} from "@mantine/core";
import GradientFont from "../../UI/GradientFont";
import WelcomeFont from "../../UI/WelcomeFont";

const StipendDetails = () => {
  return (
    <Group direction="column" position="center" align="center">
      <WelcomeFont>Stipend Details</WelcomeFont>
      <TextInput
        label="Stipend Details"
        required
        style={{ width: "80%", display: "flex", flexFlow: "row", justifyContent:"space-evenly" }}
      />
      <Space h="10px" />
      <RadioGroup
        label="PPO provision on performance basis"
        required
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-between",
          margin: "0 10%",
        }}
      >
        <Radio value="Yes" style={{ margin: "0 20px" }}>
          Yes
        </Radio>
        <Radio value="No">No</Radio>
      </RadioGroup>
      <Space h="10px" />
      <TextInput
        label="CTC for PPO selects"
        required
        style={{ width: "80%", display: "flex", flexFlow: "row", justifyContent:"space-evenly" }}
      />
    </Group>
  );
};

export default StipendDetails;
