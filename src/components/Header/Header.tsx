import React, {ChangeEvent, useState} from "react";
import {ProductType} from "../../App";
import {CartForProducts} from "../CartForProducts/CartForProducts";
import classes from "./Header.module.css";

type  CartProductsType = {
    cartProducts: ProductType[]
    setCartItems: (cartProducts: ProductType[]) => void
}
export const Header = ({cartProducts, setCartItems}: CartProductsType) => {
    const [isOpen, setOpened] = useState(false)

    const onClickHandler = () => {
        setOpened(!isOpen)
    }
    const closeCartWindow = () => {
        setOpened(!isOpen)
    }

    return (
        <header className={classes.header}>
            <h3 className={classes.cartTitle} onClick={onClickHandler}>Корзина ({cartProducts.length})</h3>

            {
                isOpen ?
                    <CartForProducts setCartItems={setCartItems} setOpened={setOpened} cartItems={cartProducts}/> :
                    !isOpen
            }
        </header>
    );
};
