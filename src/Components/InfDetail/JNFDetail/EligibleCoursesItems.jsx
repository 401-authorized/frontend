import { Grid, Text } from "@mantine/core";
import React from "react";

function EligibleCoursesItems({ name, value }) {
  if (value.length === 0) return null;
  const courses = value.join(", ");
  return (
    <>
      <Text style={{ color: "#2873AC", fontWeight: "500" }} size="lg">
        {name}
      </Text>
      <Text style={{ color: "#2873AC" }}>{courses}</Text>
    </>
  );
}

export default EligibleCoursesItems;
