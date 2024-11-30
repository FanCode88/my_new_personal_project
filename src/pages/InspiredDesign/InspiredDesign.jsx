import { useState } from 'react';
import './inspiredDesign.scss';
import { Link } from 'react-router-dom';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import article from '../../pages/InspiredDesign/articles';

const InspiredDesign = () => {
    const storedTheme = localStorage.getItem('theme');
    const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const toggleMode = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
    };

    const handleSubscribe = () => {
        setIsSubscribed(true);
        setIsVisible(true);
    };

    const closeWindow = () => {
        setIsVisible(false);
    };

    return (
        <div
            className={`inspiredDesign ${
                isDarkMode ? 'dark-mode' : 'light-mode'
            }`}
        >
            <div className="slider">
                <ul>
                    {article.map((article) => (
                        <li key={article.id}>
                            <Link to={article.path} className="slider-link">
                                <span className="iconSlider">
                                    {article.icon}
                                </span>
                                <span>{article.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="formBox">
                <div className="formBoxBtn">
                    <div onClick={toggleMode} className="iconMode">
                        {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                    </div>
                    <button className="first-button" onClick={handleSubscribe}>
                        Submit
                    </button>
                    {isSubscribed && isVisible && (
                        <div className="subscribe">
                            <div className="subscribe-message">
                                Thanks for subscribing!
                                <div className="close" onClick={closeWindow}>
                                    x
                                </div>
                            </div>
                        </div>
                    )}
                    <Link to="/register">
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InspiredDesign;
