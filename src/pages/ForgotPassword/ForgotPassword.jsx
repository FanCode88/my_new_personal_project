import { Link, useNavigate } from 'react-router-dom';
import './forgotPassword.scss';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';

const ForgotPassword = () => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        navigate('/new-password');
    };

    return (
        <div className="forgotPassword">
            <div className="container">
                <Link to="/home">
                    <div className="close">
                        <div className="closeInput">x</div>
                    </div>
                </Link>
                <h2>Forgot Password</h2>
                <p>Enter your email address to reset your password.</p>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
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
                        <MdEmail className="iconEmail" />
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
                <p>
                    <Link to="/login" className="signLogin">
                        Back to <b className="bold">Sign In</b>{' '}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
