import React from 'react'
import ContentItem from '../ContentItem'
import './styles.css'

const ContentGrid = () => {
    return(
        <>
        <section className="contentContainer">
            <div className="contentItemBox">
                <ContentItem />
            </div>
            <div className="contentItemBox">
                <ContentItem />
            </div>
            <div className="contentItemBox">
              <ContentItem />
          </div>
          <div className="contentItemBox">
              <ContentItem />
          </div>
          <div className="contentItemBox">
              <ContentItem />
          </div>
          <div className="contentItemBox">
              <ContentItem />
          </div>
          <div className="contentItemBox">
              <ContentItem />
          </div>
          <div className="contentItemBox">
              <ContentItem />
          </div>
          <div className="contentItemBox">
              <ContentItem />
          </div>

           
        </section>
          
          </>
    )
}

export default ContentGrid