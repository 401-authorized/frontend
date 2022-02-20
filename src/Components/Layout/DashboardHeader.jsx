import { Button, Header, Title } from "@mantine/core";
import React from "react";
import Logo from "../Assets/SVG/Logo";

const DashboardHeader = (props) => {
  return (
    <Header
      height={70}
      padding="lg"
      sx={(theme) => ({
        backgroundColor: theme.colors.blue,
      })}
    >
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {props.mediaQuery ? props.mediaQuery : null}

        <Title order={2}>
          {/* <span style={{ fontFamily: "Montserrat" }}>CDC</span>
            <span style={{ fontFamily: "mono" }}> Portal</span> */}
          <Logo />
        </Title>
        <Button variant="outline" style={{ color: "white" }}>
          Visit Site
        </Button>
      </div>
    </Header>
  );
};

export default DashboardHeader;
