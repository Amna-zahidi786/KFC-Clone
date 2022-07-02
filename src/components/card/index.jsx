import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../../assets/img/card1.JPG'
import './card.css'


const index = () => {
  return (
    <div className="card-wrapper">
      <div class="card">
  <Link to="./ProductDetailPage"> <img src={card1} class="card-img-top" alt="..."/></Link>
  <div class="card-body">
    <h5 class="card-title">Crispy Box</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <div className='btn-wrapper d-flex'>
   <button type="button" class="btn btn-outline-danger btn-wrapper">PKR 250/-</button>
    <button href="#" class="btn btn-danger btn-wrapper">ADD to Bucket</button>
  </div>
  </div>
</div>
    </div>
  )
}

export default index