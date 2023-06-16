import React from 'react';
import './ProductsCard.css';
import {ProductType} from "../../App";
// import {ProductType} from "../../App";

type ProductCardType = {
    id: number,
    src: string,
    title: string,
    description: string,
    price: number,
    product: ProductType
    addToCart: (product: ProductType) => void
};

export const ProductCard = (props: ProductCardType) => {
    const {id, src, title, description, price, product, addToCart} = props;

    const handleAddToCart = () => {
        console.log(product)
        addToCart(product);
    };
    return (
        <div className="products" id={`product-${id}`}>
            <img className="product-image" src={src} alt={title}/>
            <p className="product-name">{title}</p>
            <p className="product-description">{description}</p>
            <div>
                <div>
                    <button>-</button>
                    <input type="text"/>
                    <button>+</button>
                </div>
            </div>
            <p className="product-price">{price}</p>
            <button onClick={handleAddToCart} className="add-to-cart">ADD TO CART</button>
        </div>
    );
};


// import React from 'react';
// import './ProductsCard.css'
//
// type ProductCardType = {
//     id: number
//     src: string
//     title: string
//     description: string
//     price: number
// }
//
// export const ProductCard = (props: ProductCardType) => {
//
//
//
//     return (
//         <div className="products ios apple" id="iphone-x">
//             <img className="product-image"
//                  src={props.src}/>
//             <p className="product-name">{props.title}</p>
//             <p className="product-description">{props.description}</p>
//             <div>
//                 <div>
//                     <button>-</button>
//                     <input type="text"/>
//                     <button>+</button>
//                 </div>
//             </div>
//             <p className="product-price">{props.price}</p>
//             <button className="add-to-cart" id='test'>ADD TO CART</button>
//         </div>
//     )
// }
//
