import React from "react";
import {CategoryType, ProductType} from "../../App";
import {ProductCard} from "./ProductCard/ProductCard";
import classes from "./ProductList.module.css";


type ProductListType = {
  productsList: ProductType[]
  addToCart: (product: ProductType) => void
  setFilter: (value: CategoryType) => void
}
export const ProductList = ({productsList, addToCart, setFilter}: ProductListType) => {

  let mappedProducts = productsList.map((el) => (

    <ProductCard key={el.id}
                 product={el}
                 addToCart={addToCart}/>
  ))
  return (
    <div>
      <h2>Список товаров:</h2>
      <div>
        <div onClick={() => setFilter('AllProducts')}>AllProducts</div>
        <div onClick={() => setFilter('Electronics')}>Electronics</div>
        <div onClick={() => setFilter('Clothing')}>Clothing</div>
        <div onClick={() => setFilter('Home-Decor')}>Home-Decor</div>
      </div>
      <div className={classes.ProductList}>
        {mappedProducts}
      </div>
    </div>
  );
};