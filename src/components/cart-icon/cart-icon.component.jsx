import React, { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, totalItemsInCart } =
    useContext(CartContext);
  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{totalItemsInCart}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
