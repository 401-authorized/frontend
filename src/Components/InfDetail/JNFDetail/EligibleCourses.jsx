import React from "react";
import { Space, Text } from "@mantine/core";
import EligibleCoursesItems from "./EligibleCoursesItems";

function EligibleCourses({ JnfDemoData }) {
  const courseItems = [
    { name: "4-Year Btech Programs", value: JnfDemoData.btechStudents },
    {
      name: "5-Years Dual Degree/ Integrated M.Tech Programmes",
      value: JnfDemoData.fiveYrsStudents,
    },
    { name: "Skill Based Hiring", value: JnfDemoData.skillBasedStudents },
    { name: "3-Year M.Sc Tech Programmes", value: JnfDemoData.msctechStudents },
    { name: "2-Year M.Tech Programmes", value: JnfDemoData.mtechStudents },
    { name: "2-Years MBA Programme", value: JnfDemoData.mbaStudents },
    { name: "2-Years M.Sc Programme", value: JnfDemoData.mscStudents },
    { name: "PhD Programme", value: JnfDemoData.phdStudents },
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
