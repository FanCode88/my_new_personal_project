import './Productivity.scss';
import data from '../../pages/Productivity/data';

const Productivity = () => {
    
    const { header, hero, technique, testimonials, tools } = data;

    return (
        <div className="productivity-page">
            {header.map((item) => (
                <header key={item.id} className="header">
                    <div className="logo">{item.logo}</div>
                    <nav className="nav">
                        <a href="#tools">{item.tools}</a>
                        <a href="#techniques">{item.tech}</a>
                        <a href="#testimonials">{item.test}</a>
                    </nav>
                </header>
            ))}

            {hero.map((item) => (
                <section key={item.id} className="hero">
                    <h1>{item.title}</h1>
                    <button className="cta-button">{item.btn}</button>
                </section>
            ))}

            <section id="tools" className="section">
                <h2>Essential Productivity Tools</h2>
                <div className="tools">
                    {tools.map((item) => (
                        <div key={item.id} className="tool">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="techniques" className="section">
                <h2>Productivity Techniques</h2>
                <div className="techniques">
                    {technique.map((item) => (
                        <div key={item.id} className="technique">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="testimonials" className="section testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-slider">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial">
                            <p className="quote">{item.quote}</p>
                            <p className="author"> {item.author}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Productivity;
