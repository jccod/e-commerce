import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import './styles/cartProduct.css'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`

        axios.delete(URL, getConfig())
            .then(res => {
                dispatch(getUserCart())
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <article className='cart-product'>
            <header>
                <h6 className='cart-product__title'>{product.title}</h6>
            </header>
            <button className='delete-btn' onClick={handleDelete}>
                <i className='bx bx-trash' ></i>
            </button>
            <div className='quantity-container'>
                <p className='quantity-control'>-</p>
                <div className='quantity-control'>{product.productsInCart.quantity}</div>
                <p className='quantity-control'>+</p>
            </div>
            
            <div className='total-container'>
                <p>Total: </p>
                <span className='product-price'>$ {product.price * product.productsInCart.quantity}</span>
            </div>
        </article>
    );
};

export default CartProduct;