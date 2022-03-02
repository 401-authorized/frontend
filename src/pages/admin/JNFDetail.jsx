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
import JnfLayout from "../../Components/InfDetail/JNFDetail/JnfLayout";
import LoggedInHeader from "../../Components/Layout/HeaderLayout";
import { API_URL } from "../../config/constants";
import { useAuth } from "../../hooks/useAuth";

function AdminJnfDetailPage() {
  const { user } = useAuth();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [jnf, setJnf] = useState(null);
  useEffect(() => {
    fetchJnf();
  }, []);
  const fetchJnf = () => {
    setLoading(true);
    console.log(id);
    axios
      .get(`${API_URL}jnf/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log(res.data);
        setJnf(res.data.jnf);
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
      <LoggedInHeader admin />
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
            <Anchor component={Link} to="/admin/dashboard">
              Dashboard
            </Anchor>
            <Anchor>JNF</Anchor>
          </Breadcrumbs>
        </div>
        <LoadingOverlay visible={loading} />
        {!loading && jnf && <JnfLayout jnf={jnf} />}
      </Container>
    </>
  );
}

export default AdminJnfDetailPage;
