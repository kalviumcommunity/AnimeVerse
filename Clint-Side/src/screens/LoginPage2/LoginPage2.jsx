import './LoginPage2.css'; 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage2() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7000/login', { username, password });
            if (response.data && response.data.token) {
                document.cookie = `${username}=${response.data.token}; path=/`;
                console.log('Token from server:', response.data.token);
                navigate('/MainPage');
            } else {
                console.log('No token returned from server');
                alert('Invalid User or Password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Invalid User or Password');
        }
    };

    return (
        <>
            <div className="login-page">
                <div className="login-box">
                    <form onSubmit={handleSubmit} className='LoginForm'>            
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
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                            <label>Name</label>
                            <div className="input-line"></div>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label>Password</label>
                            <div className="input-line"></div>
                        </div>
                        <button className="btn-loginpage" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginPage2;
