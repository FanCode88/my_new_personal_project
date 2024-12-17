import { Link } from 'react-router-dom';
import './web3.scss';

const Web3 = () => {
    return (
        <div className="web futuristic">
            <header className="web-header">
                <h1 className="web-title">Explore the Future of Web3</h1>
                <p className="web-subtitle">
                    Decentralized. Autonomous. Limitless.
                </p>
                <button className="web-button">Start Your Journey</button>
            </header>

            <main className="web-main">
                <section className="web-section intro">
                    <h2>What is Web3?</h2>
                    <p>
                        Web3 is the next generation of the internet, powered by
                        blockchain and decentralized technologies, enabling
                        greater control, transparency, and innovation.
                    </p>
                </section>

                <section className="web-section features">
                    <div className="feature-card">
                        <h3>Decentralization</h3>
                        <p>
                            Empowering users by eliminating centralized control.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3>Smart Contracts</h3>
                        <p>Automating agreements and processes with code.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Digital Ownership</h3>
                        <p>True ownership of digital assets and data.</p>
                    </div>
                </section>

                <section className="web-section interactive">
                    <h2>Experience the Power</h2>
                    <button className="connect-wallet">
                        Connect Your Wallet
                    </button>
                </section>
            </main>

            <footer className="web-footer">
                <p>© 2024 Web3 Innovations. All rights reserved.</p>
                <nav className="footer-nav">
                    <Link to="introduction">Introduction</Link>
                    <Link to="features">Features</Link>

                    <Link to="interactive">Demo</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Web3;
