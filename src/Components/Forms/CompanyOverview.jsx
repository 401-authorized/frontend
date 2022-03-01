import { Group, TextInput } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

const CompanyOverview = ({ form, fieldBlurHandler }) => {
  return (
    <Group direction="column" position="center" align="center">
      <WelcomeFont>Company Overview</WelcomeFont>
      <TextInput
        placeholder="Name of the Company"
        label="Name"
        {...form.getInputProps("nameOfCompany")}
        onBlur={(event) => fieldBlurHandler(event, "nameOfCompany")}
        style={{ width: "80%" }}
      />
      <TextInput
        placeholder="www.company.com"
        label="Website"
        {...form.getInputProps("website")}
        onBlur={(event) => fieldBlurHandler(event, "website")}
        style={{ width: "80%" }}
      />
      <TextInput
        placeholder="Web Developer"
        label="Category/Sector"
        {...form.getInputProps("sector")}
        onBlur={(event) => fieldBlurHandler(event, "sector")}
        style={{ width: "80%" }}
      />
    </Group>
  );
};

export default CompanyOverview;
