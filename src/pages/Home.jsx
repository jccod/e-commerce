import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FilterByCategory from '../components/Home/FilterByCategory';
import FilterPrice from '../components/Home/FilterPrice';
import ProductCard from '../components/Home/ProductCard';
import ToOrderProducts from '../components/Home/ToOrderProducts';



const Home = () => {

    const [productsFilter, setProductsFilter] = useState()
    const [inputPrice, setInputPrice] = useState({
        from: 0,
        to: Infinity
    })

    const products = useSelector(state => state.products)

    useEffect(() => {
        if (products) {
            setProductsFilter(products)
        }
    }, [products])

    const handleChange = e => {
        const inputValue = e.target.value.toLowerCase().trim()
        const filter = products?.filter(prod => prod.title.toLowerCase().includes(inputValue))
        setProductsFilter(filter)
    }

    const filterCallBack = prod => +prod.price >= inputPrice.from && +prod.price <= inputPrice.to


    return (
        <div>
            <input onChange={handleChange} type="text" />
            <FilterPrice  setInputPrice={setInputPrice}/>
            <FilterByCategory />
            <ToOrderProducts />
            <div className='productos-container'>
                {
                    productsFilter?.filter(filterCallBack).length !==0 ?
                        productsFilter?.filter(filterCallBack).map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    :
                    <h1>There are no products with this criteria</h1>
                }

            </div>
        </div>
    );
};

export default Home;