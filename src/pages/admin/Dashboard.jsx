import LoggedInHeader from "../../Components/Layout/HeaderLayout";
import JobItems from "../../Components/Dashboard/JobItems";

const AdminDashboard = () => {
  return (
    <>
      <LoggedInHeader />
      <JobItems admin />
    </>
  );
};

export default AdminDashboard;
