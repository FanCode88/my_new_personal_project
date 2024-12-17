import './demo.scss';

const Demo = () => {
    return (
        <div className="demo futuristic">
            {/* Header Section */}
            <header className="demo-header">
                <h1 className="demo-title">
                    Welcome to the Future of Web Interaction
                </h1>
                <p className="demo-subtitle">
                    Immersive. Interactive. Inspiring.
                </p>
            </header>

            {/* Video Section */}
            <section className="demo-video-section">
                <h2>Experience the Future</h2>
                <p>Watch our vision of the Web3 world in action.</p>
                <div className="video-container">
                    <video className="futuristic-video" autoPlay muted loop>
                        <source
                            src="/public/assets/video.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>

            {/* Features Section */}
            <section className="demo-features">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Immersive Design</h3>
                        <p>Explore a world that feels alive and engaging.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Dynamic Interactions</h3>
                        <p>Seamlessly connect with decentralized systems.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Future-Ready</h3>
                        <p>Built with the technologies of tomorrow.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Demo;
