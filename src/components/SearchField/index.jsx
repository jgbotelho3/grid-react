import React from 'react'
import './styles.css'

const Search = () => {
    return(
        <div className="searchContainer">
            <select name="data_full" id="data_full" className="selectField">
                <option value="">Choose an item to search</option>
                <option value="product">Product</option>
                <option value="origin">Origin</option>
            </select>
            <button className="findBtn">Find</button>
        </div>
    )
}

export default Search