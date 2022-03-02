import { Grid, Space, Text } from "@mantine/core";
import React from "react";
import JnfDetailItems from "./JnfDetailItems";

function JnfDetailItemsList({ JnfDemoData }) {
  return (
    <>
      <Grid style={{ width: "100%" }}>
        <Grid.Col xs={6}>
          <JnfDetailItems title="Designation" value={JnfDemoData.designation} />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="Place of posting"
            value={JnfDemoData.placeOfPosting}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="Job Description"
            value={JnfDemoData.description}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="CTC (in LPA)"
            value={JnfDemoData.ctcDetails}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="CTC Breakup"
            value={JnfDemoData.ctcBreakup}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="Bond Details (if any)"
            value={JnfDemoData.bondDetails}
          />
        </Grid.Col>
        {/* <Grid.Col xs={6}>
          <JnfDetailItems
            title="CTC for PPO select"
            value={JnfDemoData.ctcDetails}
          />
        </Grid.Col> */}
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="Total number of rounds"
            value={JnfDemoData.totalRounds}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="Number of Offers"
            value={JnfDemoData.numberOfOffers}
          />
        </Grid.Col>
        <Grid.Col xs={6}>
          <JnfDetailItems
            title="Eligibility Criteria"
            value={
              JnfDemoData.eligibilityCriteria
                ? JnfDemoData.eligibilityCriteria
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

export default JnfDetailItemsList;
