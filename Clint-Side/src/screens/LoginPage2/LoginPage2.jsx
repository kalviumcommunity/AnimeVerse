import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage2.css'; 

function LoginPage2() {
    const CookieData = (name , value) => {
        document.cookie= `${name}=${value};path=/;`;
    }
    return (
        <>
        <div className="login-page">
            <div className="login-box">
                <form onSubmit={(e)=>{ e.preventDefault(); }}>
                    <input type="checkbox" className="input-check" id="input-check" />
                    <label htmlFor="input-check" className="toggle">
                        <span className="text off">off</span>
                        <span className="text on">on</span>
                    </label>
                    <div className="light"></div>

                    <h2>Login</h2>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="text" onChange={(e)=> CookieData('name', e.target.value)} required />
                        <label>Name</label>
                        <div className="input-line"></div>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" onChange={(e)=> CookieData('email', e.target.value)} required />
                        <label>Email</label>
                        <div className="input-line"></div>
                    </div>
                    <div className="input-box">
                        <span className="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="text" onChange={(e)=> CookieData('username', e.target.value)} required />
                        <label>User Name</label>
                        <div className="input-line"></div>
                    </div>
                    {/* <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div> */}
                    <Link to={'/MainPage'}>
                    <button className="btn-loginpage" type="submit">Login</button>
                    </Link>
                    {/* <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div> */}
                </form>
            </div>
            </div>
        </>
    );
}

export default LoginPage2;
