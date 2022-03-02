import { Button, Container, Header, Title } from "@mantine/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../Assets/SVG/Logo";
import NotificationMenu from "../Dashboard/NotificationMenu";

const DashboardHeader = (props) => {
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
          width:"100%"
        }}
      >
        {props.mediaQuery ? props.mediaQuery : null}

        <Title order={2}>
          <Link to={adminAuth ? "/admin/dashboard" : "dashboard"}>
            <Logo />
          </Link>
          {/* <span style={{ fontFamily: "Montserrat" }}>CDC</span>
            <sp0an style={{ fontFamily: "mono" }}> Portal</span> */}
        </Title>
        {!auth && !adminAuth && (
          <Button variant="outline" style={{ color: "white" }}>
            Visit Site
          </Button>
        )}
        {(auth || adminAuth) && <NotificationMenu />}
      </Container>
    </Header>
  );
};

export default DashboardHeader;
