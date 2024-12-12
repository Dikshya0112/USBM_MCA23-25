import{ createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

// AuthProvider component to provide authentication state
function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
    const login = () => {
      setIsAuthenticated(true);
      navigate('/dashboard')      
    };
  
    const logout = () => {
      setIsAuthenticated(false);
      navigate('/')
    };
  
    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  


export{AuthProvider , AuthContext}