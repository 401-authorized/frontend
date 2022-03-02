import { Button, Grid, Group, Paper, Space } from "@mantine/core";
import React from "react";
import WelcomeFont from "../UI/WelcomeFont";
import { InfDemoData } from "./InfDemoData";
import "../../style/infDetail/infDetail.style.css";
import InternshipDuration from "./InternshipDuration";
import InfDetailItemsList from "./InfDetailItemsList";
import EligibleCourses from "./EligibleCourses";
import SelectionProcedure from "./SelectionProcedure";

function InfLayout({ inf }) {
  return (
    <Grid>
      <Grid.Col>
        <Paper
          className="infDetail_shadow"
          style={{
            padding: "30px 50px",
            border: "1px solid #e6e6e6",
          }}
        >
          <WelcomeFont>{inf.nameOfCompany}</WelcomeFont>
        </Paper>
        <Space h="xl" />
        <Paper
          className="infDetail_shadow"
          style={{
            padding: "30px 50px",
            border: "1px solid #e6e6e6",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                flex: 1,
                paddingRight: "20px",
                borderRight: "1px solid #2873ac73",
              }}
            >
              <div style={{ color: "#2873AC", fontSize: "20px" }}>Website</div>
              <a
                style={{ color: "#2873AC", display: "block" }}
                href={inf.website}
              >
                {inf.website}
              </a>
            </div>
            <div
              style={{
                flex: 1,
                paddingLeft: "20px",
                borderLeft: "1px solid #2873ac73",
              }}
            >
              <div style={{ color: "#2873AC", fontSize: "20px" }}>
                Category / Sector
              </div>
              <div style={{ color: "#7493AC" }}>{inf.sector}</div>
            </div>
          </div>
        </Paper>
      </Grid.Col>
      <Grid.Col>
        <Space h="xl" />
        <Paper
          className="infDetail_shadow"
          style={{
            background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
            boxShadow: "17px 17px 37px #d6d6d6, -17px -17px 37px #ffffff",
            padding: "30px 50px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <WelcomeFont
            style={{
              boxShadow: "0px 4px 10px -6px #0000005E inset",
              borderRadius: "16px",
              padding: "8px 16px",
            }}
          >
            Internship Notification
          </WelcomeFont>
          <InternshipDuration duration={InfDemoData.duration} />
          <InfDetailItemsList infDemoData={inf} />
          <EligibleCourses InfDemoData={inf} />
          <SelectionProcedure InfDemoData={inf} />
          <Space h="xl" />
          <Space h="xl" />
          <Group direction="row">
            <Button variant="outline" >Back</Button>
            <Space w="xs" />
            <Button>Print</Button>
          </Group>
        </Paper>
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
      </Grid.Col>
    </Grid>
  );
}

export default InfLayout;
