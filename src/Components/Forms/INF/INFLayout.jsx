import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import INFStepper from "./INFStepper";
import INFForm from "./INFForm";
import { Grid, LoadingOverlay } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";
import { API_URL } from "../../../config/constants";
import { toast } from "react-toastify";

const INFLayout = () => {
  const mediumScreen = useMediaQuery("(min-width: 769px)");

  const search = useLocation().search;
  const params = new URLSearchParams(search);
  const id = params.get("id");
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [inf, setInf] = useState(null);

  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 6 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    if (!id) {
      setLoading(false);
    } else {
      fetchInf();
    }
  }, []);
  const fetchInf = () => {
    setLoading(true);
    axios
      .get(`${API_URL}inf/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setInf(res.data.inf);
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
              <INFStepper active={active} setActive={setActive} />
            </Grid.Col>
          ) : null}
          <Grid.Col span={12} sm={9}>
            <INFForm
              currentStep={active}
              nextStep={nextStep}
              prevStep={prevStep}
              active={active}
              inf={inf}
              id={id}
            />
          </Grid.Col>
        </Grid>
      )}
    </div>
  );
};

export default INFLayout;
