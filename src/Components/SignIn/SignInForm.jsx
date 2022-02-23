import { TextInput, Checkbox, Button } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";
import { Card } from "@mantine/core";
import { useState } from "react";

const SignInForm = () => {
  const [agreedTerms, setAgreedTerms] = useState(true);
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
      password: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.trim().length > 7,
    //   termsOfService: (value) => value,
    },
    errorMessages: {
      email: "Please enter a valid email",
      password: "Password must contain 8 letters",
    },
  });

  const checkboxMessageHandler = () => {
    if(form.values.termsOfService){
        setAgreedTerms(true);
     }
  }

  const formSubmitHandler = form.onSubmit((values, event) => {
      if(!form.values.termsOfService){
         setAgreedTerms(false);
         return; 
      }
      setAgreedTerms(true);
      console.log(values);
  });

  return (
    <Card shadow="sm">
      <form onSubmit={formSubmitHandler}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          onBlur={() => form.validateField("email")}
          style={{ padding: "10px" }}
        />

        <PasswordInput
          placeholder="Password"
          label="Password"
          description=""
          required
          {...form.getInputProps("password")}
          onBlur={() => form.validateField("password")}
          style={{ padding: "10px" }}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy to this corporation"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
          onClick = {checkboxMessageHandler}
          style={{ padding: "10px" }}
        />

        {agreedTerms ? "" : <p>Please accept terms and services</p>}

        <Button type="submit" style={{ margin: "10px" }}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default SignInForm;
