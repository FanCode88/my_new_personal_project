import { Link } from 'react-router-dom';
import './about.scss';
import data from '../../components/About/data';

const About = () => {
    const { highlight, aboutDesc } = data;

    return (
        <div className="about">
            <div className="about-container">
                <h1 className="about-title">About Us</h1>
                {aboutDesc.map((item) => (
                    <p key={item.id} className="about-description">
                        {item.desc}
                    </p>
                ))}
                <div className="about-highlights">
                    {highlight.map((item) => (
                        <Link
                            key={item.id}
                            className="creativity"
                            to={`/about/${item.title.toLowerCase()}`}
                        >
                            <div className="highlight-item">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
