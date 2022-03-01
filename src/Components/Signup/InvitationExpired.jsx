import { Button, Container, Grid, Space } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import WelcomeFont from "../UI/WelcomeFont";

function InvitationExpired({ msg }) {
  return (
    <Container style={{ height: "100%" }}>
      <div
        style={{
          height: "100%",
          textAlign: "center",
          paddingTop: "8em",
        }}
      >
        <WelcomeFont>OOPS!!</WelcomeFont>
        <h3 style={{ color: "#797777" }}>{msg}</h3>
        <Space h="xl" />
        <Space h="xl" />
        <Button>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Go Back
          </Link>
        </Button>
      </div>
    </Container>
  );
}

export default InvitationExpired;
