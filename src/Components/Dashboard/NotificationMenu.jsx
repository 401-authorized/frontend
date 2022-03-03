import { Menu, Divider, Button, Avatar, ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { AccountIcon } from "../Assets/SVG/AccountIcon";
// import { PinRightIcon, ImageIcon } from '@modulz/radix-icons';
import { useMediaQuery } from "@mantine/hooks";

const NotificationMenu = () => {
  const matches = useMediaQuery("(min-width: 576px)");
  const { logout } = useAuth();
  const { adminAuth } = useAuth();
  const profileUrl = adminAuth ? "/admin/profile" : "/profile";
  return (
    <Menu
      control={
        <ActionIcon variant="transparent">
          <AccountIcon />
        </ActionIcon>
        
      }
      style={{color:`${matches ? "default" : "black"}`}}
    >
      <Menu.Label>Application</Menu.Label>
      <Menu.Item component={Link} to={profileUrl}>
        Profile
      </Menu.Item>

      <Divider />

      <Menu.Item color="red" onClick={logout}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

export default NotificationMenu;
