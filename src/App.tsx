import React, {useState} from 'react';
import './App.css';
import {ProductCard} from "./components/ProductCard/ProductCard";
import {Header} from "./components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";

export type ProductType = {
    id: number;
    src: string;
    title: string;
    description: string;
    price: number;
    category: string;
}


function App() {
    const [products, setProducts] = useState<ProductType[]>([
            {
                id: 1,
                src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
                title: 'Product 1',
                description: 'This is the description of Product 1',
                price: 19.99,
                category: 'Electronics',
            },
            {
                id: 2,
                src: 'https://content.rozetka.com.ua/goods/images/big/284275647.jpg',
                title: 'Product 2',
                description: 'This is the description of Product 2',
                price: 29.99,
                category: 'Clothing',
            },
            {
                id: 3,
                src: 'https://images.zakupka.com/i3/firms/27/10994/10994653/shipovki-begovye-xin-jing-ob-555-2-razmer-34-45-siniy-belyy_f08ac14e9bbb1ec_500x500.webp.jpg',
                title: 'Product 3',
                description: 'This is the description of Product 3',
                price: 9.99,
                category: 'Home Decor',
            },
            {
                id: 4,
                src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
                title: 'Product 4',
                description: 'This is the description of Product 4',
                price: 19.99,
                category: 'Electronics',
            },
            {
                id: 5,
                src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
                title: 'Product 5',
                description: 'This is the description of Product 5',
                price: 29.99,
                category: 'Clothing',
            },
            {
                id: 6,
                src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
                title: 'Product 6',
                description: 'This is the description of Product 6',
                price: 9.99,
                category: 'Home Decor',
            },
            {
                id: 7,
                src: 'https://content.rozetka.com.ua/goods/images/big/284275647.jpg',
                title: 'Product 7',
                description: 'This is the description of Product 7',
                price: 19.99,
                category: 'Electronics',
            },
            {
                id: 8,
                src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
                title: 'Product 8',
                description: 'This is the description of Product 8',
                price: 29.99,
                category: 'Clothing',
            },
            {
                id: 9,
                src: 'https://images.zakupka.com/i3/firms/27/10994/10994653/shipovki-begovye-xin-jing-ob-555-2-razmer-34-45-siniy-belyy_f08ac14e9bbb1ec_500x500.webp.jpg',
                title: 'Product 9',
                description: 'This is the description of Product 9',
                price: 9.99,
                category: 'Home Decor',
            },
            {
                id: 10,
                src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
                title: 'Product 10',
                description: 'This is the description of Product 10',
                price: 9.99,
                category: 'Home Decor',
            },
            {
                id: 11,
                src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
                title: 'Product 11',
                description: 'This is the description of Product 11',
                price: 9.99,
                category: 'Home Decor',
            },
            {
                id: 12,
                src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
                title: 'Product 12',
                description: 'This is the description of Product 12',
                price: 9.99,
                category: 'Home Decor',
            },
            // Добавьте больше продуктов по вашему желанию
        ]
    );

    const [sortBy, setSortBy] = useState<string>('price');

    // const addToCart = (productId: number) => {
    //     // Логика добавления продукта в корзину
    // };
    const [cartItems, setCartItems] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        setCartItems([...cartItems, product]);
    };

    const sortProductsByPrice = () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    };





    return (
        <div className="App">
            <div className={'header'}>
                <div className={'logo'}>
                    <Header products={cartItems}/>
                </div>
                <input type="text"/>
                <button onClick={sortProductsByPrice}>Сортировать по цене</button>
            </div>
            <div>
               <ProductList productsList={products} addToCart={addToCart}/>
            </div>
        </div>
    );

}

export default App


