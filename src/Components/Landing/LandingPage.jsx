import { Grid, Group, Space } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ConfusedMan from "../Assets/SVG/ConfusedMan";
import About from "./About";
import ContentBox from "./ContentBox";

const LandingPage = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Group position="center" align="center">
      <Grid
        align="center"
        justify="center"
        style={{ margin: "20px",maxWidth:"70%"}}
      >
        <Grid.Col span={12} sm={6}>
          <About />
        </Grid.Col>
        <Grid.Col hidden={matches} sm={6} align="center" justify="center">
          <ConfusedMan />
        </Grid.Col>
      </Grid>
      <ContentBox />
    </Group>
  );
};

export default LandingPage;
