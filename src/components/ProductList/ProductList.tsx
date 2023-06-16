import React from "react";
import {ProductType} from "../../App";
import {ProductCard} from "../ProductCard/ProductCard";
import classes from "./ProductList.module.css";

type ProductListType = {
    productsList: ProductType[]
    addToCart: (product: ProductType) => void
}
export const ProductList = ({productsList, addToCart}: ProductListType) => {

    const mappedProducts = productsList.map((el) => (

        <ProductCard key={el.id}
            id={el.id}
                     src={el.src}
                     title={el.title}
                     description={el.description}
                     price={el.price}
                     product={el}
                     addToCart={addToCart}/>
    ))
    return (
        <div >
            <h2>Список товаров:</h2>
            <div className={classes.ProductList}>
            {mappedProducts}
            </div>
        </div>
    );
};