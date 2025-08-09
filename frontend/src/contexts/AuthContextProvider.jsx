import { useContext, createContext, useState, useEffect } from "react";
import AxiosInstance from "../api/AxiosInstance";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await AxiosInstance.get("users/user-info/");
      setUser(res.data);
      setStatus(true);
    } catch (error) {
      setUser(null);
      setStatus(false);
    }
  };

  const loginUser = async (credentials) => {
    const res = await AxiosInstance.post("users/login/", credentials);
    if (res.status === 200) {
      setUser(res.data.user);
      setStatus(true);
      return true;
    }
    return false;
  };

  const logoutUser = async () => {
    const res = await AxiosInstance.post("users/logout/");
    if (res.status === 200) {
      setUser(null);
      setStatus(false);
      return true;
    }
    return false;
  };

  const registerUser = async ({ email, username, password }) => {
    const res = await AxiosInstance.post("users/register/", {
      email,
      username,
      password,
    });
    if (res.status === 200) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{ status, user, registerUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
