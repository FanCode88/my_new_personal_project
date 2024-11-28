import { useState } from 'react';
import './communications.scss';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import imageCommunication from '../../../public/assets/communications2.png';

const Communications = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const [isFocusUser, setIsFocusUser] = useState(false);
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isFocusedMesage, setIsFocusedMessage] = useState(false);

    return (
        <div className="comunications">
            <img src={imageCommunication} alt="" />
            <div className="communications-container">
                <h2>Contact Us</h2>
                {isSubmitted ? (
                    <div className="thank-you-message">
                        <p>
                            Thank you for your message! We will get back to you
                            soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input
                                placeholder={
                                    isFocusUser ? 'Typing...' : 'Enter name...'
                                }
                                onFocus={() => setIsFocusUser(true)}
                                onBlur={() => setIsFocusUser(false)}
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input
                                placeholder={
                                    isFocusedEmail
                                        ? 'Typing...'
                                        : 'Enter Email...'
                                }
                                onFocus={() => setIsFocusedEmail(true)}
                                onBlur={() => setIsFocusedEmail(false)}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message"></label>
                            <textarea
                                placeholder={
                                    isFocusedMesage
                                        ? 'Typing...'
                                        : 'Enter your message...'
                                }
                                onFocus={() => setIsFocusedMessage(true)}
                                onBlur={() => setIsFocusedMessage(false)}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                )}

                <div className="social-links">
                    <h3>Follow us on social media:</h3>
                    <ul>
                        <li>
                            <Link to="https://www.linkedin.com/in/ionut-sorin-saceanu/">
                                <FaLinkedin className="iconScial" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://x.com/IonutSaceanu">
                                <FaTwitterSquare className="iconScial" />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.instagram.com/ionut_sorin__?igsh=MWRvY254Y21pMTFlZA%3D%3D&utm_source=qr">
                                <RiInstagramFill className="iconScial" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h3>Contact Information:</h3>
                    <p>
                        Email:
                        <a href="mailto:contact@yourdomain.com">
                            saceanu.ionut@icloud.com
                        </a>
                    </p>
                    <p>
                        Phone: <a href="tel:+123456789">+1 234 567 89</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Communications;
