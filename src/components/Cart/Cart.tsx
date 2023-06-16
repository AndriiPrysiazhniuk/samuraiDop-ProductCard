import React from "react";
import {ProductType} from "../../App";
import classes from "./Cart.module.css";

export const Cart = ({cartItems}: { cartItems: ProductType[] }) => {
    return (
        <div className={classes.cart}>
            <h3 className={classes.cartTitle}>Корзина</h3>
            <div className={classes.cartItems}>
                {cartItems.map((item) => {
                    return <div key={item.id} className={classes.cartItem}>

                    </div>
                })}
            </div>
        </div>
    );
};