import React, { createContext, useContext, useState, ReactNode } from "react";
import useHTTPService from "components/utils/http";

// Define the types for the authentication context
interface AuthContextType {
  token: string;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>(localStorage.getItem("token") || "");
  const httpService = useHTTPService();

  // Function to handle login
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const body = { email, password };
      const loginResponse = await httpService.post("auth/signin", body);
      if (loginResponse.token) {
        setToken(loginResponse.token);
        localStorage.setItem("token", loginResponse.token);
        localStorage.setItem("userType", loginResponse.role);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  // Function to handle logout
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  const authContextValue: AuthContextType = {
    token,
    login,
    logout,
  };

  // Use the correct check for context value
  if (authContextValue === undefined) {
    throw new Error("AuthProvider must be used within an AuthProvider");
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};


// Custom hook to access the authentication context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
