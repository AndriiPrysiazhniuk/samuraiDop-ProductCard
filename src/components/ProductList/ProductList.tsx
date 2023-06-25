import React from "react";
import {ProductType} from "../../App";
import {ProductCard} from "./ProductCard/ProductCard";
import classes from "./ProductList.module.css";
import {CategoryType} from "../../utils/enums";


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
        <div onClick={() => setFilter(CategoryType.AllProducts)}>AllProducts</div>
        <div onClick={() => setFilter(CategoryType.Electronics)}>Electronics</div>
        <div onClick={() => setFilter(CategoryType.Clothing)}>Clothing</div>
        <div onClick={() => setFilter(CategoryType['Home-Decor'])}>Home-Decor</div>
      </div>
      <div className={classes.ProductList}>
        {mappedProducts}
      </div>
    </div>
  );
};