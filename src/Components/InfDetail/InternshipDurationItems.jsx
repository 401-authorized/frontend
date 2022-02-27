import { Text } from "@mantine/core";
import React from "react";

function InternshipDurationItems({ duration }) {
  return (
    <>
      <Text component="span">{duration.duration}</Text>
      <Text component="span">{duration.student_type}</Text>
    </>
  );
}

export default InternshipDurationItems;
