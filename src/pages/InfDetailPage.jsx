import {
  Anchor,
  Breadcrumbs,
  Button,
  Container,
  LoadingOverlay,
} from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import InfLayout from "../Components/InfDetail/InfLayout";
import LoggedInHeader from "../Components/Layout/HeaderLayout";
import { API_URL } from "../config/constants";
import { useAuth } from "../hooks/useAuth";

function InfDetailPage() {
  const { user } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [inf, setInf] = useState(null);
  useEffect(() => {
    fetchInf();
  }, []);
  const fetchInf = () => {
    setLoading(true);
    console.log(id);
    axios
      .get(`${API_URL}inf/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log(res.data);
        setInf(res.data.inf);
      })
      .catch((err) => {
        toast.error("oops!! some error occured on our side");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <LoggedInHeader />
      <Container
        style={{ marginTop: "60px", minHeight: "100vh", position: "relative" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Breadcrumbs>
            <Anchor component={Link} to="/">
              ~
            </Anchor>
            <Anchor component={Link} to="/dashboard">
              Dashboard
            </Anchor>
            <Anchor>INF</Anchor>
          </Breadcrumbs>
        </div>
        <LoadingOverlay visible={loading} />
        {!loading && inf && <InfLayout inf={inf} />}
      </Container>
    </>
  );
}

export default InfDetailPage;
