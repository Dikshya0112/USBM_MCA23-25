import {Link} from 'react-router-dom'
function Contact() {
    return (<>
  
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
          <div className="p-6 max-w-4xl mx-auto h-[84vh] ">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p>Feel free to reach out to us with your queries and feedback.</p>
    </div>
          <footer className="bg-orange-300 text-white p-4 text-center">&copy; 2024 E-Commerce</footer>
        </div>

      </>
    );
  }
  export default Contact