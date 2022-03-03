import React, { useEffect, useState } from "react";
import { Accordion, useAccordionState, Space } from "@mantine/core";
import { coursesAvailable } from "./CoursesAvailable";
import WelcomeFont from "../../UI/WelcomeFont";
import CoursesChips from "../CoursesChips";

function CoursesDiscipline({ form }) {
  const [state, handlers] = useAccordionState({ total: 8, initialItem: 0 });
  const [btechStudents, setBtechStudents] = useState(form.values.btechStudents);
  const [fiveYrsStudents, setfiveYrsStudents] = useState(
    form.values.fiveYrsStudents
  );
  const [mscStudents, setMscStudents] = useState(form.values.mscStudents);
  const [msctechStudents, setMsctechStudents] = useState(
    form.values.msctechStudents
  );
  const [mtechStudents, setMtechStudents] = useState(form.values.mtechStudents);
  const [mbaStudents, setMbaStudents] = useState(form.values.mbaStudents);
  const [skillBasedStudents, setSkillBasedStudents] = useState(
    form.values.skillBasedStudents
  );

  console.log("main", btechStudents);

  useEffect(() => {
    // form.setValues((btechStudents) => ([ ...btechStudents ]));
    form.setFieldValue("btechStudents", btechStudents);
  }, [btechStudents]);
  useEffect(() => {
    form.setFieldValue("fiveYrsStudents", fiveYrsStudents);
  }, [fiveYrsStudents]);
  useEffect(() => {
    form.setFieldValue("mscStudents", mscStudents);
  }, [mscStudents]);
  useEffect(() => {
    form.setFieldValue("msctechStudents", msctechStudents);
  }, [msctechStudents]);
  useEffect(() => {
    form.setFieldValue("mtechStudents", mtechStudents);
  }, [mtechStudents]);
  useEffect(() => {
    form.setFieldValue("mbaStudents", mbaStudents);
  }, [mbaStudents]);
  useEffect(() => {
    form.setFieldValue("skillBasedStudents", skillBasedStudents);
  }, [skillBasedStudents]);

  return (
    <>
      <WelcomeFont>Eligible Courses And Disciplines</WelcomeFont>
      <Space h="xl" />
      <Accordion state={state} onChange={handlers.setState} disableIconRotation>
        <Accordion.Item label="4-Year B.Tech Programmes">
          <CoursesChips
            // value={btechStudents}
            // setValue={setBtechStudents}
            {...form.getInputProps("btechStudents")}
            setValue={form.getInputProps("btechStudents").onChange}
            courses={coursesAvailable.btechStudents}
          />
        </Accordion.Item>
        <Accordion.Item label="5-Years Dual Degree/ Integrated M.Tech Programmes">
          <CoursesChips
            value={fiveYrsStudents}
            setValue={setfiveYrsStudents}
            courses={coursesAvailable.fiveYrsStudents}
          />
        </Accordion.Item>
        <Accordion.Item label="Skill Based Hiring">
          <CoursesChips
            value={skillBasedStudents}
            setValue={setSkillBasedStudents}
            courses={coursesAvailable.skillBasedStudents}
          />
        </Accordion.Item>
        <Accordion.Item label="3-Year M.Sc Tech Programmes">
          <CoursesChips
            value={msctechStudents}
            setValue={setMsctechStudents}
            courses={coursesAvailable.msctechStudents}
          />
        </Accordion.Item>
        <Accordion.Item label="2-Year M.Tech Programmes">
          <CoursesChips
            value={mtechStudents}
            setValue={setMtechStudents}
            courses={coursesAvailable.mtechStudents}
          />
        </Accordion.Item>
        <Accordion.Item label="2-Years MBA Programme">
          <CoursesChips
            value={mbaStudents}
            setValue={setMbaStudents}
            courses={coursesAvailable.mbaStudents}
          />
        </Accordion.Item>
        <Accordion.Item label="2-Years M.Sc Programme">
          <CoursesChips
            value={mscStudents}
            setValue={setMscStudents}
            courses={coursesAvailable.mscStudents}
          />
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default CoursesDiscipline;
