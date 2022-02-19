import { InputWrapper, Space, TextInput } from "@mantine/core";
import React from "react";

function SignupFormPart1({ form, fieldBlurHandler }) {
  return (
    <>
      <InputWrapper required label="Name">
        <TextInput
          placeholder="John Doe"
          {...form.getInputProps("name")}
          onBlur={(event) => fieldBlurHandler(event, "name")}
        />
      </InputWrapper>
      <Space h="md" />
      <InputWrapper required label="Email">
        <TextInput
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          onBlur={(event) => fieldBlurHandler(event, "email")}
        />
      </InputWrapper>
    </>
  );
}

export default SignupFormPart1;
