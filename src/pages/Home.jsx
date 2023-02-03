import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/Home/ProductCard';



const Home = () => {

    const [productsFilter, setProductsFilter] = useState()

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

    console.log(productsFilter)

    return (
        <div>
            <input onChange={handleChange} type="text" />
            <div className='productos-container'>
                {
                    productsFilter?.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default Home;