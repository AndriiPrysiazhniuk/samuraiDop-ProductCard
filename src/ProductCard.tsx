import React from 'react';
import {log} from "util";

type ProductCardType = {
    id: number
    src: string
    title: string
    description: string
    price: number
    deleteBtn: (id: number) => void
}

export const ProductCard = (props: ProductCardType) => {


    return (
        <div className="products ios apple" id="iphone-x">
            <button onClick={() => props.deleteBtn(props.id)}>delete</button>
            <img className="product-image"
                 src={'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png'}/>
            <p className="product-name">{props.title}</p>
            <p className="product-description">{props.description}</p>
            <div>
                <div>
                    <button>-</button>
                    <input type="text"/>
                    <button>+</button>
                </div>
            </div>
            <p className="product-price">{props.price}</p>
            <button className="add-to-cart" id='test'>ADD TO CART</button>
        </div>
    )
}

