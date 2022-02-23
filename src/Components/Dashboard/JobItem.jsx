import React from "react";
import { Card, Grid, Button, Group } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import GradientFont from "../UI/GradientFont";

const JobItem = (props) => {
  const largeScreen = useMediaQuery('(min-width: 576px)');
  return (
    <Card
      withBorder="true"
      shadow="sm"
      padding="xs"
      radius="lg"
      style={{ margin: "20px"}}
    >
      <Grid justify="center" align="center" columns={15}>

        <Grid.Col span={15} xs={4} align="center"> 
        <GradientFont>Designaiton</GradientFont>
          <p style={{margin:"5px"}}>{props.info.designation}</p>
        </Grid.Col>

        <Grid.Col span={15} xs={4} align="center">
        <GradientFont>Place of Posting</GradientFont>
          <p style={{margin:"5px"}}>{props.info.pop}</p>
        </Grid.Col>

        <Grid.Col span={15} xs={4} align="center">
        <GradientFont>CTC</GradientFont>
          <p style={{margin:"5px"}}>{`${props.info.ctc} LPA`}</p>
        </Grid.Col>

        <Grid.Col span={15} xs={3} style={{minWidth:"180px"}}>
          <Group grow={`${largeScreen} ? "false" : "true"`} direction="row" position={`${largeScreen} ? left : center`} align="center" >
          <Button >View</Button>
          <Button >Edit</Button>
          </Group>
        </Grid.Col>

      </Grid>
    </Card>
  );
};

export default JobItem;
