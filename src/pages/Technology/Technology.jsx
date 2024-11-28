import { Link } from 'react-router-dom';
import './technology.scss';

const Technology = () => {
    return (
        <div className="technology">
            <header className="technology-header">
                <div className="logo">Technology</div>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="#innovations">Innovations</a>
                        </li>
                        <li>
                            <a href="#trends">Trends</a>
                        </li>
                        <li>
                            <a href="#future">Future</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-content">
                    <h1>Innovating the Future</h1>
                    <p>
                        Explore groundbreaking technologies shaping tomorrow's
                        world.
                    </p>
                    <Link to="more">
                        <button className="cta-button">Discover More</button>
                    </Link>
                </div>
            </section>

            <section id="innovations" className="content">
                <h2>Technology Innovations</h2>
                <div className="content-grid">
                    <div className="card">
                        <h3>Artificial Intelligence</h3>
                        <p>Revolutionizing industries with smart solutions.</p>
                    </div>
                    <div className="card">
                        <h3>Virtual Reality</h3>
                        <p>
                            Immersive experiences transforming entertainment and
                            education.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Blockchain</h3>
                        <p>
                            Enhancing security and transparency across various
                            sectors.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Technology;
