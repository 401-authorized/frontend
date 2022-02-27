import { Group, TextInput } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

const CompanyOverview = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center">
      <WelcomeFont>Company Overview</WelcomeFont>
      <TextInput
        placeholder="Name of the Company"
        label="Name"
        {...form.getInputProps("nameOfTheCompany")}
        onBlur={(event) => fieldBlurHandler(event, "nameOfTheCompany")}
      />
      <TextInput
        placeholder="www.company.com"
        label="Website"
        {...form.getInputProps("website")}
        onBlur={(event) => fieldBlurHandler(event, "website")}
      />
      <TextInput
        placeholder="Web Developer"
        label="Category/Sector"
        {...form.getInputProps("sector")}
        onBlur={(event) => fieldBlurHandler(event, "sector")}
      />
    </Group>
  );
};

export default CompanyOverview;
