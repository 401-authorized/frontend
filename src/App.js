import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import JNF from "./pages/JNF";
import INF from "./pages/INF";
import InfDetailPage from "./pages/InfDetailPage";
import ProtectedRoute from "./Components/utils/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import Landing from "./pages/Landing";
import Invitation from "./pages/admin/Invitation";
import Profile from "./pages/Profile";
// import ProtectedAdminRoute from "./Components/utils/ProtectedAdminRoute";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminInfDetailPage from "./pages/admin/INFDetail";
import AdminProfile from "./pages/admin/Profile";
import ProtectedAdminRoute from "./Components/utils/ProtectedAdminRoute";
import JnfDetailPage from "./pages/JnfDetailPage";
import AdminJnfDetailPage from "./pages/admin/JNFDetail";
import PageNotFound from "./pages/404-page";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import AdminChangePasswordPage from "./pages/admin/ChangePasswordPage";
// import Landing from "./pages/Landing";

function App() {
  const { tokenChecking } = useAuth();
  return (
    <>
      {!tokenChecking ? (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin/signin" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/JNF" element={<JNF />} />
            <Route path="/JNF/:id" element={<JnfDetailPage />} />
            <Route path="/INF/:id" element={<InfDetailPage />} />
            <Route path="/INF" element={<INF />} />
            <Route path="/admin/invitationlink" element={<Invitation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/changepassword" element={<ChangePasswordPage />} />
          </Route>
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/admin/changepassword" element={<AdminChangePasswordPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/invitation" element={<Invitation />} />
            <Route path="/admin/INF/:id" element={<AdminInfDetailPage />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/JNF/:id" element={<AdminJnfDetailPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      ) : (
        <div> Loading... </div>
      )}
    </>
  );
}

export default App;
