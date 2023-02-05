import React from 'react';
import { useDispatch } from 'react-redux';
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice';

const ToOrderProducts = () => {

    const dispatch = useDispatch()

    const handleAscending = () => {
        dispatch(ascendingOrderProducts())
    }

    const handleDescending = () => {
        dispatch(descendingOrderProducts())
    }

    return (
        <div>
            <h4 className='filter-title'>Order by Price</h4>
            <button className='primary-btn' onClick={handleAscending}>Ascending Order</button>
            <button className='primary-btn' onClick={handleDescending}>Descending Order</button>
        </div>
    );
};

export default ToOrderProducts;