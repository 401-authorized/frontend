import React from "react";
import { Card, Grid, Button, Group, Anchor, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import GradientFont from "../UI/GradientFont";
import { Link } from "react-router-dom";
import EyeIcon from "../Assets/SVG/EyeIcon";
import EditIcon from "../Assets/SVG/EditIcon";

const JobItem = (props) => {
  const largeScreen = useMediaQuery("(min-width: 576px)");
  const link = props.admin ? "/admin" : "";
  return (
    <Card
      withBorder="true"
      shadow="sm"
      padding="xs"
      radius="lg"
      style={{ margin: "20px" }}
    >
      <Grid justify="center" align="center" columns={15}>
        <Grid.Col span={15} xs={4} align="center">
          <GradientFont>Company</GradientFont>
          <p style={{ margin: "5px" }}>{props.info.nameOfCompany}</p>
        </Grid.Col>

        <Grid.Col span={15} xs={4} align="center">
          <GradientFont>Place of Posting</GradientFont>
          <p style={{ margin: "5px" }}>{props.info.placeOfPosting}</p>
        </Grid.Col>

        <Grid.Col span={15} xs={4} align="center">
          <GradientFont>{props.info?.ctc ? "CTC" : "Stipend"}</GradientFont>
          <p style={{ margin: "5px" }}>
            {props.info.ctc ? `${props.info.ctc} LPA` : `${props.info.stipend}`}
          </p>
        </Grid.Col>

        <Grid.Col span={15} xs={3}>
          <Group
            grow={`${largeScreen} ? "false" : "true"`}
            direction="row"
            position={`${largeScreen} ? left : center`}
            align="center"
          >
            <Anchor
              component={Link}
              to={
                props.type === "inf"
                  ? `${link}/inf/${props.info._id}`
                  : `${link}/JNF/${props.info._id}`
              }
            >
              <Tooltip label="view">
                <EyeIcon />
              </Tooltip>
            </Anchor>
            {!props.admin && (
              <Anchor
                component={Link}
                to={
                  props.type === "inf"
                    ? `/inf?id=${props.info._id}`
                    : `/JNF?id=${props.info._id}`
                }
              >
                <Tooltip label="edit">
                  <EditIcon />
                </Tooltip>
              </Anchor>
            )}
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default JobItem;
