import React from 'react'
import "./Register.css"

const Register = () => {
    return (
        <div className='Register-wrapper'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>New Customer</h2>
                    <a href=''>login</a>
                    <li className='gmail'><a href=''><i class="bi bi-google"></i>    Login with Gmail</a></li>
                    <li className='facebook'><a href=''><i class="bi bi-facebook"></i>     Login with facebook</a></li>
                    <h2>User Account</h2>
                    <form action="/action_page.php">
                        <label for="fname">Email:</label><br />
                        <input type="text" id="fname" name="fname" /><br />
                        <label for="lname">Password:</label><br />
                        <input type="text" id="lname" name="lname" /><br /><br />
                    </form>
                    <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter email"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter password"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Temporary address"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Permanent address"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Enter city"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  

  
</form>
                </div>
            </div>
        </div>
    )
}

export default Register