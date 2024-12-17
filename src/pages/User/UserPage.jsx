import { useRef, useState, useEffect } from 'react';
import './userPage.scss';
import { MdMonochromePhotos } from 'react-icons/md';
import { FaLinkedin, FaGoogle, FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function UserPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            setSelectedImage(savedImage);
        }
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            localStorage.setItem('profileImage', imageUrl);
        }
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    return (
        <motion.div
            className="userPage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="wrapper">
                {/* Avatar Section */}
                <motion.div
                    className="avatar"
                    style={{
                        backgroundImage: selectedImage
                            ? `url(${selectedImage})`
                            : 'url(/img/no.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <button onClick={handleIconClick} className="iconButton">
                        <MdMonochromePhotos className="iconImg" />
                    </button>
                </motion.div>

                {/* User Context */}
                <div className="context">
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Saceanu Ionut
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        I’m a software engineer who loves to travel, explore
                        futuristic technologies, and push the boundaries of
                        innovation.
                    </motion.p>
                    <div className="social">
                        <motion.div
                            className="socialIcons"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Link to="https://www.linkedin.com/in/ionut-sorin-saceanu/">
                                <FaLinkedin className="iconSocial" />
                            </Link>
                            <Link to="https://www.youtube.com/channel/UC6lhbBffYR651Q6wgVqE19Q">
                                <IoLogoYoutube className="iconSocial" />
                            </Link>
                            <Link to="https://www.instagram.com/ionut_sorin__?igsh=MWRvY254Y21pMTFlZA%3D%3D&utm_source=qr">
                                <RiInstagramFill className="iconSocial" />
                            </Link>
                            <FaGoogle className="iconSocial" />
                            <Link to="https://www.facebook.com/Miro10000000/">
                                <FaFacebookSquare className="iconSocial" />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Interactive Stats Section */}
                <div className="stats">
                    <motion.div
                        className="statBox"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <h3>Projects</h3>
                        <p>24 Completed</p>
                    </motion.div>
                    <motion.div
                        className="statBox"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <h3>Followers</h3>
                        <p>1.2k</p>
                    </motion.div>
                    <motion.div
                        className="statBox"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <h3>Experience</h3>
                        <p>5+ Years</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default UserPage;
