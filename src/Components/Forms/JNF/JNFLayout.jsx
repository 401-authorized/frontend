import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import JNFStepper from "./JNFStepper";
import JNFForm from "./JNFForm";
import { Grid, LoadingOverlay } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../config/constants";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";

const JNFLayout = () => {
  const mediumScreen = useMediaQuery("(min-width: 769px)");

  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [jnf, setJnf] = useState(null);
  const nextStep = () =>
    setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setLoading(false);
    } else {
      fetchJnf();
    }
  }, []);

  const fetchJnf = () => {
    setLoading(true);
    axios
      .get(`${API_URL}jnf/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setJnf(res.data.jnf);
      })
      .catch((err) => {
        toast.error("oops!! some error occured on our side");
        navigate("/dashboard");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div style={{ height: "100%" }}>
      <LoadingOverlay visible={loading} />
      {!loading && (
        <Grid
          style={{
            justifyContent: "center",
            height: "100%",
          }}
        >
          {mediumScreen ? (
            <Grid.Col sm={3} style={{ alignItems: "center" }}>
              <JNFStepper active={active} setActive={setActive} id={id} />
            </Grid.Col>
          ) : null}
          <Grid.Col span={12} sm={9}>
            <JNFForm
              currentStep={active}
              nextStep={nextStep}
              prevStep={prevStep}
              active={active}
              jnf={jnf}
              id={id}
            />
          </Grid.Col>
        </Grid>
      )}
    </div>
  );
};

export default JNFLayout;
