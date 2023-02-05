import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import getConfig from '../../utils/getConfig'
import { getUserCart } from '../../store/slices/cart.slice'

const ProductDescription = ({product}) => {

    const dispatch = useDispatch()

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if(counter - 1 > 0) {
            setCounter(counter - 1)
        }
    }


    const handleCart = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

        const data = {
            id: product.id,
            quantity: counter
        }

        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(error => console.log(error))
    }

    return (
        <article>
            <h3 className='prod-description__title'>{product?.title}</h3>
            <p className='prod-description__content'>{product?.description}</p>
            <div className='prod-description__q-container'>
                <section>
                    <span className='prod-description__label'>Price</span>
                    <h4>$ {product?.price}</h4>
                </section>
                <section>
                    <span className='prod-description__label'>Quantity</span>
                    <div className='prod-description__controls-container'>
                        <div className='prod-description__control' onClick={handleMinus}>-</div>
                        <div className='prod-description__number'>{counter}</div>
                        <div className='prod-description__control' onClick={handlePlus}>+</div>
                    </div>
                </section>
            </div>
            <button className='add-cart-btn' onClick={handleCart}>Add to Cart <i className='bx bxs-cart-add' ></i></button>
        </article>
    );
};

export default ProductDescription;