import React from "react";
import { InputWrapper, PasswordInput } from "@mantine/core";

function SignupFormPart2({ form, fieldBlurHandler }) {
  return (
    <>
      <InputWrapper required label="Password">
        <PasswordInput
          {...form.getInputProps("password")}
          description="Password must be larger than 8 charcters"
          onBlur={(event) => fieldBlurHandler(event, "password")}
        />
      </InputWrapper>
      <InputWrapper required label="Confirm Password">
        <PasswordInput
          {...form.getInputProps("confirmPassword")}
          onBlur={(event) => fieldBlurHandler(event, "confirmPassword")}
        />
      </InputWrapper>
    </>
  );
}

export default SignupFormPart2;
