import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <motion.div
                className="homeContainer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Welcome to our page!
                </motion.h1>

                <motion.ul
                    className="navLinks"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, staggerChildren: 0.2 }}
                >
                    <div className="container">
                        <motion.li
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link to="/services">Services</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link to="/about">About</Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.2, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link to="/contact">Contact</Link>
                        </motion.li>
                    </div>
                </motion.ul>

                <div className="wrapper">
                    <motion.div
                        className="formboxLogin"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link to="/login">
                            <motion.button
                                whileHover={{ backgroundColor: "#ff758c", scale: 1.1 }}
                                transition={{ type: "tween", duration: 0.3 }}
                            >
                                JOIN US
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
