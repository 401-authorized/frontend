import { TextInput, Button, LoadingOverlay } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { PasswordInput } from "@mantine/core";
import { Card } from "@mantine/core";
import axios from "axios";
import { API_URL } from "../../config/constants";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLocalStorageValue } from "@mantine/hooks";

const SignInForm = () => {
  const [token, setToken] = useLocalStorageValue({
    key: "token",
    defaultValue: null,
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.trim().length > 7,
    },
    errorMessages: {
      email: "Please enter a valid email",
      password: "Password must contain 8 letters",
    },
  });

  const formSubmitHandler = form.onSubmit((values, event) => {
    setLoading(true);
    axios
      .post(`${API_URL}hr/login`, values)
      .then((res) => {
        setToken(res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        const message = err?.response?.data?.message || "Something went wrong";
        toast.error(message, {
          position: "top-right",
          autoClose: 1000,
          closeOnClick: true,
          progress: undefined,
        });
        setLoading(false);
      });
  });

  return (
    <Card shadow="sm" style={{ width: "100%" }}>
      <form onSubmit={formSubmitHandler} style={{ width: "100%" }}>
        <LoadingOverlay visible={loading} />
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

        <Button type="submit" style={{ margin: "10px" }}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default SignInForm;
