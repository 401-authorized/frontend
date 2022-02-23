import { Text } from '@mantine/core';

const GradientFont = (props) => {
  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      {props.children}
    </Text>
  );
};

export default GradientFont;
