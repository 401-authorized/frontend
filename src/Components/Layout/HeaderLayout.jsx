import { Button, Container, Group, Header, Text, Title } from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../Assets/SVG/Logo";
import LinkButton from "./LinkButton";
import NavigationLink from "./NavigationLink";
import SideHeader from "./SideHeader";
import SideNavigation from "./SideNavigation";

const DashboardHeader = (props) => {
  const matches = useMediaQuery("(min-width: 576px)");
  const { auth, adminAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <Header
      height={70}
      padding="lg"
      sx={(theme) => ({
        backgroundColor: theme.colors.blue,
      })}
    >
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        {props.mediaQuery ? props.mediaQuery : null}
        {/* { matches ? <SideNavigation /> : null} */}
        {/* {matches ? null : <SideHeader />} */}
        <Title order={2}>
          <Link to={adminAuth ? "/admin/dashboard" : "/dashboard"}>
            <Logo />
          </Link>
          {/* <span style={{ fontFamily: "Montserrat" }}>CDC</span>
            <sp0an style={{ fontFamily: "mono" }}> Portal</span> */}
        </Title>
        { matches ? <NavigationLink /> : null}
      </Container>
    </Header>
  );
};

export default DashboardHeader;
