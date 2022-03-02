import { Container } from "@mantine/core";
import JNFLayout from "../Components/Forms/JNF/JNFLayout";
import LoggedInHeader from "../Components/Layout/HeaderLayout";

const JNF = () => {
  return (
    <>
      <LoggedInHeader />
      <Container style={{ marginTop: "3%" }}>
        <JNFLayout />
      </Container>
    </>
  );
};

export default JNF;
