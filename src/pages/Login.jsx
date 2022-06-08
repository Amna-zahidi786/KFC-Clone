import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError("Please Enter your Email")
        }
        if (!password){
            setPasswordError("Please Enter your Password")
        }

    }

    return (
        <div className='sign-in-wrapper'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>Login with social links</h2>
                    <li className='gmail'><a href=''><i className="bi bi-google"></i>    Login with Gmail</a></li>
                    <li className='facebook'><a href=''><i className="bi bi-facebook"></i>    Login with facebook</a></li>
                    <h2>Login with your account</h2>
                    <span>Enter your e-mail address and password</span>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-8">
                                <input onChange={handleChangeEmail} type="email" className="form-control" id="email" />
                                <p style={{color :"red"}}>{emailError}</p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-8">
                                <input onChange={handleChangePassword} type="password" className="form-control" id="password" />
                                <p style={{color :"red"}}>{passwordError}</p>
                            </div>
                        </div>


                        <button type="submit" className="btn btn">Sign in</button>
                    </form>
                </div>

                <div className='col-md-6'>
                    <h2>New customer</h2>
                    <p>By creating an account with us, purchasing on our website becomes much faster and easier.</p>
                    <Link className="account" to="/Register">Create Account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login