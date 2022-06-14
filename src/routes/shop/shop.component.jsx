import React, { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} />;
      }, [])}
    </div>
  );
}

export default Shop;
