

import {Link} from 'react-router-dom'
import Carousel from './Carousel';
function Home() {
    return (
        <>
        <div className='min-h-screen flex flex-col'>
        <nav className='flex justify-around p-4 bg-orange-200  font-bold text-xl text-white'> 
        <Link to="/products" className="hover:underline mr-4">Products</Link>
          <Link to="/about" className="hover:underline mr-4">About</Link>
          <Link to="/contact" className="hover:underline mr-4">Contact</Link>
         <Link to="/login" className=" hover:underline mr-4">Login</Link>
          <Link to="/signup" className="hover:underline mr-4">SignUp</Link>
        </nav>
        <Carousel/>
      <div className="p-6 max-w-4xl mx-auto h-[84vh]">
        <h1 className="text-2xl font-bold ">Welcome to Our E-Commerce Website</h1>
        <p>Explore our products and enjoy your shopping experience!</p>
      </div>      
      <footer className='bg-orange-300 p-4  text-white text-center'> &copy; 2024 E-commerce</footer>
</div>
      </>
    );
  }
  export default Home