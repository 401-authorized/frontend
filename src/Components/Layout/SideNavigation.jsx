import React from "react";
import { useState } from "react";
import { Burger } from "@mantine/core";
import { Drawer, Button, Group } from "@mantine/core";
import NavigationLink from "./NavigationLink";
import LinkButton from "./LinkButton";
import { useAuth } from "../../hooks/useAuth";
import NotificationMenu from "../Dashboard/NotificationMenu";

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
        color="white"
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="md"
      >
        <Group direction="column" position="center" align="center">
          {auth && !adminAuth && <LinkButton address="/jnf" name="Add JNF" />}

          {auth && !adminAuth && <LinkButton address="/inf" name="Add INF" />}

          {adminAuth && (
            <LinkButton address="/admin/invitationlink" name="Invite" />
          )}
          {(auth || adminAuth) && <NotificationMenu />}
        </Group>
      </Drawer>
    </>
  );
}

export default SideNavigation;
