import { Link ,useNavigate} from "react-router-dom";
function Register() {
    const navigate = useNavigate();
const handleSubmit=(e)=>{
  e.preventDefault()
  alert("Registered Successfully")
}
    return (
      <form  onSubmit={handleSubmit}>
      <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
        type="text"
        name="username"
        placeholder="User Name"
        className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-lg text-gray-700 shadow-sm"
      /><br/>
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
          onClick={()=>
            navigate('/login')
          }
         

          className="bg-blue-500 my-2 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
      </form>
    );
  }
  export default Register