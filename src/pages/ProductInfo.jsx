import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/Home/ProductCard';
import ProductDescription from '../components/ProductInfo/ProductDescription';
import SliderImg from '../components/ProductInfo/SliderImg';
import '../App.css'

const ProductInfo = () => {

    const { id } = useParams()

    const [product, setProduct] = useState()
    const [similarProducts, setSimilarProducts] = useState()

    const allProducts = useSelector(state => state.products)

    useEffect(() => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        if (allProducts && product) {
            const pivot = allProducts.filter(prod => prod.category.name === product.category)
            setSimilarProducts(pivot)
        }
    }, [allProducts, product])

    return (
        <div className='product-info'>
            <header className='product-info__header'>
                <SliderImg listImgs={product?.productImgs} />
                <ProductDescription
                    product={product}
                />
            </header>
            <section className='similar-products-section'>
                <h3>Discover similar items</h3>
                <div className='similar-products-container'>
                    {
                        similarProducts?.map(simProd => {
                            if (simProd.title !== product.title) {
                                return (
                                    <ProductCard
                                        key={simProd.id}
                                        product={simProd}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default ProductInfo;