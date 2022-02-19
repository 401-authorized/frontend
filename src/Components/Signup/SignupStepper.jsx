import { Stepper } from "@mantine/core";
import React from "react";

function SignupStepper(props) {
  return (
    <>
      <Stepper
        active={props.active}
        onStepClick={props.setActive}
        breakpoint="sm"
        orientation="vertical"
        styles={(theme) => ({
          separator: {
            minHeight: "50px",
          },
        })}
      >
        <Stepper.Step
          label="Fist step"
          description="Provide name and email"
          allowStepSelect={props.active > 0}
        ></Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Create a secure password"
          allowStepSelect={props.active > 1}
        ></Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Some additional details"
          allowStepSelect={props.active > 2}
        ></Stepper.Step>
        <Stepper.Completed></Stepper.Completed>
      </Stepper>
    </>
  );
}

export default SignupStepper;
