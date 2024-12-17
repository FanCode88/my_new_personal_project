import { motion } from 'framer-motion';
import './aInteligence.scss';

const AInteligence = () => {
    return (
        <div className="aInteligence">
            {/* Hero Section */}
            <motion.section
                className="aInteligence__hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    className="aInteligence__background"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                ></motion.div>
                <div className="aInteligence__content">
                    <motion.h1
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Artificial Intelligence
                    </motion.h1>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        Shaping the Future of Innovation
                    </motion.p>
                    <motion.button
                        className="aInteligence__cta"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.section>

            {/* Benefits Section */}
            <section className="aInteligence__benefits">
                <motion.h2
                    className="aInteligence__heading"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Why Choose AI?
                </motion.h2>
                <div className="aInteligence__grid">
                    {['Automation', 'Data Insights', 'Scalability'].map(
                        (item, index) => (
                            <motion.div
                                className="aInteligence__card"
                                key={index}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.3, duration: 1 }}
                            >
                                <h3>{item}</h3>
                                <p>
                                    {item === 'Automation'
                                        ? 'Streamline processes with intelligent systems.'
                                        : item === 'Data Insights'
                                        ? 'Analyze and optimize large datasets.'
                                        : 'Adapt and grow with AI at scale.'}
                                </p>
                            </motion.div>
                        )
                    )}
                </div>
            </section>

            {/* Applications Section */}
            <motion.section
                className="aInteligence__applications"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.h2
                    className="aInteligence__heading"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Applications of AI
                </motion.h2>
                <motion.ul className="aInteligence__list">
                    {[
                        'Healthcare',
                        'Finance',
                        'Transportation',
                        'Entertainment',
                    ].map((field, index) => (
                        <motion.li
                            key={index}
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.3, duration: 1 }}
                        >
                            {field}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.section>
        </div>
    );
};

export default AInteligence;
