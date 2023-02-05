import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import PurchaseCard from '../components/Purchases/PurchaseCard';

const Purchases = () => {

    const [purchasesList, setPurchasesList] = useState()

    useEffect(() => {
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'
        axios.get(URL, getConfig())
            .then(res => setPurchasesList(res.data.data.purchases))
            .catch(error => console.log(error))
    }, [])

    console.log(purchasesList)

    return (
        <section className='purchases-section'>
            <h2 className='purchases-title'>My Purchases</h2>
            <div className='purchases-container'>
                {
                    purchasesList?.map(purchase => (
                        <PurchaseCard
                            key={purchase.id}
                            purchase={purchase}
                         />
                    ))
                }
            </div>
        </section>
    );
};

export default Purchases;