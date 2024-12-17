import { motion } from 'framer-motion';
import './features.scss';

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const bubbleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: [1, 1.2, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <motion.div
            className="features-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="bubble"
                variants={bubbleVariants}
                style={{ top: '10%', left: '20%' }}
            ></motion.div>
            <motion.div
                className="bubble"
                variants={bubbleVariants}
                style={{ top: '50%', left: '50%' }}
            ></motion.div>
            <motion.div
                className="bubble"
                variants={bubbleVariants}
                style={{ top: '70%', left: '10%' }}
            ></motion.div>

            <div className="features-content">
                <motion.div className="feature-card" variants={bubbleVariants}>
                    <img
                        src="https://images.pexels.com/photos/5207120/pexels-photo-5207120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Feature 1"
                        className="feature-image"
                    />
                    <h3>3D Immersion</h3>
                    <p>Dynamic visuals with floating effects.</p>
                </motion.div>

                <motion.div className="feature-card" variants={bubbleVariants}>
                    <img
                        src="https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Feature 2"
                        className="feature-image"
                    />
                    <h3>Interactivity</h3>
                    <p>Responsive and animated user experiences.</p>
                </motion.div>

                <motion.div className="feature-card" variants={bubbleVariants}>
                    <img
                        src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Feature 3"
                        className="feature-image"
                    />
                    <h3>Web3 Ready</h3>
                    <p>Seamlessly integrated with blockchain tech.</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Features;
