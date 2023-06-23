import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './App.css';
import {ProductCard} from "./components/ProductList/ProductCard/ProductCard";
import {Header} from "./components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";
import {v1} from "uuid";

export type CategoryType = 'AllProducts' | 'Electronics' | 'Clothing' | 'Home Decor'
export type ProductType = {
    id: string;
    src: string;
    title: string;
    description: string;
    price: number;
    category: CategoryType
}

function App() {
    const [products, setProducts] = useState<ProductType[]>([
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
            title: 'Product 1',
            description: 'This is the description of Product 1',
            price: 19.99,
            category: 'Electronics',
        },
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big/284275647.jpg',
            title: 'Product 2',
            description: 'This is the description of Product 2',
            price: 29.99,
            category: 'Clothing',
        },
        {
            id: v1(),
            src: 'https://images.zakupka.com/i3/firms/27/10994/10994653/shipovki-begovye-xin-jing-ob-555-2-razmer-34-45-siniy-belyy_f08ac14e9bbb1ec_500x500.webp.jpg',
            title: 'Product 3',
            description: 'This is the description of Product 3',
            price: 9.99,
            category: 'Home Decor',
        },
        {
            id: v1(),
            src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
            title: 'Product 4',
            description: 'This is the description of Product 4',
            price: 19.99,
            category: 'Electronics',
        },
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
            title: 'Product 5',
            description: 'This is the description of Product 5',
            price: 29.99,
            category: 'Clothing',
        },
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
            title: 'Product 6',
            description: 'This is the description of Product 6',
            price: 9.99,
            category: 'Home Decor',
        },
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big/284275647.jpg',
            title: 'Product 7',
            description: 'This is the description of Product 7',
            price: 19.99,
            category: 'Electronics',
        },
        {
            id: v1(),
            src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
            title: 'Product 8',
            description: 'This is the description of Product 8',
            price: 29.99,
            category: 'Clothing',
        },
        {
            id: v1(),
            src: 'https://images.zakupka.com/i3/firms/27/10994/10994653/shipovki-begovye-xin-jing-ob-555-2-razmer-34-45-siniy-belyy_f08ac14e9bbb1ec_500x500.webp.jpg',
            title: 'Product 9',
            description: 'This is the description of Product 9',
            price: 9.99,
            category: 'Home Decor',
        },
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
            title: 'Product 10',
            description: 'This is the description of Product 10',
            price: 9.99,
            category: 'Home Decor',
        },
        {
            id: v1(),
            src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
            title: 'Product 11',
            description: 'This is the description of Product 11',
            price: 9.99,
            category: 'Home Decor',
        },
        {
            id: v1(),
            src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
            title: 'Product 12',
            description: 'This is the description of Product 12',
            price: 9.99,
            category: 'Home Decor',
        },
        // Добавьте больше продуктов по вашему желанию
    ]);
    const [filter, setFilter] = useState<CategoryType>('AllProducts')
    const [cartItems, setCartItems] = useState<ProductType[]>([]);
    const [searchValue, setSearchValue] = useState('')

    const addToCart = (product: ProductType) => {
        let newProduct: ProductType = {
            id: product.id,
            src: product.src,
            price: product.price,
            description: product.description,
            title: product.title,
            category: product.category
        }

        if (cartItems.length === 0) {
            setCartItems([...cartItems, newProduct]);
        }
    };


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value)

    const onClickDeleteButtonHandler = () => setSearchValue('')
    const onEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
        const filteredItems = products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        event.key === 'Enter' ? setProducts(filteredItems) : setProducts(products)
    }

    let test: ProductType[] = []

    if (filter === 'AllProducts') {
        test = products
    }
    if (filter === 'Clothing') {
        test = products.filter(el => el.category === 'Clothing')
    }
    if (filter === 'Electronics') {
        test = products.filter(el => el.category === 'Electronics')
    }
    if (filter === 'Home Decor') {
        test = products.filter(el => el.category === 'Home Decor')
    }


    return (
        <div className="App">
            <div>
                <Header setCartItems={setCartItems} cartProducts={cartItems}/>
                <input onKeyPress={onEnterDown} value={searchValue} onChange={onChangeInputHandler}
                       placeholder={'Search...'}/>
                {searchValue && <button onClick={onClickDeleteButtonHandler}>X</button>}
            </div>
            <ProductList productsList={test} addToCart={addToCart} setFilter={setFilter}/>
        </div>
    );

}

export default App