import { Link } from 'react-router-dom';
import './assets.scss';
import data from '../../pages/Assets/data';

const FuturisticPage = () => {
    const { nav, container, services, futuristic } = data;
    return (
        <div className="futuristic-page">
            <header className="navbar">
                <div className="logo">
                    Futuristic<span className="glow">X</span>
                </div>
                <nav>
                    <ul className="nav-links">
                        {nav.map((item) => (
                            <li key={item.id}>
                                <a href="#about">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main className="hero">
                <div className="hero-content">
                    <h1 className="title">Step Into Tomorrow</h1>
                    <p className="subtitle">
                        Innovating with a vision for the future.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/login">
                            <button className="cta-button primary">
                                Join Us
                            </button>
                        </Link>
                        <button className="cta-button secondary">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="globe-animation"></div>
                    <div className="overlay-grid"></div>
                </div>
            </main>

            <section id="about" className="about-section">
                {container.map((item) => (
                    <div key={item.id} className="container">
                        <h2 className="section-title">{item.title}</h2>
                        <p className="section-description">{item.desc}</p>
                    </div>
                ))}
            </section>

            <section id="services" className="services-section">
                <h2 className="section-title">Our Expertise</h2>

                <div className="services-grid">
                    {services.map((item) => (
                        <div key={item.id} className="service-card">
                            <div className="icon ai"></div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="gallery" className="gallery-section">
                <h2 className="section-title">Our Vision</h2>

                <div className="gallery-grid">
                    {futuristic.map((item) => (
                        <div key={item.id} className="gallery-item ">
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FuturisticPage;
