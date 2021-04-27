import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {listAllItems, selectProductsByName} from '../../store/MassiveData/filter.action'
import {selectAllItems, test} from '../../store/MassiveData/Filter.selectors'
import ContentItem from '../ContentItem'
import './styles.css'

const ContentGrid = () => {

    const dispatch = useDispatch()
    const items = useSelector(selectAllItems)
    const testItems = useSelector(test('HOTRW'))
    
    useEffect(() => {
        dispatch(selectProductsByName('HOTRW'))
    }, [dispatch])

    useEffect(() => {
        console.log(testItems)
    }, [testItems])
    
// function handleBtn(){
//     dispatch(selectProductsByName('Oil & Gas Production'))
// }

    // const renderedItems = 
    // Object.values(testItems).length > 0 ? Object.values(testItems).map((item, index) => {
    //     return(
    //         <section className="contentItem" key={index}>
    //         <div className="contentDivisor">
    //             <span>Product: <strong>{item.product}</strong></span>
    //             <span>Price: <strong>{item.price}</strong></span>
    //         </div>
    //         <div className="contentDivisor">
    //             <span>Industry: <strong>{item.industry}</strong></span>
    //             <span>Quantity: <strong>{item.quantity}</strong></span>
    //         </div>
    //         <div className="contentDivisor"> 
    //             <span>Type: <strong>{item.type}</strong></span>
    //             <span>Origin: <strong>{item.origin}</strong></span>
    //         </div>
    //          </section>
    //     )
    // }) : null

    return(
        <>
        
        <section className="contentContainer">
           
            <div className="contentItemBox">
                {testItems.map((item, index) => {
                    return(
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
                    )
                })}
 
            </div>
            


        </section>
          
         </>
    )
}

export default ContentGrid