import { Container, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupStepper from "./SignupStepper";

function SIgnupLayout({ invitationData }) {
  const [stepperActive, setStepperActive] = useState(0);
  const nextStep = () =>
    setStepperActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setStepperActive((current) => (current > 0 ? current - 1 : current));
  const matches = useMediaQuery("(min-width: 1000px)");
  return (
    <Container style={{ height: "100%" }}>
      <Grid style={{ height: "100%", width: "100%" }}>
        <Grid.Col
          md={6}
          span={12}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <div>
            <SignupForm
              nextStep={nextStep}
              prevStep={prevStep}
              stepperPos={stepperActive}
              setStepperPos={setStepperActive}
              invitationData={invitationData}
            />
          </div>
        </Grid.Col>
        <Grid.Col
          span={0}
          hidden={matches}
          md={6}
          style={{
            height: "100%",
            display: `${matches ? "flex" : "none"}`,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SignupStepper active={stepperActive} setActive={setStepperActive} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default SIgnupLayout;
