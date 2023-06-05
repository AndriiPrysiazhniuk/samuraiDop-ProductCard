import React, {useState} from 'react';
import './App.css';
import {ProductCard} from "./ProductCard";

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'iPhone X',
            description: 'A 5.5" beast of processing power from Apple',
            price: 999
        },
        {
            id: 2,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Samsung S9',
            description: 'The most powerful Android device on the planet',
            price: 789
        },
        {
            id: 3,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876
        },
        {
            id: 4,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799
        },
        {
            id: 5,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'iPhone 8',
            description: 'The little, less-stylish brother of the iPhone X.',
            price: 789
        },
        {
            id: 6,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'LG G7 ThinQ',
            description: 'The latest and most powerful smartphone from LG.',
            price: 789
        },
        {
            id: 7,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876
        },
        {
            id: 8,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Huawei Mate 10 Pro',
            description: 'The most powerful Android device yet from Huawei',
            price: 799
        },
        {
            id: 9,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799
        },
    ])
    const deleteBtn = (id: number) => {
        setProducts(products.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <h1>Hello guys - <b>Welcome to incubator Club</b></h1>
            <div className={'header'}>
                <div className={'logo'}>
                    IncubatorForever
                </div>
                <input type="text"/>
            </div>
            {products.map(el => {
                return (
                    <ProductCard key={el.id}
                                 id={el.id}
                                 src={el.src}
                                 title={el.title}
                                 description={el.description}
                                 price={el.price}
                                 deleteBtn={deleteBtn}/>
                )
            })}
        </div>
    );
}

export default App;