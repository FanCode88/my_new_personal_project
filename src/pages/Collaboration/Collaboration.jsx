import './collaboration.scss';
import { Link } from 'react-router-dom';
import data from '../../pages/Collaboration/data';

const Collaboration = () => {
    const { hero, card, step, section } = data;

    return (
        <div className="collaboration-page">
            <section className="hero-section">
                {hero.map((item) => (
                    <div key={item.id} className="hero-content">
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                        <Link to="/login">
                            <button className="cta-button">{item.btn}</button>
                        </Link>
                    </div>
                ))}
            </section>

            <h2>Why Collaboration Matters?</h2>
            <section className="benefits-section">
                {card.map((item) => (
                    <div key={item.id} className="benefits-grid">
                        <div className="benefit-card">
                            <img src={item.img} alt="Idea Sharing" />
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="how-to-section">
                <h2>How to Collaborate Effectively?</h2>
                <div className="steps">
                    {step.map((item) => (
                        <div key={item.id} className="step">
                            <span>{item.span}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {section.map((item) => (
                <section key={item.id} className="cta-section">
                    <h2>{item.title}</h2>
                    <button className="cta-button">{item.btn}</button>
                </section>
            ))}
        </div>
    );
};

export default Collaboration;
