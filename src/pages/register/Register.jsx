import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="register">
    <div className="card">
        <div className="left">
            <h1>social app</h1>
            <p>Welcome to a new area of socializing and chit-chatting with your friends.</p>
            <span>Do you have a account</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="email" placeholder='email' />
                <input type="password" placeholder="password"/>
                <input type="text" placeholder='name' />
                <button>Submit</button>
            </form>
        </div>
    </div>
</div>
  )
}
