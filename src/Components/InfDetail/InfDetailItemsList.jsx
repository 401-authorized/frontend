import { Grid, Space, Text } from "@mantine/core";
import React from "react";
import InfDetailItems from "./InfDetailItems";

function InfDetailItemsList({ infDemoData }) {
  return (
    <>
      <Grid style={{ width: "100%" }}>
        <Grid.Col xs={6}>
          <InfDetailItems title="Designation" value={infDemoData.designation} />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Place of posting"
            value={infDemoData.placeOfPosting}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Job Description"
            value={infDemoData.description}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Mode of Internship
            (Virtual/ Physical)"
            value={infDemoData.mode}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Stipend per month"
            value={infDemoData.stipend}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="PPO provision on performance basis"
            value={infDemoData.provisionForPPO}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="CTC for PPO select"
            value={infDemoData.ctcDetails}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Total number of rounds"
            value={infDemoData.totalRounds}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Number of Offers"
            value={infDemoData.numberOfOffers}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <InfDetailItems
            title="Eligibility Criteria"
            value={
              infDemoData.eligibilityCriteria
                ? infDemoData.eligibilityCriteria
                : "N/A"
            }
          />
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}

export default InfDetailItemsList;
