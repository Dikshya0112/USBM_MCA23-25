import ProductGrid from "./component/ProductGrid";
import ShoppingCart from "./component/ShoppingCart";
import { CartProvider } from "./component/CartProvider";
function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <header className="bg-orange-200 text-white p-4 text-center text-2xl font-bold">E-Commerce</header>
        <main className="flex-grow">
          <ProductGrid />
          <ShoppingCart />
        </main>
        <footer className="bg-orange-300 text-white p-4 text-center">&copy; 2024 E-Commerce</footer>
      </div>
    </CartProvider>
  );
}
export default App