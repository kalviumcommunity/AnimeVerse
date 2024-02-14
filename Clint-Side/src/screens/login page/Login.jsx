import React from 'react'
import './login.css';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function LoginPage() {
  return (
    <>
      <section className='section'>
        <div className='login-box'>
          <form action="">
            <h2>Login</h2>
            <div className="input-box">
              <span className='icon'><MdEmail /></span>
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="input-box">
              <span className='icon'><RiLockPasswordFill /></span>
              <input type="password" required />
              <label htmlFor="">Password</label>
            </div>
            <div className="remember-forget">
              <label htmlFor=""><input type="checkbox" name="" id="rememberMe" />Remember Me</label>
              <a className='links' href="">Forgot Pasword ?</a>
            </div>
            <button type='submit' className='btn-loginpage'>Login</button>
            <div className="register-link">
              <p>Don't have an account ? <a className='links' href="">Register</a></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
    