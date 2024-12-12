import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import{ Navigate} from "react-router-dom";

function useAuth() {
    return useContext(AuthContext);
  }
  
  // Protected Route component
  function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const isAuth = isAuthenticated || JSON.parse(localStorage.getItem('isAuthenticated'));
  
    return isAuth ? children : <Navigate to="/login" replace />;
  }
  
export {useAuth}  
export default ProtectedRoute