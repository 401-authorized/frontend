import { Chip, Chips, Space, Text } from "@mantine/core";
import React from "react";

function SelectionProcedure({ JnfDemoData }) {
  let val = ["i"];
  if (JnfDemoData.shortlistFromResumes) val.push("resume");
  val = [...val, ...JnfDemoData.otherRounds];
  return (
    <>
      <Text style={{ fontSize: "23px", fontWeight: "500" }} color="#2873AC">
        Selection Procedure
      </Text>
      <Space h="md" />
      <Chips
        position="center"
        variant="filled"
        multiple
        value={val}
        onChange={() => true}
      >
        <Chip value="resume">Resume Shortlisting</Chip>
        <Chip value="GD">GD & Case Study Round</Chip>
        <Chip value="Aptitude">Technical & Aptitude Test</Chip>
        <Chip value="i">Interview</Chip>
      </Chips>
    </>
  );
}

export default SelectionProcedure;
