import { Link, NavLink } from "react-router-dom";
import { Button, Container, Group, Text, Grid, Header } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import image from "../../Assets/SVG/heritage.jpeg";
import "./LandingPage.css";
import Logo from "./Logo";

const HomePage = (props) => {
  const matches = useMediaQuery("(min-width: 900px)");

  const visitSiteHandler = () => {};
  return (
    <>
      <div
        className="home-section"
        style={{
          position: "fixed",
          background: `url(${image}), rgba(0,0,0,0.5)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          zIndex: "-100",
          // minHeight:"100vh",
          minWidth: "100vh",
        }}
      ></div>
      <Header style={{ background: "rgba(0,0,0,0)", border: "none" }}>
        <Logo />
      </Header>
      <Group
        position="center"
        align="start"
        style={{ textAlign: "center", margin: "4rem 0" }}
      >
        <Grid>
          <Grid.Col>
            <Text
              weight={500}
              color="white"
              style={{ fontSize: `${matches ? "5.3em" : "2.5em"}` }}
            >
              Career Development Portal
            </Text>
            <Text
              weight={200}
              color="white"
              style={{
                fontSize: `${matches ? "2.9em" : "1.4em"}`,
                margin: "0px",
              }}
            >
              INDIAN INSTITUTE OF TECHNOLOGY (ISM) DHANBAD
            </Text>
          </Grid.Col>
          <Grid.Col>
            <Group position="center">
              <NavLink to="/signin">
                <Button
                  size={matches ? "xl" : "sm"}
                  style={{ minWidth: "30vh" }}
                >
                  Sign In
                </Button>
              </NavLink>
              <form method="GET" action="https://cdc.iitism.ac.in/">
                <Button
                  type="submit"
                  size={matches ? "xl" : "sm"}
                  style={{ minWidth: "30vh" }}
                >
                  Visit Site
                </Button>
              </form>
            </Group>
          </Grid.Col>
        </Grid>
      </Group>
    </>
  );
};

export default HomePage;
