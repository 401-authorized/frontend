import React from "react";
import {
  Button,
  Card,
  Center,
  Group,
  Space,
  Text,
  PasswordInput,
} from "@mantine/core";
import { useMediaQuery, useForm } from "@mantine/hooks";
import WelcomeFont from "../UI/WelcomeFont";

function ChangePassword() {
  const matches = useMediaQuery("(min-width: 800px)");

  const form = useForm({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPasswordAgain: "",
    },

    validationRules: {},
  });

  const ChangePasswordHandler = form.onSubmit((values, event) => {
    console.log(values);
    if(values.newPassword !== values.newPasswordAgain) {
        return;
    }
  });

  return (
    <Group position="center" align="center" direction="column">
      <Card
        withBorder
        radius="md"
        style={{ minWidth: `${matches ? "60%" : "80%"}`, minheight: "100%" }}
      >
        <Center>
          <WelcomeFont>Change Password</WelcomeFont>
        </Center>
        <form onSubmit={ChangePasswordHandler}>
          <Group direction="column" position="center" align="center">
            <PasswordInput
              label="Enter Old Password"
              required
              {...form.getInputProps("oldPassword")}
              style={{ width: `${matches ? "60%" : "100%"}` }}
            />
            <Space h="xs" />
            <PasswordInput
              label="Enter New Password"
              required
              {...form.getInputProps("newPassword")}
              style={{ width: `${matches ? "60%" : "100%"}` }}
            />
            <Space h="xs" />
            <PasswordInput
              label="Confirm New Password"
              required
              style={{ width: `${matches ? "60%" : "100%"}` }}
              {...form.getInputProps("newPasswordAgain")}
            />
            {matches ? <Space h="xl" /> : null}
            <Group position="center" align="center">
              <Button size={matches ? "md" : "xs"}>Cancel</Button>
              <Space w="xl" />
              <Button type="submit" size={matches ? "md" : "xs"}>
                Change Password
              </Button>
            </Group>
          </Group>
        </form>
        {matches ? <Space h="xl" /> : null}
      </Card>      
    </Group>
  );
}

export default ChangePassword;
