import WelcomeFont from "../UI/WelcomeFont";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Autocomplete,
  Space,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useMediaQuery } from "@mantine/hooks";
import SendIcon from "../Assets/SVG/SendIcon";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/constants";
import { toast } from "react-toastify";

const SignInLink = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  const { user } = useAuth();
  const [companyNames, setCompanyNames] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldValue("name", name);
    if (name.length > 0) {
      let timer = setTimeout(() => {
        axios
          .get(`${API_URL}company?search=${name}`, {
            headers: { Authorization: `Bearer ${user.token}` },
          })
          .then((res) => {
            setCompanyNames(res.data.map((company) => company.name));
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [name]);

  const form = useForm({
    initialValues: {
      email: "",
      name: "asd",
    },

    validationRules: {
      email: (value) =>
        /^(?!.+@(gmail|google|yahoo|outlook|hotmail|msn)\..+)(.+@.+\..+)$/.test(
          value
        ),
    },

    errorMessages: {
      email: "Please Enter bussiness email",
    },
  });

  const linkSendHandler = form.onSubmit((values, event) => {
    setLoading(true);
    axios
      .post(`${API_URL}invitation`, values, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setLoading(false);
        toast.success("Invitation Link Sent");
        form.reset();
      })
      .catch((err) => {
        setLoading(false);
        toast.error("oops!! some error occured on our side");
        form.reset();
      });
  });

  return (
    <Group
      position="center"
      align="center"
      direction="column"
      style={{ height: "100%" }}
    >
      <Space h="lg" />
      <WelcomeFont>Invitation Link</WelcomeFont>
      <form onSubmit={linkSendHandler} style={{ width: "100%" }}>
        <Group
          position="center"
          align="center"
          direction="column"
          style={{ height: "100%" }}
        >
          <Autocomplete
            required
            label="Name of Company"
            data={companyNames}
            value={name}
            onChange={setName}
            style={{ margin: "10px", width: `${matches ? "40%" : "80%"}` }}
            limit={10}
          />
          <TextInput
            required
            label="Email of HR"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
            style={{ margin: "20px", width: `${matches ? "40%" : "80%"}` }}
          />
          <Group position="center" align="center" direction="row">
            <Space w="lg" />
            <Button leftIcon={<SendIcon />} type="submit">
              Send Link
            </Button>
          </Group>
        </Group>
      </form>
    </Group>
  );
};

export default SignInLink;
