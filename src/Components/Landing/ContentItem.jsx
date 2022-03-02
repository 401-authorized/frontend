import { Center, Group, Text } from "@mantine/core";

const ContentItem = (props) => {
  return (
    <Group direction="column" align="center" style={{ maxWidth: "25%" }}>
      {props.icon}
      <Text style={{textAlign:"center"}}>{props.tag}</Text>
      <Text size="xs" style={{textAlign:"center"}}>{props.description}</Text>
    </Group>
  );
};

export default ContentItem;
