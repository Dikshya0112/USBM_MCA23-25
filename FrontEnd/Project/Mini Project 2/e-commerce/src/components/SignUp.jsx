import {Link , useNavigate} from 'react-router-dom'
function SignUp() {
    const navigate = useNavigate();

    return (
    <>
        <div className="min-h-screen flex flex-col">
        <header className="bg-orange-200 text-white p-4 text-center text-xl font-bold">
          <nav className='flex justify-around  text-white'> 
          <Link to="/home" className="hover:underline mr-4">Home</Link>
    <Link to="/products" className="hover:underline mr-4">Products</Link>
      <Link to="/about" className="hover:underline mr-4">About</Link>
      <Link to="/contact" className="hover:underline mr-4">Contact</Link>
     <Link to="/login" className=" hover:underline mr-4">Login</Link>
      <Link to="/signup" className="hover:underline mr-4">SignUp</Link>
    </nav>
        </header>
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <input
        type="text"
        name="username"
        placeholder="User Name"
        className="p-3 border rounded my-2 focus:outline-none focus:ring-2 focus:ring-orange-500 max-w-lg text-orange-700 shadow-sm"
      /><br/>
        <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-3 border rounded  my-2  focus:outline-none focus:ring-2 focus:ring-orange-500 max-w-lg text-orange-700 shadow-sm"
      /><br/>
        <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-3 border rounded  my-2 focus:outline-none focus:ring-2 max-w-lg focus:ring-orange-500 text-orange-700 shadow-sm"
      /><br/>
          <button
          onClick={()=>
            navigate('/login')
          }
          className="bg-orange-300 my-2 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-orange-500 hover:underline">Login</Link>
        </p>
      </div>
      </div>
      <footer className="bg-orange-300 text-white p-4 text-center">&copy; 2024 E-Commerce</footer>

      </>
    );
  }
  export default SignUp