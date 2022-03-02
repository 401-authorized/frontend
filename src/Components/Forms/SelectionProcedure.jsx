import {
  RadioGroup,
  Radio,
  Group,
  NumberInput,
  Center,
  Input,
  Chips,
  Chip,
  Checkbox,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import GradientFont from "../UI/GradientFont";
import WelcomeFont from "../UI/WelcomeFont";

const SelectionProcedure = ({ form, fieldBlurHandler }) => {
  const [otherRounds, setOtherRounds] = useState(form.values.otherRounds);

  useEffect(() => {
    form.setFieldValue("otherRounds", otherRounds);
  }, [otherRounds]);

  return (
    <Center>
      <Group direction="column" position="center" style={{ margin: "30px 0" }}>
        <WelcomeFont>Selection Procedure</WelcomeFont>
        <Checkbox
          label={
            <div className="mantine-1upenig mantine-1w07r5r">
              Resume Shortlisting
            </div>
          }
          {...form.getInputProps("shortlistFromResumes", { type: "checkbox" })}
          style={{ width: "80%" }}
        />
        <RadioGroup
          label="Type of Test"
          required
          style={{ width: "80%", marginBottom: "10px" }}
          {...form.getInputProps("typeOfTest")}
          onBlur={(event) => fieldBlurHandler(event, "typeOfTest")}
        >
          <Radio value="technical">Technical</Radio>
          <Radio value="aptitude">Aptitude</Radio>
          <Radio value="both">Both</Radio>
          <Radio value="none">None</Radio>
        </RadioGroup>
        <Group style={{ width: "80%" }}>
          <div className="mantine-1upenig mantine-1w07r5r">
            Other Qualification Rounds
          </div>
          <Chips multiple value={otherRounds} onChange={setOtherRounds}>
            <Chip value="GD">GD</Chip>
            <Chip value="Case Study">Case Study</Chip>
            <Chip value="Interview">Interview</Chip>
          </Chips>
        </Group>
        <NumberInput
          label="Total Number of Rounds"
          required
          style={{ width: "80%" }}
          {...form.getInputProps("totalRounds")}
          onBlur={(event) => fieldBlurHandler(event, "totalRounds")}
        />
        <TextInput
          style={{ width: "80%" }}
          placeholder="4"
          label="Total number of offers"
          required
          {...form.getInputProps("numberOfOffers")}
          onBlur={(event) => fieldBlurHandler(event, "numberOfOffers")}
        />
        <TextInput
          style={{ width: "80%" }}
          label="Eligibility Criteria (if any)"
          {...form.getInputProps("eligibilityCriteria")}
          onBlur={(event) => fieldBlurHandler(event, "eligibilityCriteria")}
        />
      </Group>
    </Center>
  );
};

export default SelectionProcedure;
