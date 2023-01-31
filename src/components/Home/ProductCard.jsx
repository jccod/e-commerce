import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const navigate = useNavigate ()

    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }

    return (
        <article onClick={handleClick}>
            <header>
                <img src={product.productImgs[0]} alt="" />
            </header>
            <section>
                <h3>{product.title}</h3>
                <div>
                    <span>Price</span>
                    <h4>{product.price}</h4>
                </div>
                <button><i className='bx bxs-cart-add' ></i></button>
            </section>
        </article>
    );
};

export default ProductCard;