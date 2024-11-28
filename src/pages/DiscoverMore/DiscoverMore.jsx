import './discoverMore.scss';
import image1 from '../../../public/assets/d1.jpg';
import image2 from '../../../public/assets/d2.jpg';
import image3 from '../../../public/assets/d3.jpg';

const DiscoverMore = () => {
    return (
        <div className="discover-more">
            <header className="hero">
                <div className="hero-content">
                    <h1>Discover the Future</h1>
                    <p>
                        Step into a world where technology shapes possibilities.
                        Explore groundbreaking innovations driving the future.
                    </p>
                    <a href="#technologies" className="cta-button">
                        Explore Now
                    </a>
                </div>
            </header>

            <section id="technologies" className="technologies">
                <h2>Groundbreaking Technologies</h2>
                <div className="tech-grid">
                    <div className="card">
                        <img src={image1} alt="Artificial Intelligence" />
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Revolutionizing industries with smart solutions and
                            automation.
                        </p>
                    </div>
                    <div className="card">
                        <img src={image2} alt="Virtual Reality" />
                        <h3>Virtual Reality</h3>
                        <p>
                            Immersive experiences transforming how we learn and
                            entertain ourselves.
                        </p>
                    </div>
                    <div className="card">
                        <img src={image3} alt="Blockchain" />
                        <h3>Blockchain</h3>
                        <p>
                            Enhancing security and transparency across multiple
                            domains.
                        </p>
                    </div>
                </div>
            </section>

            {/* Future Predictions */}
            <section className="future">
                <h2>The Future Awaits</h2>
                <p>
                    Discover what's next: from the Metaverse to Quantum
                    Computing, and beyond.
                </p>
                <div className="future-cta">
                    <a href="#" className="cta-button">
                        Join the Journey
                    </a>
                </div>
            </section>
        </div>
    );
};

export default DiscoverMore;
