import { Center, Group, Text } from "@mantine/core";

const ContentItem = (props) => {
  return (
    <Group direction="column" align="center" style={{ maxWidth: "50%" }}>
      {props.icon}
      <Text>{props.tag}</Text>
      <Text size="xs">{props.description}</Text>
    </Group>
  );
};

export default ContentItem;
