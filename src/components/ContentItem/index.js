import React from 'react'
import './styles.css'

const ContentItem = () => {
    return(
        <section className="contentItem">
            <div className="contentDivisor">
                <span>Product: <strong>RTIX</strong></span>
                <span>Price: <strong>$0.67</strong></span>
            </div>
            <div className="contentDivisor">
                <span>Industry: <strong>Industrial Specialties</strong></span>
                <span>Quantity: <strong>25</strong></span>
            </div>
            <div className="contentDivisor"> 
                <span>Type: <strong>3XL</strong></span>
                <span>Origin: <strong>LA</strong></span>
            </div>
          
        </section>
    )
}

export default ContentItem