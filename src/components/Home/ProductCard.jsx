import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';
import './styles/productCard.css'

const ProductCard = ({product}) => {
    const navigate = useNavigate ()
    const dispatch = useDispatch()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClic = e => {
        e.stopPropagation()

        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

        const data = {
            id: product.id,
            quantity: 1 
        }

        axios.post(URL, data, getConfig())
            .then(res => {
                //console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(error => console.log(error))
    }

    return (
        <article className='product' onClick={handleClick}>
            <header className='product__header' >
                <img className='product__img' src={product.productImgs[0]} alt="" />
                <img className='product__img' src={product.productImgs[1]} alt="" />
                <button onClick={handleBtnClic} className='product__btn'><i className='bx bxs-cart-add' ></i></button>
            </header>
            <section className='product__body'>
                <h3 className='product__title'>{product.title}</h3>
                <div className='product__price-container'>
                    <span className='product__price-label'>Price</span>
                    <h4 className='product__price-number'>$ {product.price}</h4>
                </div>
    
            </section>
        </article>
    );
};

export default ProductCard;