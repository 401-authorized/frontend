import { Text } from "@mantine/core";
import React from "react";

function InfDetailItems({ title, value }) {
  return (
    <>
      <Text color="#2873AC" style={{ fontWeight: "500" }} size="lg">
        {title}
      </Text>
      <Text color="#7493AC" size="md">
        {value ? value : "N/A"}
      </Text>
    </>
  );
}

export default InfDetailItems;
