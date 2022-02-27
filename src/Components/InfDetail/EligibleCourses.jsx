import React from "react";
import { Space, Text } from "@mantine/core";
import EligibleCoursesItems from "./EligibleCoursesItems";

function EligibleCourses({ InfDemoData }) {
  const courseItems = [
    { name: "4-Year Btech Programs", value: InfDemoData.btechStudents },
    {
      name: "5-Years Dual Degree/ Integrated M.Tech Programmes",
      value: InfDemoData.fiveYrsStudents,
    },
    { name: "Skill Based Hiring", value: InfDemoData.skillBasedStudents },
    { name: "3-Year M.Sc Tech Programmes", value: InfDemoData.msctechStudents },
    { name: "2-Year M.Tech Programmes", value: InfDemoData.mtechStudents },
    { name: "2-Years MBA Programme", value: InfDemoData.mbaStudents },
    { name: "2-Years M.Sc Programme", value: InfDemoData.mscStudents },
  ];
  return (
    <>
      <Text style={{ fontSize: "23px", fontWeight: "500" }} color="#2873AC">
        Eligible Courses
      </Text>
      <Space h="md" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr",
          gridRowGap: "20px",
          gridColumnGap: "15px",
        }}
      >
        {courseItems.map((course, idx) => {
          return (
            <>
              <EligibleCoursesItems
                key={idx}
                name={course.name}
                value={course.value}
              />
            </>
          );
        })}
      </div>
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
}

export default EligibleCourses;
