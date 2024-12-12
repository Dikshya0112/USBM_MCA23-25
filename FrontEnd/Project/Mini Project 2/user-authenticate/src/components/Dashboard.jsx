import { useAuth } from "./ProtectedRoute";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const { logout } = useAuth();
    const navigate = useNavigate();
  
  
    return (
      <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the Dashboard!</p>
        <button
          onClick={() => {
            logout();
            navigate( "/login"); // Redirect after logout
          }}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    );
  }
  export default Dashboard