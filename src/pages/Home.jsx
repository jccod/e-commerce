import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/Home/ProductCard';



const Home = () => {

    const products = useSelector(state => state.products)

    return (
        <div>
            <div className='productos-container'>
                {
                    products?.map(product => (
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