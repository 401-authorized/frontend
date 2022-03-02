import { Space, Text } from "@mantine/core";
import React from "react";
import InternshipDurationItems from "./InternshipDurationItems";

function InternshipDuration({ duration }) {
  const dur = {
    JantoJune: {
      duration: "Jan-June 2022",
      student_type:
        "(Dual Degree/ Integrated M. Tech courses only (2022 batch))",
    },
    MaytoJuly: {
      duration: "May-July 2022",
      student_type: "(Pre-final year students of ALL courses",
    },
    JulytoDec: {
      duration: "July-Dec 2022",
      student_type:
        "(M. Tech/ MBA – Business Analytics courses only (2023 batch))",
    },
  };
  const changeDuration = duration.map((d, idx) => {
    console.log(d);
    return dur[d];
  });
  console.log(changeDuration);
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
        {changeDuration.map((duration, idx) => (
          <InternshipDurationItems duration={duration} key={idx} />
        ))}
      </div>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}

export default InternshipDuration;
