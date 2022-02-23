import React from "react";
import { Card, Grid, Button, Group } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import GradientFont from "../UI/GradientFont";

const JobItem = (props) => {
  const largeScreen = useMediaQuery('(min-width: 600px)');
  return (
    <Card
      withBorder="true"
      shadow="sm"
      padding="xs"
      radius="lg"
      style={{ margin: "20px"}}
    >
      <Grid justify="center" align="center" columns={15}>

        <Grid.Col span={12} xs={4} align="center"> 
        <GradientFont>Designaiton</GradientFont>
          <p>{props.info.designation}</p>
        </Grid.Col>

        <Grid.Col span={12} xs={4} align="center">
        <GradientFont>Place of Posting</GradientFont>
          <p>{props.info.pop}</p>
        </Grid.Col>

        <Grid.Col span={12} xs={4} align="center">
        <GradientFont>CTC</GradientFont>
          <p>{`${props.info.ctc} LPA`}</p>
        </Grid.Col>

        <Grid.Col span={3} xs={4}>
          <Group direction="row" position="left" align="center">
          <Button >View</Button>
          <Button >Edit</Button>
          </Group>
        </Grid.Col>

      </Grid>
    </Card>
  );
};

export default JobItem;
