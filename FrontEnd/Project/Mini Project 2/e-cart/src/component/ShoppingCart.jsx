import { useCart } from "./CartProvider";
import { MdDelete } from "react-icons/md";

function ShoppingCart() {
    const { cart, dispatch } = useCart();
  
    return (
      <div className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4"> Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded shadow">
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
               <MdDelete />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
export default ShoppingCart  