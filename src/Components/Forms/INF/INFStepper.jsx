import { Stepper } from "@mantine/core";

const INFStepper = (props) => {
  return (
    <Stepper
      active={props.active}
      // onStepClick={props.setActive}
      breakpoint="md"
      orientation="vertical"
      styles={(theme) => ({
        stepDescription: {
          fontWeight: 500,
          fontSize: "16px",
          color: "black",
        },
        stepLabel: {
          fontWeight: "bold",
          letterSpacing: "1px",
          color: "#868e96",
          textTransform: "uppercase",
          fontSize: "12px",
        },
      })}
    >
      <Stepper.Step label="Step 1" description="Company Overview" />
      <Stepper.Step label="Step 2" description="Internship Duration" />
      <Stepper.Step label="Step 3" description="Intern Profile" />
      <Stepper.Step label="Step 4" description="Stipend Details" />
      <Stepper.Step label="Step 5" description="Courses & Discipline" />
      <Stepper.Step label="Step 6" description="Selection Procedure" />
      <Stepper.Step label="Step 7" description="Upload Documents" />
      <Stepper.Completed />
    </Stepper>
  );
};

export default INFStepper;
