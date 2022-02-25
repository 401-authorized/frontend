import { Stepper } from "@mantine/core";

const JNFStepper = (props) => {
  return (
    <>
      <Stepper
        active={props.active}
        onStepClick={props.setActive}
        breakpoint="sm"
        style={{ margin: "40px 20%"}}
      >
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Completed />
      </Stepper>
    </>
  );
};

export default JNFStepper;
