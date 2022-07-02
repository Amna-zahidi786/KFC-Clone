import React from 'react'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import Card from '../../components/card'
import { products } from '../../Products'
import { useState } from 'react'

const Home = () => {
    const [product, setProduct] = useState(products)
    return (
    
        <div className='home-wrapper'>
            
            <Slider/>
            <div className="lead-text">
                <h3>Signature Box</h3>
            </div>
          <div className='card-wrapper'>
          <div className='row'>
             
            <div className='col-md-4'>
                <Card/>
            </div>
            <div className='col-md-4'>
                <Card/>
            </div>
            <div className='col-md-4'>
                <Card/>
            </div>
             
         </div>
          </div>
            
           
        </div>
    )
}

export default Home