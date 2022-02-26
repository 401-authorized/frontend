import { Group, TextInput } from "@mantine/core";
import WelcomeFont from "../UI/WelcomeFont";

const CompanyOverview = ({ form, fieldBlurHandler }) => {
  return (
      <Group direction="column" position="center" style={{ margin: "30px 0" }}>
        <WelcomeFont>Company Overview</WelcomeFont>
        <TextInput placeholder="Name of the Company" label="Name"  {...form.getInputProps('name1')} onBlur={event => fieldBlurHandler(event,"name1")} />
        <TextInput placeholder="www.company.com" label="Website"  {...form.getInputProps('website1')} onBlur={event => fieldBlurHandler(event,"website1")}/>
        <TextInput
          placeholder="Web Developer"
          label="Category/Sector"
          {...form.getInputProps('sector1')}
          onBlur={event => fieldBlurHandler(event,"sector1")}
        />
      </Group>
  );
};

export default CompanyOverview;
