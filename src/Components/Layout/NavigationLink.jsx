import React from "react";
import LinkButton from "./LinkButton";
import { Group } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";
import NotificationMenu from "../Dashboard/NotificationMenu";

function NavigationLink() {
  const { auth, adminAuth } = useAuth();
  return (
    <>
      <Group direction="row" position="right" style={{ width: "75%" }}>
        {auth && !adminAuth && <LinkButton address="/jnf" name="Add JNF" />}
        {auth && !adminAuth && <LinkButton address="/inf" name="Add INF" />}
        {adminAuth && (
          <LinkButton address="/admin/invitationlink" name="Invite" />
        )}
      </Group>
      {(auth || adminAuth) && <NotificationMenu />}
    </>
  );
}

export default NavigationLink;
