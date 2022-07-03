import { createContext, useReducer } from "react";

//cart context
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  totalItemsInCart: 0,
  cartTotal: 0,
});

//cart reducer
export const CART_ACTION_TYPES = {
  IS_CART_OPEN: "IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  totalItemsInCart: 0,
  cartTotal: 0,
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.IS_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`Unhandled action ${type} in cart reducer`);
  }
};

//helper functions
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const foundItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (!foundItem) return;

  if (foundItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== foundItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === foundItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//cart provider
export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, totalItemsInCart, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartReducer = (updatedCartItem) => {
    const newCartCount = updatedCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = updatedCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems: updatedCartItem,
      totalItemsInCart: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload,
    });
  };

  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.IS_CART_OPEN,
    });
  };
  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(updatedCartItems);
  };
  const removeItemToCart = (productToRemove) => {
    const updatedCartItems = removeCartItem(cartItems, productToRemove);
    updateCartReducer(updatedCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const updatedCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartReducer(updatedCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    totalItemsInCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
