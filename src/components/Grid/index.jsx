import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {getItem} from '../../store/Data/Filter.selectors'

import './styles.css'

const ContentGrid = () => {

    const [inputSelectField, setInputSelectField] = useState('')
    const [inputSearchField, setInputSearchField] = useState('')
 
    const items = useSelector(getItem(inputSearchField,inputSelectField ))
    
    const _handleSelectInput = (event) => {
        setInputSelectField(event.target.value)
    }

    const _handleSearchInputField = (event) => {
        inputSelectField === 'quantity' 
        ? setInputSearchField(Number(event.target.value)) 
        :  setInputSearchField(event.target.value)
    
    }

    const _renderedItems = 
    Object.values(items).length > 0 ? Object.values(items).map((item, index) => {
        return(
            <div className="contentItemBox" key={index}>
                <section className="contentItem" key={index}>
                <div className="contentDivisor">
                    <span>Product: <strong>{item.product}</strong></span>
                    <span>Price: <strong>{item.price}</strong></span>
                </div>
                <div className="contentDivisor">
                    <span>Industry: <strong>{item.industry}</strong></span>
                    <span>Quantity: <strong>{item.quantity}</strong></span>
                </div>
                <div className="contentDivisor"> 
                    <span>Type: <strong>{item.type}</strong></span>
                    <span>Origin: <strong>{item.origin}</strong></span>
                </div>
                </section>
            </div>

        )
    }) : null
    return(
        <>
        
        <div className="searchContainer">

        <select name='options' id="options" className="selectField" onChange={
            _handleSelectInput}>
            <option value="">Choose the column</option>
            <option value="product">Product</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
            <option value="type">Type</option>
            <option value="industry">Industry</option>
            <option value="origin">Origin</option>
        </select>
        <input type="text" placeholder="Typing the search" className="searchInputField" onChange={_handleSearchInputField}/>
            {/* <button className="findBtn" onClick={_handleSubmit}>Find</button> */}
        </div>
        <section className="contentContainer">    
            {_renderedItems}
        </section>
          
         </>
    )
}

export default ContentGrid