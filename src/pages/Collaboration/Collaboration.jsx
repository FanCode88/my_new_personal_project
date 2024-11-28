import './collaboration.scss';
import { Link } from 'react-router-dom';
import ideea from '../../../public/assets/idea.jpg';
import goal from '../../../public/assets/goal.jpg';
import team from '../../../public/assets/team.jpg';

const Collaboration = () => {
    return (
        <div className="collaboration-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Collaboration: The Key to Innovation</h1>
                    <p>
                        When minds meet, incredible things happen. Collaboration
                        empowers teams to build extraordinary projects, solve
                        complex problems, and create lasting impact.
                    </p>
                    <Link to="/login">
                        <button className="cta-button">Join Us</button>
                    </Link>
                </div>
            </section>

            <section className="benefits-section">
                <h2>Why Collaboration Matters?</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <img src={ideea} alt="Idea Sharing" />
                        <h3>Idea Sharing</h3>
                        <p>
                            Share and refine ideas in a supportive environment
                            to achieve breakthroughs.
                        </p>
                    </div>
                    <div className="benefit-card">
                        <img src={goal} alt="Teamwork" />
                        <h3>Teamwork</h3>
                        <p>
                            Foster trust and mutual respect to build strong and
                            cohesive teams.
                        </p>
                    </div>
                    <div className="benefit-card">
                        <img src={team} alt="Goal Achievement" />
                        <h3>Achieve Goals</h3>
                        <p>
                            Collaboration enables efficient resource allocation
                            and faster problem-solving.
                        </p>
                    </div>
                </div>
            </section>

            <section className="how-to-section">
                <h2>How to Collaborate Effectively?</h2>
                <div className="steps">
                    <div className="step">
                        <span>1</span>
                        <h3>Communicate Clearly</h3>
                        <p>
                            Share your thoughts openly and listen actively to
                            your teammates.
                        </p>
                    </div>
                    <div className="step">
                        <span>2</span>
                        <h3>Set Common Goals</h3>
                        <p>
                            Align your objectives to ensure everyone is on the
                            same page.
                        </p>
                    </div>
                    <div className="step">
                        <span>3</span>
                        <h3>Embrace Diversity</h3>
                        <p>
                            Leverage unique perspectives to drive creativity and
                            innovation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Let’s Build Something Amazing Together!</h2>
                <button className="cta-button">Get Started</button>
            </section>
        </div>
    );
};

export default Collaboration;
