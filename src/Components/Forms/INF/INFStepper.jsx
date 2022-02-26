import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";

const FormStepper = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step>Step 1 content</Stepper.Step>
        <Stepper.Step> Step 2 content</Stepper.Step>
        <Stepper.Step>Step 3 content:</Stepper.Step>
        <Stepper.Step>Step 4 content:</Stepper.Step>
        <Stepper.Step> Step 5 content: </Stepper.Step>
        <Stepper.Step>Step 6 content: </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
};

export default FormStepper;
