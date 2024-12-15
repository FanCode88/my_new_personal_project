import './happyCustomers.scss';
import { useState } from 'react';
import customers from '../../pages/HappyCustomers/data';

const HappyCustomers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + customers.length) % customers.length
        );
    };

    const { img, name, feedback, username, title } = customers[currentIndex];

    return (
        <div className="happyCustomers">
            <div className="container">
                <div className="boxMain">
                    <h1>{title}</h1>
                    <div className="line"></div>
                    <div className="circle">
                        <img src={img} alt={name} />
                    </div>
                    <h2>{name}</h2>
                    <p>{feedback}</p>
                    <div className="foot">{username}</div>
                    <div className="navigation">
                        <button onClick={handlePrev} className="prev">
                            &lt;
                        </button>
                        <button onClick={handleNext} className="next">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;
