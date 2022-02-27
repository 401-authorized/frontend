import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import JNFStepper from "./JNFStepper";
import JNFForm from "./JNFForm";
import { Container, Grid } from "@mantine/core";

const JNFLayout = () => {
  const mediumScreen = useMediaQuery("(min-width: 769px)");

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div style={{ height: "100%" }}>
      <Grid
        style={{
          justifyContent: "center",
          height: "100%",
        }}
      >
        {mediumScreen ? (
          <Grid.Col md={3} style={{ alignItems: "center" }}>
            <JNFStepper active={active} setActive={setActive} />
          </Grid.Col>
        ) : null}
        <Grid.Col md={9}>
          <JNFForm
            currentStep={active}
            nextStep={nextStep}
            prevStep={prevStep}
            active={active}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default JNFLayout;
