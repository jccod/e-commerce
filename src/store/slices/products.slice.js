import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProductosGlobal: (state, action) => action.payload,
        ascendingOrderProducts: state => {
            state.sort((a, b) => +a.price - +b.price)
        },
        descendingOrderProducts: state => {
            state.sort((a, b) => +b.price - +a.price)
        }
    }
})

export const { setProductosGlobal, ascendingOrderProducts, descendingOrderProducts } =  productsSlice.actions

export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/products'
    axios.get(URL)
        .then(res => dispatch(setProductosGlobal(res.data.data.products)))
        .catch(error => console.log(error))
}

export const getProductsByCategory = (id) => (dispatch) => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`
    axios.get(URL)
        .then(res => dispatch(setProductosGlobal(res.data.data.products)))
        .catch(error => console.log(error))
}
