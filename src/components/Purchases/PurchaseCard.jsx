import React from 'react';
import '../../App.css'

const PurchaseCard = ({ purchase }) => {

    const datePurchase = new Date(purchase.createdAt)

    return (
        <article className='purchase-card'>
            <h4 className='purhase-date'>{datePurchase.toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}</h4>
            <div>
                <ul>
                    {
                        purchase.cart.products.map(prod => (
                            <li className='purchase-details' key={prod.id}>
                                <p>{prod.title}</p>
                                <span>{prod.productsInCart.quantity}</span>
                                <span>{prod.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </article>
    );
};

export default PurchaseCard;