import { createContext ,useContext ,useState } from "react";
const AuthContext = createContext();

// AuthProvider component to provide authentication state
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('isAuthenticated')) || false
  );

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    console.log("Logged in successfully.");
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    console.log("Logged out successfully.");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
function useAuth() {
  return useContext(AuthContext);
}
export {AuthContext, AuthProvider, useAuth}