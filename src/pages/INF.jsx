import { Container } from "@mantine/core";
import INFLayout from "../Components/Forms/INF/INFLayout"
import LoggedInHeader from "../Components/Layout/LoggedInHeader";

const INF = () => {
  return (
    <>
      <LoggedInHeader />
      <Container style={{ marginTop: "3%" }}>
        <INFLayout />
      </Container>
    </>
  );
};

export default INF;
