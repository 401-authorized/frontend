import { Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { useState } from "react";
import TechLady from "../Assets/SVG/TechLady";
import SignInForm from "./SignInForm";

const SignInLayout = () => {
  const matches = useMediaQuery("(min-width:992px)");
  return (
    <div style={{ height: "calc(100vh - 80px)", minHeight: "500px" }}>
      <Grid style={{height:"100%", width:"100%"}}>
        <Grid.Col md={6}
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}>
          <SignInForm />
        </Grid.Col>
        <Grid.Col md={6}
          hidden={!matches}
          style={{
            height: "30rem",
            display: `${matches} ? flex : none`,
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}>
          <TechLady />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default SignInLayout;
