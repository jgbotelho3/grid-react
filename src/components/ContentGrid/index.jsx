import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectProductsByOrigin, selectProductsByName} from '../../store/Data/filter.action'
import {getByProduct} from '../../store/Data/Filter.selectors'

import './styles.css'

const ContentGrid = () => {

    const dispatch = useDispatch()

    const [inputSelectField, setInputSelectField] = useState('')
    const [inputSearchField, setInputSearchField] = useState('')

    const items = useSelector(getByProduct(inputSearchField))

    function _handleSubmit (event) {
        event.preventDefault();

        switch (inputSelectField) {
            case 'product':
                dispatch(selectProductsByName(inputSearchField))
                return 
            
            case 'origin':
                dispatch(selectProductsByOrigin(inputSearchField))
                return
        
            default:
                break;
        }
    }

    const _handleSelectInput = (event) => {
        setInputSelectField(event.target.value)
    }

    const _handleSearchInputField = (event) => {
        setInputSearchField(event.target.value)
    }

    const _renderedItems = 
    Object.values(items).length > 0 ? Object.values(items).map((item, index) => {
        return(
            <div className="contentItemBox">
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

        <select value={inputSelectField} name='options' id="options" className="selectField" onChange={
            _handleSelectInput}>
            <option value="">Choose the column</option>
            <option value="product">Product</option>
            <option value="origin">Origin</option>
        </select>
        <input type="text" placeholder="Typing the search" className="searchInputField" onBlur={_handleSearchInputField}/>
            <button className="findBtn" onClick={_handleSubmit}>Find</button>
        </div>
        <section className="contentContainer">
           
                {_renderedItems}
   
            


        </section>
          
         </>
    )
}

export default ContentGrid