// import React, {useState} from 'react';
// import './App.css';
// import {ProductCard} from "./ProductCard";
//
// function App() {
//     const [products, setProducts] = useState([
//             {
//                 id: 1,
//                 src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
//                 title: 'Product 1',
//                 description: 'This is the description of Product 1',
//                 price: 19.99,
//                 category: 'Electronics',
//             },
//             {
//                 id: 2,
//                 src: 'https://content.rozetka.com.ua/goods/images/big/284275647.jpg',
//                 title: 'Product 2',
//                 description: 'This is the description of Product 2',
//                 price: 29.99,
//                 category: 'Clothing',
//             },
//             {
//                 id: 3,
//                 src: 'https://images.zakupka.com/i3/firms/27/10994/10994653/shipovki-begovye-xin-jing-ob-555-2-razmer-34-45-siniy-belyy_f08ac14e9bbb1ec_500x500.webp.jpg',
//                 title: 'Product 3',
//                 description: 'This is the description of Product 3',
//                 price: 9.99,
//                 category: 'Home Decor',
//             },
//             {
//                 id: 4,
//                 src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
//                 title: 'Product 4',
//                 description: 'This is the description of Product 4',
//                 price: 19.99,
//                 category: 'Electronics',
//             },
//             {
//                 id: 5,
//                 src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
//                 title: 'Product 5',
//                 description: 'This is the description of Product 5',
//                 price: 29.99,
//                 category: 'Clothing',
//             },
//             {
//                 id: 6,
//                 src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
//                 title: 'Product 6',
//                 description: 'This is the description of Product 6',
//                 price: 9.99,
//                 category: 'Home Decor',
//             },
//             {
//                 id: 7,
//                 src: 'https://content.rozetka.com.ua/goods/images/big/284275647.jpg',
//                 title: 'Product 7',
//                 description: 'This is the description of Product 7',
//                 price: 19.99,
//                 category: 'Electronics',
//             },
//             {
//                 id: 8,
//                 src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
//                 title: 'Product 8',
//                 description: 'This is the description of Product 8',
//                 price: 29.99,
//                 category: 'Clothing',
//             },
//             {
//                 id: 9,
//                 src: 'https://images.zakupka.com/i3/firms/27/10994/10994653/shipovki-begovye-xin-jing-ob-555-2-razmer-34-45-siniy-belyy_f08ac14e9bbb1ec_500x500.webp.jpg',
//                 title: 'Product 9',
//                 description: 'This is the description of Product 9',
//                 price: 9.99,
//                 category: 'Home Decor',
//             },
//             {
//                 id: 10,
//                 src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
//                 title: 'Product 10',
//                 description: 'This is the description of Product 10',
//                 price: 9.99,
//                 category: 'Home Decor',
//             },
//             {
//                 id: 11,
//                 src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
//                 title: 'Product 11',
//                 description: 'This is the description of Product 11',
//                 price: 9.99,
//                 category: 'Home Decor',
//             },
//             {
//                 id: 12,
//                 src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
//                 title: 'Product 12',
//                 description: 'This is the description of Product 12',
//                 price: 9.99,
//                 category: 'Home Decor',
//             },
//             // Добавьте больше продуктов по вашему желанию
//         ]
//     );
//
//     const [sortBy, setSortBy] = useState('price');
//
//     const addToCart = (productId: number) => {
//         // Логика добавления продукта в корзину
//
//
//     };
//
//     const sortProductsByPrice = () => {
//         const sortedProducts = [...products];
//         sortedProducts.sort((a, b) => a.price - b.price);
//         setProducts(sortedProducts);
//     };
//
//     // import React from 'react';
//
//     // import React, { useState } from 'react';
//
//     const Header = () => {
//         const [cartItems, setCartItems] = useState([]);
//
//         const addToCart = (product) => {
//             setCartItems([...cartItems, product]);
//         };
//
//         return (
//             <header>
//                 <h1>Мой магазин</h1>
//                 <Cart cartItems={cartItems} />
//                 <ProductList addToCart={addToCart} />
//             </header>
//         );
//     };
//
//     const ProductList = ({ addToCart }) => {
//         const products = [
//             { id: 1, name: 'Product 1', price: 10 },
//             { id: 2, name: 'Product 2', price: 20 },
//             { id: 3, name: 'Product 3', price: 30 },
//         ];
//
//         return (
//             <div className="product-list">
//                 <h2>Список товаров</h2>
//                 {products.map((product) => (
//                     <Product key={product.id} product={product} addToCart={addToCart} />
//                 ))}
//             </div>
//         );
//     };
//
//     const Product = ({ product, addToCart }) => {
//         const handleAddToCart = () => {
//             addToCart(product);
//         };
//
//         return (
//             <div className="product">
//                 <h3>{product.name}</h3>
//                 <p>Цена: {product.price}</p>
//                 <button onClick={handleAddToCart}>Добавить в корзину</button>
//             </div>
//         );
//     };
//
//     const Cart = ({ cartItems }) => {
//         return (
//             <div className="cart">
//                 <h3>Корзина</h3>
//                 <ul>
//                     {cartItems.map((item) => (
//                         <li key={item.id}>{item.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     };
//
//     // export default Header;
//
//
//     return (
//         <div className="App">
//             <h1>Hello guys - <b>Welcome to incubator Club</b></h1>
//             <div className={'header'}>
//                 <div className={'logo'}>
//                     <Header/>
//                 </div>
//                 <input type="text"/>
//                 <button onClick={sortProductsByPrice}>sort by price</button>
//             </div>
//             <div className="product-container">
//                 {products.map((product) => (
//                     <ProductCard
//                         key={product.id}
//                         id={product.id}
//                         src={product.src}
//                         title={product.title}
//                         description={product.description}
//                         price={product.price}
//                         addToCart={addToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default App;
//
//
//
