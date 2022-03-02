import { Grid, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import TechLady from "../Assets/SVG/TechLady";
import SignInForm from "./SignInForm";
import WelcomeFont from "../UI/WelcomeFont";

const SignInLayout = ({ admin }) => {
  const matches = useMediaQuery("(min-width:993px)");
  return (
    <Container style={{ height: "calc(100vh - 80px)", minHeight: "500px" }}>
      <Grid style={{ height: "100%", width: "100%", alignItems: "center" }}>
        <Grid.Col
          md={6}
          span={12}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "column",
            padding: "40px",
          }}
        >
          <WelcomeFont>
            {admin ? "Admin Login" : "Welcome to Career Development Portal"}
          </WelcomeFont>
          <SignInForm admin={admin} />
        </Grid.Col>
        <Grid.Col
          md={6}
          hidden={!matches}
          style={{
            height: "30rem",
            display: `${matches} ? flex : none`,
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <TechLady />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default SignInLayout;
