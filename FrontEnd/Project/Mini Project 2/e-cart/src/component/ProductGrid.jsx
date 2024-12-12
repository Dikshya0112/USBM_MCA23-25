import { useCart } from "./CartProvider";
const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
    { id: 4, name: 'Product 4', price: 99.99 },
  ];
function ProductGrid() {
    const { dispatch } = useCart();
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
              className="mt-4 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductGrid