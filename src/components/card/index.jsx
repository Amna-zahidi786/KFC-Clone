import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../../assets/img/card1.JPG'
import './card.css'


const Card = ({prod}) => {
  return (
    <div className='col-md-4'>
    <Link className='link-router' to={`/detail/${prod.id}`}>
    <div class="card">
        <img src={card1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{prod.title}</h5>
          <span class="card-text">{prod.description}</span>
          <div className='btn-wrapper d-flex'>
          <button type="button" class="btn btn-outline-danger btn-wrapper">PKR {prod.price}</button>
          <button type="button" class="btn btn-danger btn-wrapper">Add to cart</button>
        </div>
      </div>
    </div>
    </Link>
    </div>
  )
}

export default Card