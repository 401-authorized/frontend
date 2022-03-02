import { Group } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

const UploadDoc = () => {
  return (
    <Group position="center" align="center" direction="column">
      <WelcomeFont>Upload Documents</WelcomeFont>
      <input type="file" />
    </Group>
  );
};

export default UploadDoc;
