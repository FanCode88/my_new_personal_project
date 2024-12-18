import { useState } from 'react';
import { motion } from 'framer-motion';
import './developmentTools.scss';
import tools from '../../pages/DevelopmentTools/data';

const DevelopmentTools = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    const detailsVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    return (
        <div className="developmentTools">
            <header className="developmentTools__header">
                <h1>Advanced Development Tools</h1>
                <p>Streamline your workflow with cutting-edge tools</p>
            </header>
            <div className="developmentTools__container">
                <div className="developmentTools__sidebar">
                    {tools.map((tool) => (
                        <button
                            key={tool.id}
                            className={`developmentTools__button ${
                                selectedTool === tool.id ? 'active' : ''
                            }`}
                            onClick={() => setSelectedTool(tool.id)}
                        >
                            {tool.name}
                        </button>
                    ))}
                </div>
                <motion.div
                    className="developmentTools__content"
                    initial="hidden"
                    animate={selectedTool ? 'visible' : 'hidden'}
                    exit="exit"
                    variants={detailsVariants}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {selectedTool ? (
                        <div className="developmentTools__details">
                            <motion.h2 layout>
                                {
                                    tools.find(
                                        (tool) => tool.id === selectedTool
                                    )?.name
                                }
                            </motion.h2>
                            <motion.p layout>
                                {
                                    tools.find(
                                        (tool) => tool.id === selectedTool
                                    )?.description
                                }
                            </motion.p>
                            <motion.div
                                className="developmentTools__extra"
                                layout
                            >
                                <h3>Features:</h3>
                                <ul>
                                    <li>Intuitive UI</li>
                                    <li>Real-time collaboration</li>
                                    <li>Cross-platform support</li>
                                </ul>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="developmentTools__action"
                                >
                                    Learn More
                                </motion.button>
                            </motion.div>
                        </div>
                    ) : (
                        <motion.div
                            className="developmentTools__placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p>Select a tool to view its details</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default DevelopmentTools;
