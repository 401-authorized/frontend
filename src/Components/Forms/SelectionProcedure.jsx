import {
  RadioGroup,
  Radio,
  Group,
  Checkbox,
  NumberInput,
  Center,
  Input,
} from "@mantine/core";
import GradientFont from "../UI/GradientFont";
import WelcomeFont from "../UI/WelcomeFont";

const SelectionProcedure = ({ form, fieldBlurHandler }) => {
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
          {...form.getInputProps('resumeshortlisting5')} onBlur={event => fieldBlurHandler(event,"resumeshortlisting5")}
        >
          <Radio value="yes" style={{ margin: "0 0 0 30px" }}>
            Yes
          </Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
        <RadioGroup
          label={<GradientFont>Type of Test</GradientFont>}
          description=""
          required
          style={{ display: "flex", flexFlow: "row" }}
          spacing="xl"
          {...form.getInputProps('typeoftest5')} onBlur={event => fieldBlurHandler(event,"typeoftest5")}
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
          <Checkbox label="GD" />
          <Checkbox label="Case Study" />
          <Checkbox label="Interview" />
        </Group>
        <NumberInput
          label={<GradientFont>Total Nubmer of Rounds</GradientFont>}
          required
          style={{ display: "flex", flexFlow: "row" }}
          {...form.getInputProps('totalrounds5')} onBlur={event => fieldBlurHandler(event,"totalrounds5")}
        />
        <Group>
          <GradientFont>Total number of offers {<br/>} (range would be sufficient)</GradientFont>
          <Input placeholder="4-5" required {...form.getInputProps('totaloffers5')} onBlur={event => fieldBlurHandler(event,"totaloffers5")}/>
        </Group>
        <Group>
          <GradientFont>Eligibility Criteria (if any)</GradientFont>
          <Input {...form.getInputProps('eligibility5')} onBlur={event => fieldBlurHandler(event,"eligibility5")}/>
        </Group>
      </Group>
    </Center>
  );
};

export default SelectionProcedure;
