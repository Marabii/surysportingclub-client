import React, { useState } from 'react'
import axios from 'axios';

export default function Sponsor() {
    const [sponsorImage, setSponsorImage] = useState(null);
    const [sponsorType, setSponsorType] = useState('mainSponsors');

    const [sponsorImageMessage, setSponsorImageMessage] = useState('');
    const [sponsorImageIsError, setSponsorImageIsError] = useState(false);

    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

    const handleSponsorImageSubmit = async (event) => {
        event.preventDefault();
    
        if (!sponsorImage || !['image/jpeg', 'image/png', 'image/gif'].includes(sponsorImage.type)) {
            setSponsorImageMessage('Please upload a valid image file (jpg, png, gif).')
            setSponsorImageIsError(true)
            return;
        }
    
        const formDataToSend = new FormData();
        formDataToSend.append('sponsorType', sponsorType);
        formDataToSend.append('image', sponsorImage);
    
        try {
            const response = await axios.post(`${serverURL}/api/addSponsorImage`, formDataToSend, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setSponsorImageMessage('Sponsor image added successfully!')
                setSponsorImageIsError(false)
                setSponsorImage(null)
                setSponsorType('mainSponsors')
            } else {
                throw new Error('Failed to add sponsor image');
            }
        } catch (error) {
            console.error('Error:', error);
            setSponsorImageMessage('Failed to add sponsor image. Please try again.')
            setSponsorImageIsError(true)
        }
    };

    return (
        <div className="sponsor-images-section">
            <h2>Ajouter une image de sponsor</h2>
            <form className="sponsor-image-form" onSubmit={handleSponsorImageSubmit}>
                <select onChange={(e) => setSponsorType(e.target.value)}>
                    <option value="mainSponsors">Principal</option>
                    <option value="secondarySponsors">Secondaire</option>
                </select>
                <input type="file" accept="image/jpeg,image/png,image/gif" className="sponsor-image-input"
                    onChange={(e) => setSponsorImage(e.target.files[0])} />
                <button type="submit" className="submit-sponsor-image">Add Sponsor Image</button>
            </form>
            {sponsorImageMessage && <div className={`message ${sponsorImageIsError ? 'message-error' : 'message-success'}`}>{sponsorImageMessage}</div>}
        </div>
    )
}