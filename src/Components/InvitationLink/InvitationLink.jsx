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

const SignInLink = () => {
  const matches = useMediaQuery("(min-width: 600px)");
  const companyNames = [
    "Google",
    "Microsoft",
    "Oracle",
    "Amazon",
    "ONGC",
    "TATA",
    "CIL",
    "HPCL",
    "Snapdragon",
  ];

  const form = useForm({
    initialValues: {
      email: "",
      name:""
    },

    validationRules: {
      email: (value) => /^(?!.+@(gmail|google|yahoo|outlook|hotmail|msn|rediff|ymail)\..+)(.+@.+\..+)$/.test(value),
    },

    errorMessages:{
      email: "Please Enter bussiness email"
    }
  });

  const linkSendHandler = form.onSubmit((values, event) => console.log(values));

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
            {...form.getInputProps("name")}
            style={{ margin: "10px", width: `${matches ? "40%" : "80%"}` }}
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
            <Button leftIcon={<SendIcon />} type="submit">Send Link</Button>
          </Group>
        </Group>
      </form>
    </Group>
  );
};

export default SignInLink;
