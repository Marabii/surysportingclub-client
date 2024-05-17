import React, { useEffect, useState, useContext } from "react";
import './Photos.css';
import Header from "../../components/Header/Header";
import axios from "axios";
import { isLoggedInContext } from "../../App";

import background from "/background5.png";

export default function Photos() {
    const [images, setImages] = useState([]);
    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
    const { isAdmin } = useContext(isLoggedInContext);
    
    useEffect(() => {
        const getImagesNames = async () => {
            try {
                const response = await axios.get(`${serverURL}/api/getImagesNames`);
                const data = response.data;
                setImages(data);
            } catch(e) {
                console.error(e);
            }
        };
        getImagesNames();
    }, []);

    const handleDelete = async (imageName) => {
        // Ask user to confirm deletion
        if (window.confirm("Are you sure you want to delete this image?")) {
            try {
                const response = await axios.delete(`${serverURL}/api/deleteImage`, { withCredentials: true, data: { imageName } });
                if (response.status === 200) {
                    // Update state to remove the image from the UI
                    setImages(images.filter(img => img !== imageName));
                    alert('Image deleted successfully');
                } else {
                    alert('Failed to delete image');
                }
            } catch (e) {
                console.error(e);
                alert('Error deleting image');
            }
        } else {
            // User cancelled the deletion
            alert('Deletion cancelled');
        }
    };
    

    return (
        <div className="photos-page">
            <img src={background} alt="background-img" className="background-photos"/>
            <Header />
            <h2>Photos</h2>
            <div className="photos-container">
                {images.map((imageName, index) => (
                    <div key={index} className="photo-item">
                        <a href={`${serverURL}/club-images/${imageName}`}>
                            <img src={`${serverURL}/club-images/${imageName}`} alt={imageName} />
                        </a>
                        {isAdmin && (
                            <button className="delete-btn" onClick={() => handleDelete(imageName)}>Delete</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
