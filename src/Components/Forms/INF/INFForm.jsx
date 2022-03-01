import CompanyOverview from "../CompanyOverview";
import SelectionProcedure from "../SelectionProcedure";
import { Button, Group } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import CoursesDiscipline from "./CoursesDiscipline";
import UploadDoc from "../UploadDoc";
import InternDuration from "./InternDuration";
import InternProfile from "./InternProfile";
import StipendDetails from "./StipendDetails";

const INFForm = (props) => {
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
      internshipDuration: [],
      otherRounds: [],
      btechStudents: [],
      fiveYrsStudents: [],
      mscStudents: [],
      msctechStudents: [],
      mtechStudents: [],
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
        <InternDuration form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 2 ? (
        <InternProfile form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 3 ? <StipendDetails form={form} /> : null}
      {props.currentStep === 4 ? <CoursesDiscipline form={form} /> : null}
      {props.currentStep === 5 ? (
        <SelectionProcedure form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 6 ? <UploadDoc /> : null}
      <Group position="center" mt="xl">
        <Button variant="default" onClick={props.prevStep}>
          Back
        </Button>
        {props.active < 6 ? (
          <Button
            type="button"
            onClick={() => {
              console.log(props.active);
              props.nextStep();
            }}
          >
            Next step
          </Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </Group>
    </form>
  );
};

export default INFForm;
