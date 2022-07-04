import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import "./category.styles.scss";

function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState(CategoriesContext[category]);
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}

export default Category;

//read params from url
//call context of category
//render prodcut form specfic param
