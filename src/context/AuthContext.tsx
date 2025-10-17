import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { clearTokens, getAccessToken } from "../services/tokenServices";
import type { LoginType } from "../constants/types";

export type UserAuthType = {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
};

interface AuthContextProps {
  user: UserAuthType | null;
  isAuthenticated: boolean;
  login: (formData: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Decodes access token and sets user
  const loadUserFromToken = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
      try {
        const userData = JSON.parse(accessToken);
        setUser(userData);
      } catch {
        clearTokens();
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
  };

  console.log(user, "user");

  // Initial load
  useEffect(() => {
    loadUserFromToken();
    setLoading(false);
  }, []);

  // Login function
  const login = async (formData: LoginType) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/users");
      const users = await res.json();

      const foundUser = users.find(
        (user: any) =>
          user.email === formData.email && user.password === formData.password
      );

      // if (!foundUser) {
      //   toast.error("User not found");
      //   return;
      // }

      if (foundUser) {
        const token = btoa(`${formData.email}:${formData.password}`);
        foundUser.token = token;

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(foundUser));

        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    toast.success("Logged out!");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
