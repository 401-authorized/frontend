import ContentItem from "./ContentItem";
import Icon from "../Assets/SVG/Icon";
import { Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const ContentBox = () => {
  const matches = useMediaQuery("(max-width: 576px)");
  return (
    <Group
      direction={matches ? "column" : "row"}
      align="center"
      position="apart"
      style={{
        minWidth: "70%",
        borderRadius: "30px",
        padding: "2rem",
        background: "rgba(0, 242, 255,0.1)",
      }}
    >
      <ContentItem
        icon={<Icon />}
        tag="Accessibility"
        description="Easy access to recruitment processes."
      />
      <ContentItem
        icon={<Icon />}
        tag="Reduced margin of error"
        description="Editable recruitment form for errorless hiring."
      />
      <ContentItem
        icon={<Icon />}
        tag="Ease to use"
        description="Manage all your recruitment processes from one place."
      />
    </Group>
  );
};

export default ContentBox;
