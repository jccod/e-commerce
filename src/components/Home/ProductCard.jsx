import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/productCard.css'

const ProductCard = ({product}) => {
    const navigate = useNavigate ()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <article className='product' onClick={handleClick}>
            <header className='product__header' >
                <img className='product__img' src={product.productImgs[0]} alt="" />
                <img className='product__img' src={product.productImgs[1]} alt="" />
            </header>
            <section className='product__body'>
                <h3 className='product__title'>{product.title}</h3>
                <div className='product__price-container'>
                    <span className='product__price-label'>Price</span>
                    <h4 className='product__price-number'>$ {product.price}</h4>
                </div>
                <button className='product__btn'><i className='bx bxs-cart-add' ></i></button>
            </section>
        </article>
    );
};

export default ProductCard;