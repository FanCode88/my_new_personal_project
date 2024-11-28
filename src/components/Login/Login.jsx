// Login.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedPassword, setIsFocusedPasword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        navigate('/profile');
    };

    return (
        <div className="login">
            <div className="formLogin">
                <Link to="/home">
                    <div className="close">
                        <div className="closeInput">x</div>
                    </div>
                </Link>
                <form onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="input-box">
                        <input
                            placeholder={
                                isFocusedEmail ? 'Typing...' : 'Enter Email...'
                            }
                            type="email"
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
                            placeholder={
                                isFocusedPassword
                                    ? 'Typing...'
                                    : 'Enter Password...'
                            }
                            type="password"
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
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="forgotPass">
                            <p>Forgot password?</p>
                        </Link>
                    </div>
                    <button type="submit" className="btn">
                        Sign In
                    </button>
                    <div className="login-register">
                        <p>Don't have an account?</p>
                        <Link to="/register" className="register-link">
                            <h6>Sign Up</h6>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
