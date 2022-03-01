import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import INFStepper from "./INFStepper";
import INFForm from "./INFForm"
import { Grid } from "@mantine/core";

const INFLayout = () => {
  const mediumScreen = useMediaQuery("(min-width: 769px)");

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
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
          <Grid.Col sm={3} style={{ alignItems: "center" }}>
            <INFStepper active={active} setActive={setActive} />
          </Grid.Col>
        ) : null}
        <Grid.Col span={12} sm={9}>
          <INFForm
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

export default INFLayout;
