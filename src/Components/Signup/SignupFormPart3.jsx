import { Checkbox, InputWrapper, Space, TextInput } from "@mantine/core";
import React from "react";

function SignupFormPart3({ form, fieldBlurHandler }) {
  return (
    <>
      <InputWrapper required label="Designation">
        <TextInput
          placeholder="HR, CEO, Director, etc."
          {...form.getInputProps("designation")}
          onBlur={(event) => fieldBlurHandler(event, "designation")}
        />
      </InputWrapper>
      <Space h="md" />
      <InputWrapper required label="Mobile Number">
        <TextInput
          placeholder="9876543210"
          {...form.getInputProps("mobileNumber")}
          onBlur={(event) => fieldBlurHandler(event, "mobileNumber")}
        />
      </InputWrapper>
      <Checkbox
        mt="md"
        label="I agree to terms and condition"
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
      />
    </>
  );
}

export default SignupFormPart3;
