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
import Invitation from "./pages/Invitation";
import Profile from "./pages/Profile";
import ProtectedAdminRoute from "./Components/utils/ProtectedAdminRoute";
import AdminLogin from "./pages/admin/login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminInfDetailPage from "./pages/admin/INFDetail";
import AdminProfile from "./pages/admin/Profile";

function App() {
  const { tokenChecking } = useAuth();
  return (
    <>
      {!tokenChecking ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin/signin" element={<AdminLogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/JNF" element={<JNF />} />
            <Route path="/INF/:id" element={<InfDetailPage />} />
            <Route path="/INF" element={<INF />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/invitationlink" element={<Invitation />} />
            <Route path="/admin/INF/:id" element={<AdminInfDetailPage />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Route>
        </Routes>
      ) : (
        <div> Loading... </div>
      )}
    </>
  );
}

export default App;
