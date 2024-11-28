import { useState } from 'react';
import './newPassword.scss';
import { Link, useNavigate } from 'react-router-dom';
import { RiLockPasswordFill } from 'react-icons/ri';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [isFocusedNewPassword, setIsFocusedNewPassword] = useState(false);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);
    const navigate = useNavigate();

    const handlePasswordInput = (e) => setPassword(e.target.value);
    const handleConfirmPasswordInput = (e) =>
        setConfirmPassword(e.target.value);

    const handlePasswordChange = () => {
        if (isValidPassword(password)) {
            if (password === confirmPassword) {
                setIsPasswordChanged(true);
                alert('The password has been changed successfully.');
                navigate('/profile');
            } else {
                alert(
                    'Passwords do not match! Make sure you have entered the same password.'
                );
            }
        } else {
            alert('The password must contain letters or numbers!');
        }
    };

    const isValidPassword = (input) => /[a-zA-Z0-9]/.test(input);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPasswordChanged) {
            console.log('Password:', password);
            navigate('/');
        } else {
            alert(
                'Please ensure the password meets all requirements before submitting.'
            );
        }
    };

    return (
        <div className="newPassword">
            <div className="formPassword">
                <Link to="/login">
                    <div className="close">
                        <div className="closeInput">x</div>
                    </div>
                </Link>
                <form onSubmit={handleSubmit}>
                    <h2>Password Reset</h2>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder={
                                isFocusedPassword
                                    ? 'Typing...'
                                    : 'Enter new password...'
                            }
                            onFocus={() => setIsFocusedPassword(true)}
                            onBlur={() => setIsFocusedPassword(false)}
                            required
                            value={password}
                            onChange={handlePasswordInput}
                        />
                        <RiLockPasswordFill className="iconUser" />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder={
                                isFocusedNewPassword
                                    ? 'Typing...'
                                    : 'Repeat new password...'
                            }
                            onFocus={() => setIsFocusedNewPassword(true)}
                            onBlur={() => setIsFocusedNewPassword(false)}
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordInput}
                        />
                        <RiLockPasswordFill className="iconUser" />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        onClick={handlePasswordChange}
                        disabled={isPasswordChanged}
                    >
                        Password Reset
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
