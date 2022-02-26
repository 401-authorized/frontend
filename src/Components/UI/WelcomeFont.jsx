import { Text } from "@mantine/core";

const WelcomeFont = (props) => {
  return (
    <Text
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        textAlign: "center",
        padding:"10px"
      }}
      inline
      component="span"
      gradient={{ from: "blue", to: "cyan", deg: 45 }}
      fontWeight="black"
      variant="gradient"
    >
      {props.children}
    </Text>
  );
};

export default WelcomeFont;