import { LoadingOverlay } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import DashboardHeader from "../Components/Layout/HeaderLayout";
import InvitationExpired from "../Components/Signup/InvitationExpired";
import SIgnupLayout from "../Components/Signup/SignupLayout";
import { API_URL } from "../config/constants";

function Signup() {
  const search = useLocation().search;
  const invitationCode = new URLSearchParams(search).get("code");
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(
    "The link has either expired or no longer valid"
  );
  const [invitationData, setInvitationData] = useState({});

  useEffect(() => {
    if (!invitationCode || invitationCode.length === 0) {
      setValid(false);
      setLoading(false);
      setErrMsg("No Invitation Link was provided");
    }
    axios
      .get(`${API_URL}hr/register/${invitationCode}`)
      .then((res) => {
        setInvitationData(res.data);
        setValid(true);
        setLoading(false);
      })
      .catch((err) => {
        setValid(false);
        setLoading(false);
      });
  }, []);
  return (
    <div className="">
      <DashboardHeader />
      <div
        style={{
          height: "calc(100vh - 80px)",
          minHeight: "500px",
          position: "relative",
        }}
      >
        <LoadingOverlay visible={loading} />
        {!loading && !valid && <InvitationExpired msg={errMsg} />}
        {!loading && valid && <SIgnupLayout invitationData={invitationData} />}
      </div>
    </div>
  );
}

export default Signup;
