import { Grid } from "@mantine/core";
import TechLady from "../Assets/SVG/TechLady";
import SignInForm from "./SignInForm";

const SignInLayout = () => {
  return (
    <div style={{ height: "calc(100vh - 80px)", minHeight: "500px" }}>
      <Grid style={{height:"100%", width:"100%"}}>
        <Grid.Col md={6}
          span={12}
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
          }}>
          <SignInForm />
        </Grid.Col>
        <Grid.Col md={6}
          span={12}
          style={{
            height: "100%",
            display: "flex",
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
