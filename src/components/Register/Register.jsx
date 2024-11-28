import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.scss';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isFocusUser, setIsFocusUser] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPasword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        navigate('/profile');
    };

    return (
        <div className="register">
            <div className="formRegister">
                <Link to="/home">
                    <div className="close">
                        <div className="closeInput">x</div>
                    </div>
                </Link>
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder={
                                isFocusUser ? 'Typing...' : 'Enter Username...'
                            }
                            onFocus={() => setIsFocusUser(true)}
                            onBlur={() => setIsFocusUser(false)}
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FaUser className="iconUser" />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder={
                                isFocusedEmail ? 'Typing...' : 'Enter Email...'
                            }
                            onFocus={() => setIsFocusedEmail(true)}
                            onBlur={() => setIsFocusedEmail(false)}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MdEmail className="iconUser" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder={
                                isFocusedPassword
                                    ? 'Typing...'
                                    : 'Enter Password...'
                            }
                            onFocus={() => setIsFocusedPasword(true)}
                            onBlur={() => setIsFocusedPasword(false)}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <RiLockPasswordFill className="iconUser" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> I agree to the terms &
                            conditions
                        </label>
                    </div>
                    <button type="submit" className="btn">
                        Sign Up
                    </button>
                    <div className="loginRegister">
                        <p>
                            Already have an account?
                            <Link to="/login" className="loginLink">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
