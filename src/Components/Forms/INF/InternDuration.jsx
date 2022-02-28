import { Chips, Chip, Group } from "@mantine/core";
import WelcomeFont from "../../UI/WelcomeFont";

const InternDuration = ({form}) => {
  return (
    <Group direction="column" position="center" align="center">
      <WelcomeFont>Internship Duration</WelcomeFont>
      <Chips variant="filled" multiple spacing="xl">
        <Chip value="JantoJune">Jan-June 2022 (Dual Degree/ Integrated M. Tech courses only (2022 batch))</Chip>
        <Chip value="MaytoJuly">May-July 2022 (Pre-final year students of ALL courses (2023 batch))</Chip>
        <Chip value="JulytoDec">July-Dec 2022 (M. Tech/ MBA – Business Analytics courses only (2023 batch))</Chip>
      </Chips>
    </Group>
  );
};

export default InternDuration;
