// Necessary imports for React and futuristic styles
import './tech.scss';

const Tech = () => {
    return (
        <div className="tech-page">
            <header className="tech-header">
                <nav className="tech-nav">
                    <h1 className="tech-title">Tech Trends 2024</h1>
                    <ul className="tech-menu">
                        <li>
                            <a href="#ai">AI</a>
                        </li>
                        <li>
                            <a href="#blockchain">Blockchain</a>
                        </li>
                        <li>
                            <a href="#ar">AR/VR</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="tech-main">
                <div className="tech-hero">
                    <h2 className="hero-title">
                        Exploring the Future of Technology
                    </h2>
                    <p className="hero-text">
                        Discover the trends shaping the world of tomorrow.
                    </p>
                </div>

                <section id="ai" className="tech-section">
                    <div className="tech-card">
                        <h2 className="tech-section-title">
                            Artificial Intelligence
                        </h2>
                        <p>
                            AI is transforming industries through advanced
                            models like GPT-4 and deep learning algorithms.
                        </p>
                    </div>
                </section>

                <section id="blockchain" className="tech-section">
                    <div className="tech-card">
                        <h2 className="tech-section-title">Blockchain</h2>
                        <p>
                            Blockchain technology is redefining security and
                            transparency in financial transactions and beyond.
                        </p>
                    </div>
                </section>

                <section id="ar" className="tech-section">
                    <div className="tech-card">
                        <h2 className="tech-section-title">
                            Augmented & Virtual Reality
                        </h2>
                        <p>
                            AR and VR provide immersive experiences in
                            education, gaming, and e-commerce.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Tech;
