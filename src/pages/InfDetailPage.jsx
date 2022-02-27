import { Container } from "@mantine/core";
import React from "react";
import InfLayout from "../Components/InfDetail/InfLayout";
import LoggedInHeader from "../Components/Layout/LoggedInHeader";

function InfDetailPage() {
  return (
    <>
      <LoggedInHeader />
      <Container style={{ marginTop: "60px" }}>
        <InfLayout />
      </Container>
    </>
  );
}

export default InfDetailPage;
