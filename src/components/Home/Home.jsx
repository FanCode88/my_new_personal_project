import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <h1>Welcome to our page!</h1>
                <ul>
                    <div className="container">
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </div>
                </ul>
                <div className="wrapper">
                    <div className="formboxLogin">
                        <Link to="/login">
                            <button>JOIN US</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
