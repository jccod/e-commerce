import React from 'react';

const PurchaseCard = ({ purchase }) => {

    const datePurchase = new Date(purchase.createdAt)

    return (
        <article>
            <h4>{datePurchase.toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}</h4>
            <div>
                <ul>
                    {
                        purchase.cart.products.map(prod => (
                            <li key={prod.id}>
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