import React, {ChangeEvent, KeyboardEvent, useEffect, useLayoutEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ProductList} from "./components/ProductList/ProductList";
import useLocalStorage from "./hooks/useLocalStorage";
import {NavigateOptions, useSearchParams} from "react-router-dom";
import initialDataProducts from "./db/dbProducts";
import {CategoryType} from "./utils/enums";

export type ProductType = {
  id: number;
  src: string;
  title: string;
  description: string;
  price: number;
  category: CategoryType
}



function App() {
  const [products, setProducts] = useState<ProductType[]>(initialDataProducts);
  const [filter, setFilter] = useState<CategoryType>(CategoryType.AllProducts)
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [searchValue, setSearchValue] = useState('')
  const [localStorageValues, setLocalStorageValues] = useLocalStorage('cartItems', cartItems)
  let [searchParams, setSearchParams] = useSearchParams();
  const filteredItems = (value: string) => initialDataProducts.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))

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

  if (filter === CategoryType.AllProducts) {
    copyOfProducts = products
  }
  if (filter === CategoryType.Clothing) {
    copyOfProducts = products.filter(el => el.category === CategoryType.Clothing)
  }
  if (filter === CategoryType.Electronics) {
    copyOfProducts = products.filter(el => el.category === CategoryType.Electronics)
  }
  if (filter === CategoryType['Home-Decor']) {
    copyOfProducts = products.filter(el => el.category === CategoryType['Home-Decor'])
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