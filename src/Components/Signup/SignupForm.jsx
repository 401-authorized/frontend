import React, { useEffect } from "react";
import { Button, Group, Text, Center, Paper } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import SignupFormPart1 from "./SignupFormPart1";
import SignupFormPart2 from "./SignupFormPart2";
import SignupFormPart3 from "./SignupFormPart3";

function SignupForm(props) {
  const formParts = [
    ["name", "email"],
    ["password", "confirmPassword"],
    ["designation", "mobileNumber"],
  ];
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
      designation: (value) => value.length >= 2,
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

  const fieldBlurHandler = (event, name) => {
    form.validateField(name);
  };

  const nextHandler = () => {
    // if (
    //   props.stepperPos === 0 &&
    //   !form.validateField("name") &&
    //   !form.validateField("email")
    // ) {
    //   return;
    // } else if (
    //   props.stepperPos === 1 &&
    //   !form.validateField("password") &&
    //   !form.validateField("confirmPassword")
    // ) {
    //   return;
    // } else if (
    //   props.stepperPos === 2 &&
    //   !form.validateField("designation") &&
    //   !form.validateField("mobileNumber")
    // ) {
    //   return;
    // }
    // props.nextStep();


    // let validated = true;
    // formParts[props.stepperPos].forEach((field) => {
    //   form.validateField(field);
    //   // console.log(form.errors);
    //   if (form.errors.field) {
    //     validated = false;
    //   }
    // });
    // // console.log(validated);
    // if (validated) {
    //   props.nextStep();
    // }
  };
  return (
    <>
      <Center>
        <Text order={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Welcome to <strong>Career Development Portal</strong>
        </Text>
      </Center>
      <Paper padding="lg" shadow="sm">
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
              <Button type="button" onClick={nextHandler}>
                Next step
              </Button>
            ) : (
              <Button
                type="button"
                onClick={(event) => {
                  console.log(event);
                }}
              >
                Submit
              </Button>
            )}
          </Group>
        </form>
      </Paper>
    </>
  );
}

export default SignupForm;
