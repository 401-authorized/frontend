import { Card, Grid, Space, Text } from "@mantine/core";
import React from "react";

function ProfileItem(props) {
  return (
    <>
      <Card withBorder radius="md">
        <Grid>
          <Grid.Col span={4}>
            <Text size="xl" color="blue">
              {props.tag}
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text size="xl">{props.value}</Text>
          </Grid.Col>
        </Grid>
      </Card>
      <Space h="lg" />
    </>
  );
}

export default ProfileItem;
