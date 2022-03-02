import CompanyOverview from "../CompanyOverview";
import JobDetails from "./JobDetails";
import SalaryDetails from "./SalaryDetails";
import SelectionProcedure from "../SelectionProcedure";
import { Button, Group } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import CoursesDiscipline from "../CoursesDiscipline";
import UploadDoc from "../UploadDoc";
import axios from "axios";
import { API_URL } from "../../../config/constants";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const JNFForm = ({ currentStep, nextStep, prevStep, active, jnf, id }) => {
  const form = useForm({
    initialValues: {
      nameOfCompany: jnf?.nameOfCompany ? jnf.nameOfCompany : "",
      website: jnf?.website ? jnf.website : "",
      sector: jnf?.sector ? jnf.sector : "",
      designation: jnf?.designation ? jnf.designation : "",
      placeOfPosting: jnf?.placeOfPosting ? jnf.placeOfPosting : "",
      description: jnf?.description ? jnf.description : "",
      ctc: jnf?.ctc ? jnf.ctc : "",
      ctcBreakup: jnf?.ctcBreakup ? jnf.ctcBreakup : "",
      bondDetails: jnf?.bondDetails ? jnf.bondDetails : "",
      shortlistFromResumes: jnf?.shortlistFromResumes
        ? jnf.shortlistFromResumes
        : "",
      typeOfTest: jnf?.typeOfTest ? jnf.typeOfTest : "",
      totalRounds: jnf?.totalRounds ? jnf.totalRounds : "",
      numberOfOffers: jnf?.numberOfOffers ? jnf.numberOfOffers : "",
      eligibilityCriteria: jnf?.eligibilityCriteria
        ? jnf.eligibilityCriteria
        : "",
      otherRounds: jnf?.otherRounds ? jnf.otherRounds : [],
      btechStudents: jnf?.btechStudents ? jnf.btechStudents : [],
      fiveYrsStudents: jnf?.fiveYrsStudents ? jnf.fiveYrsStudents : [],
      mscStudents: jnf?.mscStudents ? jnf.mscStudents : [],
      msctechStudents: jnf?.msctechStudents ? jnf.msctechStudents : [],
      mtechStudents: jnf?.mtechStudents ? jnf.mtechStudents : [],
      phdStudents: jnf?.phdStudents ? jnf.phdStudents : [],
      mbaStudents: jnf?.mbaStudents ? jnf.mbaStudents : [],
      skillBasedStudents: jnf?.skillBasedStudents ? jnf.skillBasedStudents : [],
      graduationYear: jnf?.graduationYear ? jnf.graduationYear : "",
      documents: jnf?.documents ? jnf.documents : [],
    },
  });

  const navigate = useNavigate();

  const fieldBlurHandler = (event, name) => {
    form.validateField(name);
  };

  const { user } = useAuth();

  const formSubmitHandler = form.onSubmit((values, event) => {
    if (id) {
      updateJnf(values);
    } else {
      const newForm = new FormData();
      for (let key in values) {
        console.log(key, values[key]);
        if (key === "documents") {
          values[key].forEach((file) => {
            newForm.append(key, file);
          });
        } else {
          newForm.append(key, values[key]);
        }
      }
      createJnf(newForm);
    }
  });

  const createJnf = (formUpload) => {
    axios({
      url: `${API_URL}jnf`,
      data: formUpload,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("JNF Form Submitted Successfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(
          err.response.data.message || "oops!! some error occured on our side"
        );
        navigate("/dashboard");
      });
  };

  const updateJnf = (values) => {
    axios
      .put(`${API_URL}jnf/${id}`, values, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log(res);
        toast.success("JNF Form Updated Successfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(
          err.response.data.message || "oops!! some error occured on our side"
        );
        navigate("/dashboard");
      });
  };

  return (
    <form>
      {currentStep === 0 ? (
        <CompanyOverview form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {currentStep === 1 ? (
        <JobDetails form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {currentStep === 2 ? (
        <SalaryDetails form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {currentStep === 3 ? <CoursesDiscipline form={form} /> : null}
      {currentStep === 4 ? (
        <SelectionProcedure form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {!id && currentStep === 5 ? <UploadDoc form={form} /> : null}
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {active < (!id ? 5 : 4) ? (
          <Button onClick={nextStep}>Next step</Button>
        ) : (
          <Button onClick={formSubmitHandler} type="button">
            Submit
          </Button>
        )}
      </Group>
    </form>
  );
};

export default JNFForm;
