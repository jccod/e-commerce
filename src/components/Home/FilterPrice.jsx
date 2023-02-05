import React from 'react';
import '../../App.css'


const FilterPrice = ({setInputPrice}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputFrom = +e.target.from.value
        const inputTo = +e.target.to.value
        if(inputFrom && inputTo) {
            setInputPrice({
                from: inputFrom,
                to: inputTo
            })
        } else if(!inputFrom && inputTo) {
            setInputPrice({
                from: 0,
                to: inputTo
            })
        } else if(inputFrom && !inputTo) {
            setInputPrice({
                from: inputFrom,
                to: Infinity
            })
        } else {
            setInputPrice({
                from: 0,
                to: Infinity
            })
        }
    }

    return (
        <section className='filter-price'>
            <h4 className='filter-title'>Price</h4>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label htmlFor="from">From</label>
                    <input type="number" id="from" />
                </div>
                <div className='input-container'>
                    <label htmlFor="to">To</label>
                    <input type="number" id="to" />
                </div>
                <button className='primary-btn'>Filter Price</button>
            </form>
        </section>
    )
}

export default FilterPrice