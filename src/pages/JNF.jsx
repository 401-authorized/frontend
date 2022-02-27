import { Container } from "@mantine/core";
import JNFLayout from "../Components/Forms/JNF/JNFLayout";
import LoggedInHeader from "../Components/Layout/LoggedInHeader";

const JNF = () => {
  return (
    <>
      <LoggedInHeader />
      <Container style={{ marginTop: "60px" }}>
        <JNFLayout />
      </Container>
    </>
  );
};

export default JNF;
