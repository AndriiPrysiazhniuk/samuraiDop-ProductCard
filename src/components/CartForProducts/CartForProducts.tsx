import React from "react";
import {ProductType} from "../../App";
import classes from "./Cart.module.css";
import {CartItem} from "./CartItem/CartItem";
import {EmptyCart} from "../EmptyCart/EmptyCart";

export const CartForProducts = ({cartItems, setOpened, setCartItems}: {
  cartItems: ProductType[], setOpened: (isOpen: boolean) => void, setCartItems: (cartItems: ProductType[]) => void
}) => {

  const closeCartWindowHandler = () => {
    setOpened(false)
  }

  return (
    <div className={classes.cart}>
      <div className={classes.cartItems}>
        <button onClick={closeCartWindowHandler}>x</button>

        {cartItems.length === 0 ?
          <EmptyCart/> :
          cartItems.map((item) => {
            const removeFromCartList = () => {
              const filteredItems = cartItems.filter(el => el.id !== item.id)
              setCartItems(filteredItems)
              localStorage.setItem('cartItems', JSON.stringify(filteredItems));
            }

            return <div key={item.id}>
              <CartItem
                id={item.id}
                src={item.src}
                title={item.title}
                description={item.description}
                price={item.price}
                removeFromCartList={removeFromCartList}
              />
            </div>
          })
        }

      </div>
    </div>
  );
};