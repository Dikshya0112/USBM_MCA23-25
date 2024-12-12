import { useNavigate , Link } from 'react-router-dom';
import { useAuth } from './ProtectedRoute';
function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
login()
  }
    return (
      <form   onSubmit={handleSubmit}>
      <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-3 border my-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-lg text-gray-700 shadow-sm"
      /><br/>
        <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-3 border my-2 rounded focus:outline-none focus:ring-2 max-w-lg focus:ring-blue-500 text-gray-700 shadow-sm"
      /><br/>
         <button
        onClick={() => {
          login();
          navigate('/dashboard'); // Redirect after login
        }} 
      
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="mt-4">
          Don’t have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </p>
      </div>
      </form>
    );
  }
  export default Login