import ContentItem from "./ContentItem";
import Icon from "../Assets/SVG/Icon";
import { Group } from "@mantine/core";

const ContentBox = () => {
  return (
    <Group direction="column" align="center" position="center">
      <ContentItem
        icon={<Icon />}
        tag="Lorem Ipsum"
        description="Lorem ipsum adipiscing elit.adipiscing elit. sit amet, consectetur adipiscing elit."
      />
      <ContentItem
        icon={<Icon />}
        tag="Lorem Ipsum"
        description="Lorem ipsum adipiscing elit.adipiscing elit. sit amet, consectetur adipiscing elit."
      />
      <ContentItem
        icon={<Icon />}
        tag="Lorem Ipsum"
        description="Lorem ipsum adipiscing elit.adipiscing elit. sit amet, consectetur adipiscing elit."
      />
    </Group>
  );
};

export default ContentBox;
