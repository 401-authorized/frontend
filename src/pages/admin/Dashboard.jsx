import LoggedInHeader from "../../Components/Layout/LoggedInHeader";
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
