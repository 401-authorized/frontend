import { useLocalStorageValue } from "@mantine/hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_URL } from "../config/constants";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorageValue({
    key: "token",
    defaultValue: null,
  });
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [tokenChecking, setTokenChecking] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkJwtToken();
  }, []);

  const login = (values) => {
    setLoading(true);
    axios
      .post(`${API_URL}hr/login`, values)
      .then((res) => {
        setAuth(true);
        const user_data = res.data.user;
        user_data.token = res.data.token;
        setToken(res.data.token);
        setUser(user_data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        const message = err?.response?.data?.message || "Something went wrong";
        toast.error(message, {
          position: "top-right",
          autoClose: 1000,
          closeOnClick: true,
          progress: undefined,
        });
        setLoading(false);
      });
  };

  const logout = () => {
    setAuth(false);
    setToken(null);
    setUser(null);
    navigate("/");
  };

  const checkJwtToken = () => {
    if (!user && token) {
      axios
        .get(`${API_URL}hr/`, { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setAuth(true);
          let user_data = res.data;
          user_data.token = token;
          setUser(user_data);
          setTokenChecking(false);
        })
        .catch((err) => {
          setAuth(false);
          setUser(null);
          setToken(null);
          setTokenChecking(false);
        });
    } else {
      console.log("No Token Found");
      setLoading(false);
      setTokenChecking(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        user,
        setUser,
        login,
        logout,
        loading,
        tokenChecking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



// const adminLogin = (values) => {
//   setLoading(true);
//   axios
//     .post(`${API_URL}admin/login`, values)
//     .then((res) => {
//       setAuth(true);
//       const user_data = res.data.user;
//       user_data.token = res.data.token;
//       setToken(res.data.token);
//       setUser(user_data);
//       navigate("/dashboard");
//     })
//     .catch((err) => {
//       console.log(err);
//       const message = err?.response?.data?.message || "Something went wrong";
//       toast.error(message, {
//         position: "top-right",
//         autoClose: 1000,
//         closeOnClick: true,
//         progress: undefined,
//       });
//       setLoading(false);
//     });
// };


// const checkJwtToken = () => {
//   if (!user && token) {
//     axios
//       .get(`${API_URL}admin/`, { headers: { Authorization: `Bearer ${token}` } })
//       .then((res) => {
//         setAuth(true);
//         let user_data = res.data;
//         user_data.token = token;
//         setUser(user_data);
//         setTokenChecking(false);
//       })
//       .catch((err) => {
//         setAuth(false);
//         setUser(null);
//         setToken(null);
//         setTokenChecking(false);
//       });
//   } else {
//     console.log("No Token Found");
//     setLoading(false);
//     setTokenChecking(false);
//   }
// };