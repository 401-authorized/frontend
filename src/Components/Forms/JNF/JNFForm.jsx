import CompanyOverview from "../CompanyOverview";
import JobDetails from "./JobDetails";
import SalaryDetails from "./SalaryDetails";
import SelectionProcedure from "../SelectionProcedure";
import { Button, Group } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import CoursesDiscipline from "../CoursesDiscipline";

const JNFForm = (props) => {
  const form = useForm({
    initialValues: {
      nameOfTheCompany: "",
      website: "",
      sector: "",
      designation: "",
      placeOfPosting: "",
      description: "",
      ctc: "",
      ctcBreakup: "",
      bondDetails: "",
      shortlistFromResumes: "",
      typeOfTest: "",
      totalRounds: "",
      numberOfOffers: "",
      eligibilityCriteria: "",
      otherRounds: [],
      btechStudents: [],
      fiveYrsStudents: [],
      mscStudents: [],
      msctechStudents: [],
      mtechStudents: [],
      phdStudents: [],
      mbaStudents: [],
      skillBasedStudents: [],
    },
  });

  const fieldBlurHandler = (event, name) => {
    form.validateField(name);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(form.values);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {props.currentStep === 0 ? (
        <CompanyOverview form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 1 ? (
        <JobDetails form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 2 ? (
        <SalaryDetails form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 3 ? <CoursesDiscipline form={form} /> : null}
      {props.currentStep === 4 ? (
        <SelectionProcedure form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      <Group position="center" mt="xl">
        <Button variant="default" onClick={props.prevStep}>
          Back
        </Button>
        {props.active < 4 ? (
          <Button onClick={props.nextStep}>Next step</Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </Group>
    </form>
  );
};

export default JNFForm;
