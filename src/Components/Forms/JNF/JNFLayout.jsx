import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import JNFStepper from "./JNFStepper";
import JNFForm from "./JNFForm";

const JNFLayout = () => {

  const mediumScreen = useMediaQuery('(min-width: 769px)');

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
     {mediumScreen ? <JNFStepper active={active} setActive={setActive} /> : null}
      <JNFForm currentStep={active} nextStep={nextStep} prevStep={prevStep} active={active} />
    </>
  );
};

export default JNFLayout;
