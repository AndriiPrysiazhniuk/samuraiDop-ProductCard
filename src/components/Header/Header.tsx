import React, {useState} from "react";
import { ProductType} from "../../App";
import {ProductList} from "../ProductList/ProductList";
import {Cart} from "../Cart/Cart";
import classes from "./Header.module.css";

type  HeaderType={
    products:ProductType[]
}
export const Header = ({products}:HeaderType) => {
    return (
        <header  className={classes.header}>
            <h1>Мой магазин</h1>
            <Cart cartItems={products}/>


            {/*<ProductList productsList={products} addToCart={addToCart}/>*/}
        </header>
    );
};
