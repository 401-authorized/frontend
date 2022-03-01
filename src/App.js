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
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/JNF" element={<JNF />} />
            <Route path="/INF/:id" element={<InfDetailPage />} />
            <Route path="/INF" element={<INF />} />
            <Route path="/invitationlink" element={<Invitation />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      ) : (
        <div> Loading... </div>
      )}
    </>
  );
}

export default App;
