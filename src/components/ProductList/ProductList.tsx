import React from "react";
import {CategoryType, ProductType} from "../../App";
import {ProductCard} from "./ProductCard/ProductCard";
import classes from "./ProductList.module.css";

type ProductListType = {
    productsList: ProductType[]
    addToCart: (product: ProductType) => void

    filterByCategory: (value: CategoryType) => void
}
export const ProductList = ({productsList, addToCart, filterByCategory}: ProductListType) => {


    let mappedProducts = productsList.map((el) => (


        <ProductCard key={el.id}
                     category={el.category}
                     id={el.id}
                     src={el.src}
                     title={el.title}
                     description={el.description}
                     price={el.price}
                     product={el}
                     addToCart={addToCart}/>
    ))
    return (
        <div>
            <h2>Список товаров:</h2>
            <div>
                <div onClick={() => filterByCategory('AllProducts')}>AllProducts</div>
                <div onClick={() => filterByCategory('Electronics')}>Electronics</div>
                <div onClick={() => filterByCategory('Clothing')}>Clothing</div>
                <div onClick={() => filterByCategory('Home Decor')}>Home Decor</div>
            </div>
            <div className={classes.ProductList}>
                {mappedProducts}
            </div>
        </div>
    );
};