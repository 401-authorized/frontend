import CompanyOverview from "../CompanyOverview";
import SelectionProcedure from "../SelectionProcedure";
import { Button, Group } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import CoursesDiscipline from "./CoursesDiscipline";
import UploadDoc from "../UploadDoc";
import InternDuration from "./InternDuration";
import InternProfile from "./InternProfile";
import StipendDetails from "./StipendDetails";
import axios from "axios";
import { API_URL } from "../../../config/constants";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const INFForm = ({ currentStep, nextStep, active, prevStep, inf, id }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      nameOfCompany: inf?.nameOfCompany ? inf.nameOfCompany : "",
      sector: inf?.sector ? inf.sector : "",
      website: inf?.website ? inf.website : "",
      duration: inf?.duration ? inf.duration : [], //added
      description: inf?.description ? inf.description : "",
      designation: inf?.designation ? inf.designation : "",
      mode: inf?.mode ? inf.mode : "", // added
      placeOfPosting: inf?.placeOfPosting ? inf.placeOfPosting : "",
      btechStudents: inf?.btechStudents ? inf.btechStudents : [],
      fiveYrsStudents: inf?.fiveYrsStudents ? inf.fiveYrsStudents : [],
      skillBasedStudents: inf?.skillBasedStudents ? inf.skillBasedStudents : [],
      mscStudents: inf?.mscStudents ? inf.mscStudents : [],
      msctechStudents: inf?.msctechStudents ? inf.msctechStudents : [],
      mtechStudents: inf?.mtechStudents ? inf.mtechStudents : [],
      mbaStudents: inf?.mbaStudents ? inf.mbaStudents : [],
      shortlistFromResumes: inf?.shortlistFromResumes
        ? inf.shortlistFromResumes
        : true,
      eligibilityCriteria: inf?.eligibilityCriteria
        ? inf.eligibilityCriteria
        : "",
      typeOfTest: inf?.typeOfTest ? inf.typeOfTest : "",
      otherRounds: inf?.otherRounds ? inf.otherRounds : [],
      totalRounds: inf?.totalRounds ? inf.totalRounds : "",
      numberOfOffers: inf?.numberOfOffers ? inf.numberOfOffers : "",
      stipend: inf?.stipend ? inf.stipend : "", // added
      provisionForPPO: inf?.provisionForPPO ? inf.provisionForPPO : true, // added
      ctcDetails: inf?.ctcDetails ? inf.ctcDetails : "", // added
      graduationYear: inf?.graduationYear ? inf.graduationYear : "",
      documents: inf?.documents ? inf.documents : [],
    },
  });

  const fieldBlurHandler = (event, name) => {
    form.validateField(name);
  };

  const formSubmitHandler = form.onSubmit((values, event) => {
    if (id) {
      updateInf(values);
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
      console.log(newForm);
      createInf(newForm);
    }
  });

  const createInf = (formUpload) => {
    axios({
      url: `${API_URL}inf`,
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

  const updateInf = (values) => {
    delete values.documents;
    values.documents = undefined;
    axios
      .put(`${API_URL}inf/${id}`, values, {
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
        <InternDuration form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {currentStep === 2 ? (
        <InternProfile form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {currentStep === 3 ? <StipendDetails form={form} /> : null}
      {currentStep === 4 ? <CoursesDiscipline form={form} /> : null}
      {currentStep === 5 ? (
        <SelectionProcedure form={form} fieldBlurHandler={fieldBlurHandler} />
      ) : null}
      {!inf && currentStep === 6 ? <UploadDoc form={form} /> : null}
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        {active < (!inf ? 6 : 5) ? (
          <Button
            type="button"
            onClick={() => {
              console.log(active);
              nextStep();
            }}
          >
            Next step
          </Button>
        ) : (
          <Button onClick={formSubmitHandler} type="button">
            Submit
          </Button>
        )}
      </Group>
    </form>
  );
};

export default INFForm;
