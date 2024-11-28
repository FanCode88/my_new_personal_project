import { Link } from 'react-router-dom';
import './about.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to our web design page! We are dedicated to creating
                    impressive digital experiences that combine modern
                    aesthetics, advanced functionality, and innovation. Whether
                    you're looking for an engaging website for your business or
                    want to turn your ideas into reality, we are here to help.
                </p>
                <div className="about-highlights">
                    <Link    className="creativity" to="creativity">
                        <div className="highlight-item">
                            <h3>Creativity</h3>
                            <p>
                                Custom projects that reflect the uniqueness of
                                your brand.
                            </p>
                        </div>
                    </Link>
                    <Link className="creativity" to="technology">
                        <div className="highlight-item">
                            <h3>Technology</h3>
                            <p>
                                We use the latest technologies for maximum
                                performance.
                            </p>
                        </div>
                    </Link>
                    <Link className="creativity" to="collaboration">
                        <div className="highlight-item">
                            <h3>Collaboration</h3>
                            <p>
                                We work alongside you to bring your vision to
                                life.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
