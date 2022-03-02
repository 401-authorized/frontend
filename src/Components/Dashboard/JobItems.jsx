import {
  Tabs,
  Container,
  Pagination,
  Card,
  LoadingOverlay,
  Breadcrumbs,
  Anchor,
} from "@mantine/core";
import GradientFont from "../UI/GradientFont";
import { useMediaQuery } from "@mantine/hooks";
import JobItem from "./JobItem";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/constants";
import { Link, useLocation } from "react-router-dom";
const JobItems = ({ admin }) => {
  const { user } = useAuth();
  const [infs, setInfs] = useState([]);
  const [jnfs, setJnfs] = useState([]);
  const [loadingInfs, setLoadingInfs] = useState(true);
  const [loadingJnfs, setLoadingJnfs] = useState(true);
  const [countInf, setCountInf] = useState(1);
  const [countJnf, setCountJnf] = useState(1);
  const [jnfPage, setJnfPage] = useState(1);
  const [infPage, setInfPage] = useState(1);
  const perPage = 4;
  useEffect(() => {
    if (user) {
      fetchInf();
      fetchJnf();
    }
  }, [user]);

  useEffect(() => {
    fetchInf();
  }, [infPage]);

  useEffect(() => {
    fetchJnf();
  }, [jnfPage]);

  const fetchInf = () => {
    setLoadingInfs(true);
    axios
      .get(`${API_URL}inf?limit=${perPage}&page=${infPage}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setInfs(res.data.infs);
        setCountInf(res.data.count);
        setLoadingInfs(false);
      })
      .catch((err) => {
        setLoadingInfs(false);
      });
  };

  const fetchJnf = () => {
    setLoadingJnfs(true);
    axios
      .get(`${API_URL}jnf?limit=${perPage}&page=${jnfPage}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log(res.data);
        setJnfs(res.data.jnfs);
        setCountJnf(res.data.count);
        setLoadingJnfs(false);
      })
      .catch((err) => {
        setLoadingJnfs(false);
      });
  };
  const fontSwitchSize = useMediaQuery("(min-width: 808px)");
  return (
    <Container size="lg" style={{ minHeight: "500px" }}>
      <div style={{ padding: "16px" }}>
        <Breadcrumbs>
          <Anchor component={Link} to="/">
            ~
          </Anchor>
          <Anchor>Dashboard</Anchor>
        </Breadcrumbs>
      </div>
      <Card
        withBorder
        radius="md"
        shadow="md"
        style={{ height: "100%", minHeight: "500px" }}
      >
        <Tabs grow position="center">
          <Tabs.Tab
            label={
              <GradientFont>
                {fontSwitchSize ? "Job Notification Form (JNF)" : "JNF"}
              </GradientFont>
            }
          >
            <LoadingOverlay visible={loadingJnfs} />
            {!loadingJnfs &&
              jnfs.map((job, idx) => {
                return (
                  <JobItem admin={admin} key={idx} info={job} type="jnf" />
                );
              })}
            {!loadingJnfs && (
              <Pagination
                page={jnfPage}
                total={Math.ceil(countJnf / perPage)}
                onChange={setJnfPage}
                style={{ display: "flex", justifyContent: "center" }}
              />
            )}
          </Tabs.Tab>
          <Tabs.Tab
            label={
              <GradientFont>
                {fontSwitchSize ? "Internship Notification Form (INF)" : "INF"}
              </GradientFont>
            }
          >
            <LoadingOverlay visible={loadingInfs} />
            {!loadingInfs &&
              infs.map((job, idx) => {
                return (
                  <JobItem key={idx} admin={admin} info={job} type="inf" />
                );
              })}
            {!loadingInfs && (
              <Pagination
                page={infPage}
                total={Math.ceil(countInf / perPage)}
                onChange={setInfPage}
                style={{ display: "flex", justifyContent: "center" }}
              />
            )}
          </Tabs.Tab>
        </Tabs>
      </Card>
    </Container>
  );
};

export default JobItems;
