import { Group, Text, useMantineTheme, Space } from "@mantine/core";
import { Dropzone, PDF_MIME_TYPE } from "@mantine/dropzone";
import { ImageIcon, UploadIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import WelcomeFont from "../UI/WelcomeFont";

function ImageUploadIcon({ status, ...props }) {
  if (status.accepted) {
    return <UploadIcon {...props} />;
  }

  if (status.rejected) {
    return <CrossCircledIcon {...props} />;
  }

  return <ImageIcon {...props} />;
}

function getIconColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.black;
}

function UploadDoc({ form }) {
  const theme = useMantineTheme();

  const onDrop = (acceptedFiles) => {
    form.setFieldValue("documents", acceptedFiles);
  };

  return (
    <>
      <WelcomeFont>Upload Documents</WelcomeFont>
      <Space h="20px" />
      <Dropzone
        multiple
        onDrop={onDrop}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={PDF_MIME_TYPE}
      >
        {(status) => (
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: "none" }}
          >
            <ImageUploadIcon
              status={status}
              style={{
                width: 80,
                height: 80,
                color: getIconColor(status, theme),
              }}
            />

            <div>
              <Text size="xl" inline>
                Drag pdf here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        )}
      </Dropzone>
    </>
  );
}

export default UploadDoc;
