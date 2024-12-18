import { useState } from 'react';
import './designTools.scss';
import tools from '../../pages/DesignTools/data';

const DesignTools = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    return (
        <div className="designTools">
            <header className="designTools__header">
                <h1>Futuristic Design Tools</h1>
                <p>Empowering creativity through technology</p>
            </header>
            <div className="designTools__container">
                <div className="designTools__sidebar">
                    {tools.map((tool) => (
                        <button
                            key={tool.id}
                            className={`designTools__button ${
                                selectedTool === tool.id ? 'active' : ''
                            }`}
                            onClick={() => setSelectedTool(tool.id)}
                        >
                            {tool.name}
                        </button>
                    ))}
                </div>
                <div className="designTools__content">
                    {selectedTool ? (
                        <div className="designTools__details">
                            <h2>
                                {
                                    tools.find(
                                        (tool) => tool.id === selectedTool
                                    )?.name
                                }
                            </h2>
                            <p>
                                {
                                    tools.find(
                                        (tool) => tool.id === selectedTool
                                    )?.description
                                }
                            </p>
                        </div>
                    ) : (
                        <div className="designTools__placeholder">
                            <p>Select a tool to see its details</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DesignTools;
