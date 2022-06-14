import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
