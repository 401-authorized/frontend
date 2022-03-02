import React from "react";
import {
  Card,
  Grid,
  Button,
  Group,
  Anchor,
  Tooltip,
  Center,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import GradientFont from "../UI/GradientFont";
import { Link } from "react-router-dom";
import EyeIcon from "../Assets/SVG/EyeIcon";
import EditIcon from "../Assets/SVG/EditIcon";
import DownloadIcon from "../Assets/SVG/DownloadIcon";
import { API_URL } from "../../config/constants";
import axios from "axios";
import fileDownload from "js-file-download";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";

const JobItem = (props) => {
  const { user } = useAuth();
  const largeScreen = useMediaQuery("(min-width: 576px)");
  const link = props.admin ? "/admin" : "";

  const downloadPdf = (id) => {
    const link = `${API_URL}pdf/${props.type}/${id}`;
    props.setLoading(true);

    axios({
      url: link,
      method: "GET",
      responseType: "arraybuffer",
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: "application/pdf",
      },
    })
      .then((res) => {
        props.setLoading(false);
        fileDownload(res.data, `${props.type}-${id}.pdf`);
      })
      .catch((err) => {
        props.setLoading(false);
        toast.error("Error in downloading file");
        console.log(err);
      });
  };
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
            style={{ width: "100%" }}
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
              <Center>
                <Tooltip label="view">
                  <EyeIcon />
                </Tooltip>
              </Center>
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
                <Center>
                  <Tooltip label="edit">
                    <EditIcon />
                  </Tooltip>
                </Center>
              </Anchor>
            )}
            <Anchor component="div" onClick={() => downloadPdf(props.info._id)}>
              <Center>
                <Tooltip label="download">
                  <DownloadIcon />
                </Tooltip>
              </Center>
            </Anchor>
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default JobItem;
