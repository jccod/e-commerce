import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice';


const FilterByCategory = () => {

    const [categories, setCategories] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/products/categories'
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(error => console.log(error))
    }, [])

    const [cat, setCat] = useState()

    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=2`

        axios.get(URL)
            .then(res => setCat(res.data))
            .catch(error => console.log(error))
    }, [])

    const dispatch = useDispatch()

    const handleAllProducts = () => {
        dispatch(getAllProducts())
    }

    return (
        <section>
            <h4 className='filter-title'>Filter by Category</h4>
            <ul className='categories-container'>
                <li className='category' onClick={handleAllProducts}>All Products</li>
                {
                    categories?.map(category => (
                        <li className='category' onClick={() => dispatch(getProductsByCategory(category.id))} key={category.id}>{category.name}</li>
                    ))
                }
            </ul>
        </section>
    );
};

export default FilterByCategory;