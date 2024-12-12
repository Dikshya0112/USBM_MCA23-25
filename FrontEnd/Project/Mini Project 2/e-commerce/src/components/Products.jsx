import ProductGrid from "./productComponents/ProductGrid"
import ShoppingCart from "./productComponents/ShoppingCart";
import { CartProvider } from "./productComponents/CartProvider";
import {Link} from 'react-router-dom'
function Products() {
  return (<>

    <CartProvider>
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
        <main className="flex-grow">
          <ProductGrid />
          <ShoppingCart />
        </main>
        <footer className="bg-orange-300 text-white p-4 text-center">&copy; 2024 E-Commerce</footer>
      </div>
    </CartProvider>
    </>
  );
}
export default Products