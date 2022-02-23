import { Menu, Divider, Button } from '@mantine/core';
// import { PinRightIcon, ImageIcon } from '@modulz/radix-icons';

const NotificationMenu = () => {
  return (
    <Menu control={<Button>Account</Button>}>
      <Menu.Label>Application</Menu.Label>
      <Menu.Item >Profile</Menu.Item>
      
      <Divider />

      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item color="red" >Log Out</Menu.Item>
    </Menu>
  );
}

export default NotificationMenu;