import { Menu, Divider, Button, Avatar, ActionIcon } from "@mantine/core";
import { useAuth } from "../../hooks/useAuth";
import { AccountIcon } from "../Assets/SVG/AccountIcon";
// import { PinRightIcon, ImageIcon } from '@modulz/radix-icons';

const NotificationMenu = () => {
  const { logout } = useAuth();
  return (
    <Menu
      control={
        <ActionIcon variant="transparent">
          <AccountIcon />
        </ActionIcon>
      }
    >
      <Menu.Label>Application</Menu.Label>
      <Menu.Item>Profile</Menu.Item>

      <Divider />

      <Menu.Item color="red" onClick={logout}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

export default NotificationMenu;
