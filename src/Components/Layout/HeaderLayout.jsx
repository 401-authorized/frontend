import { Button, Header, Title } from "@mantine/core";
import React from "react";

function HeaderLayout(props) {
  return (
    <Header height={70} padding="md">
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

        <Title order={2} style={{ color: "#2873AC" }}>
          <span style={{ fontFamily: "Montserrat" }}>CDC</span>
          <span style={{ fontFamily: "mono" }}> Portal</span>
        </Title>
        <Button variant="filled" color="#1A609F">
          Visit Site
        </Button>
      </div>
    </Header>
  );
}

export default HeaderLayout;
