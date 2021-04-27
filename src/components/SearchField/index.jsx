import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {selectProductsByName, selectProductsByOrigin} from '../../store/Data/filter.action'
import {getSearchFields} from '../../store/Fields/Field.action'

import './styles.css'

const Search = () => {

    const dispatch = useDispatch()

    const [inputSelectField, setInputSelectField] = useState('')
    const [inputSearchField, setInputSearchField] = useState('')
  
    
    const _handleSubmit = (event) => {
        event.preventDefault();

        const inputs = {inputSelectField, inputSearchField}
        dispatch(getSearchFields(inputs))

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

    return(
        <div className="searchContainer">

            <select value={inputSelectField} name='options' id="options" className="selectField" onChange={
                _handleSelectInput}>
                <option value="">Choose an item to search</option>
                <option value="product">Product</option>
                <option value="origin">Origin</option>
            </select>
            <input type="text" value={inputSearchField} className="searchInputField" onChange={_handleSearchInputField}/>
            <button className="findBtn" onClick={_handleSubmit}>Find</button>
        </div>
    )
}

export default Search