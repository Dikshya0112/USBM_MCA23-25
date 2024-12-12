import  { createContext, useContext, useReducer } from 'react';

// Create a Context for the Cart
const CartContext = createContext();

// Reducer function to manage cart state
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}

// Cart Provider to wrap the application
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the Cart Context
function useCart() {
  return useContext(CartContext);
}
export { CartProvider, useCart}