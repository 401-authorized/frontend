import React, { useState } from "react";
import { Button, Group, LoadingOverlay, Paper } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import SignupFormPart1 from "./SignupFormPart1";
import SignupFormPart2 from "./SignupFormPart2";
import SignupFormPart3 from "./SignupFormPart3";
import WelcomeFont from "../UI/WelcomeFont";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/constants";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

function SignupForm(props) {
  const formParts = [
    ["name", "email"],
    ["password", "confirmPassword"],
    ["designation", "mobileNumber"],
  ];

  const [loading, setLoading] = useState(false);
  const { loading: loginLoading, login } = useAuth();
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      designation: "",
      mobileNumber: "",
      termsOfService: false,
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      name: (value) => value.length > 2,
      password: (value) => value.length > 8,
      confirmPassword: (value) => value === form.values.password,
      mobileNumber: (value) =>
        /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value),
    },

    errorMessages: {
      email: "Please enter a valid email",
      name: "Please enter a valid name",
      password: "Please enter a valid password",
      confirmPassword: "Passwords do not match",
      mobileNumber: "Please enter a valid mobile number",
    },
  });

  const nextButtonHandler = () => {
    let valid = true;
    formParts[props.stepperPos].forEach((field) => {
      if (form.errors[field] || form.values[field].length === 0) {
        form.validateField(field);
        valid = false;
      }
    });
    if (valid) props.nextStep();
  };

  const fieldBlurHandler = (event, name) => {
    form.validateField(name);
  };

  const formSubmitHandler = form.onSubmit((values) => {
    setLoading(true);
    const { hash, companyId } = props.invitationData;
    values.hash = hash;
    values.companyId = companyId;
    axios
      .post(`${API_URL}hr/register`, values)
      .then((res) => {
        login(values);
        setLoading(false);
        toast.success("Signup successful redirecting to dashboard", {
          position: "top-right",
          autoClose: 1000,
        });
      })
      .catch((err) => {
        setLoading(false);
        const message =
          err?.response?.data?.message || "opps something went wrong";
        toast.error(message);
      });
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <WelcomeFont>
        Welcome to Career Development Portal
        {/* <span style={{ color: "black !important" }}>Welcome to</span>{" "}
        <strong>Career Development Portal</strong> */}
      </WelcomeFont>
      <Paper
        padding="lg"
        style={{
          width: "80%",
          position: "relative",
        }}
      >
        <LoadingOverlay visible={loading || loginLoading} />
        <form>
          {props.stepperPos === 0 ? (
            <SignupFormPart1 form={form} fieldBlurHandler={fieldBlurHandler} />
          ) : null}

          {props.stepperPos === 1 ? (
            <>
              <SignupFormPart2
                form={form}
                fieldBlurHandler={fieldBlurHandler}
              />
            </>
          ) : null}

          {props.stepperPos >= 2 ? (
            <>
              <SignupFormPart3
                form={form}
                fieldBlurHandler={fieldBlurHandler}
              />
            </>
          ) : null}
          <Group position="center" mt="xl">
            <Button variant="default" onClick={props.prevStep}>
              Back
            </Button>
            {props.stepperPos < 2 ? (
              <Button
                type="button"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 45 }}
                onClick={nextButtonHandler}
              >
                {" "}
                Next step
              </Button>
            ) : (
              <Button
                type="button"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 45 }}
                onClick={formSubmitHandler}
              >
                {" "}
                Submit
              </Button>
            )}
          </Group>
        </form>
      </Paper>
    </div>
  );
}

export default SignupForm;
