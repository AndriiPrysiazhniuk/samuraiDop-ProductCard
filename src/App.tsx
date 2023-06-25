import React, {ChangeEvent, KeyboardEvent, useEffect, useLayoutEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";
import useLocalStorage from "./hooks/useLocalStorage";
import {NavigateOptions, useSearchParams} from "react-router-dom";

export type CategoryType = 'AllProducts' | 'Electronics' | 'Clothing' | 'Home-Decor'
export type ProductType = {
  id: number;
  src: string;
  title: string;
  description: string;
  price: number;
  category: CategoryType
}

const initialData: ProductType[] = [
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
    category: 'Home-Decor',
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
    category: 'Home-Decor',
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
    category: 'Home-Decor',
  },
  {
    id: 10,
    src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
    title: 'Product 10',
    description: 'This is the description of Product 10',
    price: 9.99,
    category: 'Home-Decor',
  },
  {
    id: 11,
    src: 'https://premier-dental.com.ua/uploads/product_gallery/foto/26372/i_sensor_h1_dte_woodpecker.jpg',
    title: 'Product 11',
    description: 'This is the description of Product 11',
    price: 9.99,
    category: 'Home-Decor',
  },
  {
    id: 12,
    src: 'https://content.rozetka.com.ua/goods/images/big_tile/268099233.jpg',
    title: 'Product 12',
    description: 'This is the description of Product 12',
    price: 9.99,
    category: 'Home-Decor',
  },
]

function App() {
  const [products, setProducts] = useState<ProductType[]>(initialData);
  const [filter, setFilter] = useState<CategoryType>('AllProducts')
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [searchValue, setSearchValue] = useState('')
  const [localStorageValues, setLocalStorageValues] = useLocalStorage('cartItems', cartItems)
  let [searchParams, setSearchParams] = useSearchParams();
  const filteredItems = (value: string) => initialData.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

  const params: NavigateOptions = {}

  const setFilterHandler = (filter: CategoryType) => {
    setFilter(filter)
    setSearchParams((filterParams => {
      filterParams.set('category', filter)
      return filterParams
    }))
  }

  const addToCart = (newProduct: ProductType) => {
    const indexOfProduct = cartItems.findIndex(el => el.id === newProduct.id)
    if (indexOfProduct === -1) {
      setCartItems([...cartItems, newProduct]);
      setLocalStorageValues([...cartItems, newProduct]);
    }
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value)
  }

  const onClickDeleteButtonHandler = () => {
    setSearchParams((filterParams => {
      filterParams.delete('search')
      return filterParams
    }), params)
    setSearchValue('')
    setProducts(filteredItems(''))

  }

  const onEnterDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setProducts(filteredItems(searchValue))
      setSearchParams((filterParams => {
        filterParams.set('search', searchValue.toLowerCase())
        return filterParams
      }), params)
    } else setProducts(products)
  }

  let copyOfProducts: ProductType[] = []

  if (filter === 'AllProducts') {
    copyOfProducts = products
  }
  if (filter === 'Clothing') {
    copyOfProducts = products.filter(el => el.category === 'Clothing')
  }
  if (filter === 'Electronics') {
    copyOfProducts = products.filter(el => el.category === 'Electronics')
  }
  if (filter === 'Home-Decor') {
    copyOfProducts = products.filter(el => el.category === 'Home-Decor')
  }


  useEffect(() => {
    if (localStorageValues) {
      setCartItems(localStorageValues);
    }
    if (searchParams.has('category')) {
      setFilter(searchParams.get('category') as CategoryType)
    }

  }, []);
  useLayoutEffect(() => {
    if (searchParams.has('search')) {
      const searchValueFromParams = searchParams.get('search') || ''
      setSearchValue(searchValueFromParams as string)
      if (filteredItems(searchValueFromParams as string)) {
        setProducts(filteredItems(searchValueFromParams as string))
      }
    }
  }, [])

  return (
    <div className="App">
      <div>
        <Header setCartItems={setCartItems} cartProducts={cartItems}/>
        <input onKeyPress={onEnterDown} value={searchValue} onChange={onChangeInputHandler}
               placeholder={'Search...'}/>
        {searchValue && <button onClick={onClickDeleteButtonHandler}>X</button>}
      </div>
      <ProductList productsList={copyOfProducts} addToCart={addToCart} setFilter={setFilterHandler}/>
    </div>
  );

}

export default App