import {
  RadioGroup,
  Radio,
  Group,
  Checkbox,
  NumberInput,
  Center,
  Input,
  Chips,
  Chip,
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
      <Group direction="column" position="left" style={{ margin: "30px 0" }}>
        <WelcomeFont>Selection Procedure</WelcomeFont>
        <RadioGroup
          label={<GradientFont>Resume Shortlisting</GradientFont>}
          description=""
          required
          style={{ display: "flex", flexFlow: "row" }}
          spacing="xl"
          {...form.getInputProps("shortlistFromResumes")}
          onBlur={(event) => fieldBlurHandler(event, "shortlistFromResumes")}
        >
          <Radio value="true" style={{ margin: "0 0 0 30px" }}>
            Yes
          </Radio>
          <Radio value="false">No</Radio>
        </RadioGroup>
        <RadioGroup
          label={<GradientFont>Type of Test</GradientFont>}
          description=""
          required
          style={{ display: "flex", flexFlow: "row" }}
          spacing="xl"
          {...form.getInputProps("typeOfTest")}
          onBlur={(event) => fieldBlurHandler(event, "typeOfTest")}
        >
          <Radio value="technical" style={{ margin: "0px 0 0 30px" }}>
            Technical
          </Radio>
          <Radio value="aptitude">Aptitude</Radio>
          <Radio value="both">Both</Radio>
          <Radio value="none">None</Radio>
        </RadioGroup>
        <Group>
          <GradientFont>Other Qualification Rounds</GradientFont>
          <Chips multiple value={otherRounds} onChange={setOtherRounds}>
            <Chip value="GD">GD</Chip>
            <Chip value="Case Study">Case Study</Chip>
            <Chip value="Interview">Interview</Chip>
          </Chips>
        </Group>
        <NumberInput
          label={<GradientFont>Total Nubmer of Rounds</GradientFont>}
          required
          style={{ display: "flex", flexFlow: "row" }}
          {...form.getInputProps("totalRounds")}
          onBlur={(event) => fieldBlurHandler(event, "totalRounds")}
        />
        <Group>
          <GradientFont>
            Total number of offers {<br />} (range would be sufficient)
          </GradientFont>
          <Input
            placeholder="4-5"
            required
            {...form.getInputProps("numberOfOffers")}
            onBlur={(event) => fieldBlurHandler(event, "numberOfOffers")}
          />
        </Group>
        <Group>
          <GradientFont>Eligibility Criteria (if any)</GradientFont>
          <Input
            {...form.getInputProps("eligibilityCriteria")}
            onBlur={(event) => fieldBlurHandler(event, "eligibilityCriteria")}
          />
        </Group>
      </Group>
    </Center>
  );
};

export default SelectionProcedure;
