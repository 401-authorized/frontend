import { Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const GradientFont = (props) => {
  const largeScreen = useMediaQuery('(min-width: 577px)');
  return (
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size={largeScreen ? "xl" : "md"}
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      {props.children}
    </Text>
  );
};

export default GradientFont;
