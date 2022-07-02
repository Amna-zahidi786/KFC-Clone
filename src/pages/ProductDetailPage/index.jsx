import React from 'react'
import './Detail.css'
import product1 from '../../assets/img/product1.JPG'


const ProductDetail = () => {
  return (
   <div className="productDetail-wrapper mt-5">
  
   <div className="inner-datail">
   <div className="row">
        <div className="col-md-5">
            <img style={{width:"100%"}} src={product1} alt="" />
        </div>
        <div className="col-md-7">
            <a href=''>Home / Crispy Box</a>
            <h3>Product detail</h3>
            <span>2 Pc Hot & Crispy Chicken, 1 Regular Fries, 1 Regular Drink & 1 Coleslaw.</span>
            <div className="radio-control mt-5">
            <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Pepsi
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
   7UP
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Mirinda
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Mountain Dew
  </label>
</div>
            </div>
        </div>
    </div>
   </div>
   </div>
  )
}

export default ProductDetail