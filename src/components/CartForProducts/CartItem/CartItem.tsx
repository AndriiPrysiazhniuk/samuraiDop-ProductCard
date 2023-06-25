import classes from "../Cart.module.css";
import React, {ChangeEvent, useState} from "react";

type PropsType = {
    id: string
    src: string
    title: string
    description: string
    price: number
    removeFromCartList: () => void
}
export const CartItem = (props: PropsType) => {
    const {id, src, title, description, price, removeFromCartList} = props

    const [quantity, setQuantity] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const increaseValueHandler = () => setQuantity(quantity !== 10 ? quantity + 1 : quantity)
    const decreaseValueHandler = () => setQuantity(quantity > 0 ? quantity - 1 : quantity)
    const removeFromCartListHandler = () => {
        removeFromCartList()
    }

    return (
        <div className={classes.cartItem}>
            <button onClick={removeFromCartListHandler} className={classes.deleteProductButton}>X</button>
            <img className={classes.cartImage} src={src} alt=""/>
            <div className={classes.cartDescription}>
                <div className={classes.cartTitle}>{title}</div>
                <div className={classes.cartDescription}>{description}</div>
                <span>{price * quantity}</span>
                <div>
                    <button disabled={quantity === 1} onClick={decreaseValueHandler}>-</button>
                    <input onChange={changeInputValue} className={classes.quantityValue} value={quantity} type="text"/>
                    <button disabled={quantity === 10} onClick={increaseValueHandler}>+</button>
                </div>
            </div>
        </div>
    )
}


