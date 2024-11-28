import { useRef, useState, useEffect } from 'react';
import './userPage.scss';
import { MdMonochromePhotos } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
        <div className="userPage">
            <div className="wrapper">
                <div
                    className="avatar"
                    style={{
                        backgroundImage: selectedImage
                            ? `url(${selectedImage})`
                            : 'url(/img/no.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
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
                </div>
                <div className="context">
                    <h2>Saceanu Ionut</h2>
                    <p>
                        I'm a software engineer who loves to travel and try new
                        experiences.
                    </p>
                    <div className="social">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;
