import CompanyOverview from "../CompanyOverview";
import JobDetails from "./JobDetails";
import SalaryDetails from "./SalaryDetails";
import SelectionProcedure from "../SelectionProcedure";
import PersonalDetails from "../PersonalDetails";
import { Button, Group } from "@mantine/core";
import { useForm } from "@mantine/hooks";

const JNFForm = (props) => {
  const form = useForm({
    initialValues: {
      name1: "",
      website1: "",
      sector1: "",
      designation2: "",
      pop2: "",
      jobdesc2: "",
      ctc3: "",
      ctcbreakup3: "",
      bonddetails3: "",
      resumeshortlisting5: "",
      typeoftest5: "",
      totalrounds5: "",
      totaloffers5: "",
      eligibility5: "",
      name6: "",
      designation6: "",
      email6: "",
      number6: "",
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
      {/* {props.currentStep === 3 ? <CompanyOverview /> : null} */}
      {props.currentStep === 4 ? (
        <SelectionProcedure form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {props.currentStep === 5 ? (
        <PersonalDetails form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      <Group position="center" mt="xl">
        <Button variant="default" onClick={props.prevStep}>
          Back
        </Button>
        {props.active < 5 ? (
          <Button onClick={props.nextStep}>Next step</Button>
        ) : (
          <Button type="submit">Submit</Button>
        )}
      </Group>
    </form>
  );
};

export default JNFForm;
