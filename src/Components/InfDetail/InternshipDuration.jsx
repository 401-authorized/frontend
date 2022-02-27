import { Grid, Space, Text } from "@mantine/core";
import React from "react";
import InternshipDurationItems from "./InternshipDurationItems";

function InternshipDuration({ duration }) {
  const changeDuration = duration.map((d, idx) => {
    let dur = d.split("(");
    let obj = {
      duration: dur[0],
      student_type: dur[1],
      idx,
    };
    return obj;
  });
  return (
    <>
      <Text style={{ fontSize: "23px", fontWeight: "500" }} color="#2873AC">
        Internship Duration
      </Text>
      <Space h="md" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          color: "#2873AC",
          width: "100%",
          padding: "8px",
        }}
      >
        {changeDuration.map((duration) => (
          <InternshipDurationItems duration={duration} key={duration.idx} />
        ))}
      </div>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}

export default InternshipDuration;
