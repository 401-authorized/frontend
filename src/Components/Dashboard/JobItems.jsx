import { Tabs, Container, Pagination, Card } from "@mantine/core";
import GradientFont from "../UI/GradientFont";
import { useMediaQuery } from '@mantine/hooks';
import JobItem from "./JobItem";

const jobs = [
  { type: "JNF", designation: "SDE", pop: "Banglore", ctc: "50" },
  { type: "JNF", designation: "AEE", pop: "Noida", ctc: "40" },
  { type: "INF", designation: "Manager", pop: "Ranchi", ctc: "70" },
  { type: "INF", designation: "Assistant Manager", pop: "Dubai", ctc: "150" },
  { type: "JNF", designation: "SDE2", pop: "Banglore2", ctc: "502" },
  { type: "JNF", designation: "AEE2", pop: "Noida2", ctc: "402" },
  { type: "INF", designation: "Manager2", pop: "Ranchi2", ctc: "702" },
];

const JobItems = () => {
  const largeScreen = useMediaQuery('(min-width: 576px)');
  const fontSwitchSize = useMediaQuery('(min-width: 808px)');
  return (
    <Container size="lg">
      <Card withBorder radius="md" shadow="md">
        <Tabs grow position="center" style={{ padding: "20px" }}>
          <Tabs.Tab label={<GradientFont>{fontSwitchSize ? "Job Notification Form (JNF)" : "JNF"}</GradientFont>}>
            {jobs.map((job) => {
              if (job.type === "JNF") {
                return <JobItem info={job} />;
              }
            })}
          </Tabs.Tab>
          <Tabs.Tab label={<GradientFont>{fontSwitchSize ? "Internship Notification Form (INF)" : "INF"}</GradientFont>}>
            {jobs.map((job) => {
              if (job.type === "INF") {
                return <JobItem info={job} />;
              }
            })}
          </Tabs.Tab>
        </Tabs>
        <Pagination
          total={10}
          style={{ display: "flex", justifyContent: "center" }}
        />
      </Card>
    </Container>
  );
};

export default JobItems;
