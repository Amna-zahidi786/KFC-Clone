import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import "./Detail.css"

const Detail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  return (
    <div className='detail-wrapper'>
      <div className='row'>
        <div className='col-md-6'>
          <h3>{product.title}</h3>
          <h6>{product.description}</h6>
          <span>{product.price}</span>
        </div>
        <div className='col-md-6'>
          <h3>Select Drink</h3>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
              Pepsi
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              7up
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              Mirinda
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              Mountain
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="flexRadioDefault2">
              Diet pepsi
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail