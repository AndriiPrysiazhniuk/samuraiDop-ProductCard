import React, {ChangeEvent, useEffect, useState} from 'react';
import './ProductsCard.css';
import {CategoryType, ProductType} from "../../../App";
// import {ProductType} from "../../App";

type ProductCardType = {
    category: CategoryType
    id: string,
    src: string,
    title: string,
    description: string,
    price: number,
    product: ProductType
    addToCart?: (product: ProductType) => void
};

export const ProductCard = (props: ProductCardType) => {
    const {category, id, src, title, description, price, product, addToCart} = props;
    const [inputValue, setInputValue] = useState('')

    const handleAddToCart = () => {
        addToCart?.(product)
    };

    return (
        <div className="products" id={`product-${id}`}>
            <span>{category}</span>
            <img className="product-image" src={src} alt={title}/>
            <p className="product-name">{title}</p>
            <p className="product-description">{description}</p>
            <p className="product-price">price - {price}</p>
            <button onClick={handleAddToCart} className="add-to-cart">ADD TO CART</button>
        </div>
    );
};

