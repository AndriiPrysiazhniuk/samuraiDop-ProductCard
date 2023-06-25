import React, {useState} from 'react';
import './ProductsCard.css';
import {ProductType} from "../../../App";

type ProductCardType = {

  product: ProductType
  addToCart: (product: ProductType) => void
};

export const ProductCard = (props: ProductCardType) => {
  const {category, id, src, title, description, price} = props.product;

  const handleAddToCart = () => {
    props.addToCart(props.product)
  };

  return (
    <div className="products" id={`product-${id}`}>
      <img className="product-image" src={src} alt={title}/>
      <div>
        <span>Category: <b>{category}</b></span>
      </div>
      <p className="product-name">{title}</p>
      <p className="product-description">{description}</p>
      <p className="product-price">price - {price}</p>
      <button onClick={handleAddToCart} className="add-to-cart">ADD TO CART</button>
    </div>
  );
};

