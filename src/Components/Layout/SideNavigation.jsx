import React from "react";
import { useState } from "react";
import { Burger } from "@mantine/core";
import { Drawer, Button, Group } from "@mantine/core";
import NavigationLink from "./NavigationLink";
import LinkButton from "./LinkButton";
import { useAuth } from "../../hooks/useAuth";

function SideNavigation() {
  const { auth, adminAuth } = useAuth();
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={title}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="md"
      >
        <h1>Hello</h1>
        {auth && !adminAuth && <LinkButton address="/jnf" name="Add JNF" />}
        {auth && !adminAuth && <LinkButton address="/inf" name="Add INF" />}
        {adminAuth && (
          <LinkButton address="/admin/invitationlink" name="Invite" />
        )}
      </Drawer>
    </>
  );
}

export default SideNavigation;
