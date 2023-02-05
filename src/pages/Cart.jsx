import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../components/Cart/CartProduct';
import { getUserCart } from '../store/slices/cart.slice';
import getConfig from '../utils/getConfig'
import '../App.css'

const Cart = () => {

    const dispatch = useDispatch()

    const cartProducts = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getUserCart())
    }, [])

    const handleCheckout = () => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'

        const data = {
            "street": "Green St. 1456",
            "colony": "Southwest",
            "zipCode": 12345,
            "city": "USA",
            "references": "Some references"
        }

        axios.post(URL, data, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getUserCart())
            })
            .catch(error => console.log(error))

    }

    return (
        <section className='cart-page'>
            <h2 className='cart-title'>Cart</h2>
            <div>
                {
                    cartProducts?.map(product => (
                        <CartProduct
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
            <footer className='cart-footer'>
                <span>Total: </span>
                <p>
                    {
                        cartProducts ?
                            cartProducts.reduce((acc, cv) => {
                                return cv.price * cv.productsInCart.quantity + acc
                            }, 0)
                            :
                            0
                    }
                </p>
            </footer>
            <button className='checkout-btn' onClick={handleCheckout}>Checkout</button>
        </section>
    );
};

export default Cart;