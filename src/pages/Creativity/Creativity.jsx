import './creativity.scss';
import image1 from '../../../public/assets/image1.jpg';
import image2 from '../../../public/assets/image2.jpg';
import image3 from '../../../public/assets/image3.jpg';
import data from '../../pages/Creativity/data';

const Creativity = () => {
    const { intro, cta } = data;

    return (
        <div className="creativity">
            {intro.map((item) => (
                <div key={item.id} className="intro">
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                </div>
            ))}

            <div className="gallery">
                <h2>Our Creative Journey</h2>
                <div className="gallery-grid">
                    <img src={image1} alt="Project 1" />
                    <img src={image2} alt="Project 2" />
                    <img src={image3} alt="Project 3" />
                </div>
            </div>

            <div className="process">
                <h2>Our Creative Process</h2>
                <p>Here’s how we bring ideas to life:</p>
                <ol>
                    <li>
                        <strong>Inspiration:</strong> Researching trends and
                        brainstorming unique ideas.
                    </li>
                    <li>
                        <strong>Scripting:</strong> Sketching concepts and
                        creating prototypes.
                    </li>
                    <li>
                        <strong>Execution:</strong> Perfecting the final design
                        with attention to detail.
                    </li>
                </ol>
            </div>

            {cta.map((item) => (
                <div key={item.id} className="cta">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button className="cta-button">{item.btn}</button>
                </div>
            ))}
        </div>
    );
};

export default Creativity;
