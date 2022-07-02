import React from 'react'
import Card from '../../components/card'
import Slider from '../../components/Slider'


const Product = () => {
    return (
        <div className="product-wrapper">
          <div className="lead-text">
            <h2>EVERYDAY VALUE</h2>
          </div>
          <div className="product-inner">
          <div className="row">
            <div className="col-md-4">
              <Card/>
            </div>
            <div className="col-md-4">
              <Card/>
            </div>
            <div className="col-md-4">
              <Card/>
            </div>
            <div className="col-md-4">
              <Card/>
            </div>
            <div className="col-md-4">
              <Card/>
            </div>
            <div className="col-md-4">
              <Card/>
            </div>
            <div className="col-md-4">
              <Card/>
            </div>
         
          </div>
          </div>
        </div>
    )
}

export default Product