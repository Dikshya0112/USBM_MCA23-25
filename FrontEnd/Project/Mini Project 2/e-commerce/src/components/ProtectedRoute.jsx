import { useAuth  } from "./AuthProvider";
import{Navigate ,useNavigate} from 'react-router-dom'
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const isAuth = isAuthenticated || JSON.parse(localStorage.getItem('isAuthenticated'));
  
    return isAuth ? children : <Navigate to="/login" replace />;
  }
export default ProtectedRoute