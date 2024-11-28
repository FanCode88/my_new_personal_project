import { useState } from 'react';
import './inspiredDesign.scss';
import { RiHome2Fill } from 'react-icons/ri';
import {
    MdOutlineProductionQuantityLimits,
    MdDeveloperBoard,
    MdDesktopMac,
    MdShoppingBag,
    MdWebAsset,
} from 'react-icons/md';
import { DiTechcrunch } from 'react-icons/di';
import { GiArtificialIntelligence } from 'react-icons/gi';
import {
    SiWeb3Dotjs,
    SiMaterialdesignicons,
    SiGooglemarketingplatform,
} from 'react-icons/si';
import { TfiAgenda } from 'react-icons/tfi';
import { IoMdPeople, IoIosAppstore } from 'react-icons/io';
import { CiMoneyCheck1 } from 'react-icons/ci';
import { FaMobile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const InspiredDesign = () => {
    const storedTheme = localStorage.getItem('theme');
    const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Trecerea între modurile de temă
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
                    <span>
                        <RiHome2Fill className="iconSliderHome" />
                        All
                    </span>
                    <li>
                        <MdOutlineProductionQuantityLimits className="iconSlider" />
                        Productivity
                    </li>
                    <li>
                        <DiTechcrunch className="iconSlider" />
                        Tech
                    </li>
                    <li>
                        <MdWebAsset className="iconSlider" />
                        Assets
                    </li>
                    <li>
                        <GiArtificialIntelligence className="iconSlider" />
                        Artificial Intelligence
                    </li>
                    <li>
                        <SiWeb3Dotjs className="iconSlider" />
                        Web3
                    </li>
                    <li>
                        <SiMaterialdesignicons className="iconSlider" />
                        Design Tools
                    </li>
                    <li>
                        <MdDeveloperBoard className="iconSlider" />
                        Development Tools
                    </li>
                    <li>
                        <SiGooglemarketingplatform className="iconSlider" />
                        Marketing
                    </li>
                    <li>
                        <TfiAgenda className="iconSlider" />
                        Portfolio
                    </li>
                    <li>
                        <IoMdPeople className="iconSlider" />
                        Agency
                    </li>
                    <li>
                        <MdShoppingBag className="iconSlider" />
                        E-commerce
                    </li>
                    <li>
                        <CiMoneyCheck1 className="iconSlider" />
                        Finance
                    </li>
                    <li>
                        <IoIosAppstore className="iconSlider" />
                        Web Apps
                    </li>
                    <li>
                        <MdDesktopMac className="iconSlider" />
                        Desktop Apps
                    </li>
                    <li>
                        <FaMobile className="iconSlider" />
                        Mobile Apps
                    </li>
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
