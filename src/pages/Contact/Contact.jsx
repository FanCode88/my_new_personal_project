import { useState } from 'react';
import './contact.scss';
import { FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Contact = () => {
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
        <div className="contact">
            <div className="contacts-communications">
                <h1>Contact Us</h1>
                {isSubmitted ? (
                    <div className="thank-you-message">
                        <p>
                            Thank you for reaching out! We'll get back to you
                            soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={
                                    isFocusUser ? 'Typing...' : 'Enter name...'
                                }
                                onFocus={() => setIsFocusUser(true)}
                                onBlur={() => setIsFocusUser(false)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={
                                    isFocusedEmail
                                        ? 'Typing...'
                                        : 'Enter Email...'
                                }
                                onFocus={() => setIsFocusedEmail(true)}
                                onBlur={() => setIsFocusedEmail(false)}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder={
                                    isFocusedMesage
                                        ? 'Typing...'
                                        : 'Enter your message...'
                                }
                                onFocus={() => setIsFocusedMessage(true)}
                                onBlur={() => setIsFocusedMessage(false)}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                )}

                <div className="social-links">
                    <h3>Connect with us:</h3>
                    <ul>
                        <li>
                            <Link to="https://linkedin.com/in/ionut-sorin-saceanu">
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://x.com/IonutSaceanu">
                                <FaTwitterSquare />
                            </Link>
                        </li>
                        <li>
                            <Link to="https://instagram.com/ionut_sorin__">
                                <RiInstagramFill />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h3>Contact Information:</h3>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:saceanu.ionut@icloud.com">
                            saceanu.ionut@icloud.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:+123456789">+1 234 567 89</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
