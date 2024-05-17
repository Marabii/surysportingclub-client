import React, { useState } from 'react'
import axios from 'axios';

export default function ClubImages() {
    const [clubImage, setClubImage] = useState(null);

    const [clubImageMessage, setClubImageMessage] = useState('');
    const [clubImageIsError, setClubImageIsError] = useState(false);

    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

    const handleClubImageSubmit = async (event) => {
        event.preventDefault();
    
        if (!clubImage || !['image/jpeg', 'image/png', 'image/gif'].includes(clubImage.type)) {
            setClubImageMessage('Please upload a valid image file (jpg, png, gif).')
            setClubImageIsError(true)
            return;
        }
    
        const formDataToSend = new FormData();
        formDataToSend.append('image', clubImage);
    
        try {
            const response = await axios.post(`${serverURL}/api/addClubImage`, formDataToSend, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setClubImageMessage('Club image added successfully!')
                setClubImageIsError(false)
                setClubImage(null)
            } else {
                throw new Error('Failed to add club image');
            }
        } catch (error) {
            console.error('Error:', error);
            setClubImageIsError(true)
            setClubImageMessage('Failed to add club image. Please try again.')
        }
    };

    return (
        <div className="club-images-section">
            <h2>Add Club Image</h2>
            <form className="club-image-form" onSubmit={handleClubImageSubmit}>
                <input type="file" accept="image/jpeg,image/png,image/gif" className="club-image"
                    onChange={(e) => setClubImage(e.target.files[0])} />
                <button type="submit" className="submit-club-image">Add Club Image</button>
            </form>
            {clubImageMessage && <div className={`message ${clubImageIsError ? 'message-error' : 'message-success'}`}>{clubImageMessage}</div>}
        </div>
    )
}