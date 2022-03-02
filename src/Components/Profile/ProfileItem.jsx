import { Card, Grid, Space, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { match } from "check-types";
import React from "react";

function ProfileItem(props) {
  const matches = useMediaQuery('(min-width: 800px)');
  return (
    <>
      <Card withBorder radius="md">
        <Grid>
          <Grid.Col span={4}>
            <Text size={matches ? "xl" : "sm"} color="blue">
              {props.tag}
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text size={matches ? "xl" : "sm"}>{props.value}</Text>
          </Grid.Col>
        </Grid>
      </Card>
      <Space h="lg" />
    </>
  );
}

export default ProfileItem;
