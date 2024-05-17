import React, { useEffect, useState } from "react";
import './OrganigrammeDuClub.css';
import Header from "../../components/Header/Header";
import useWindowDimensions from "../../utils/windowSize";

import background from '/background10.png';
import { XCircle } from 'lucide-react'

export default function OrganigrammeDuClub() {
    const [modalImage, setModalImage] = useState(null);
    const { width } = useWindowDimensions()

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
    }

    const closeModal = () => {
        setModalImage(null);
    }

    return (
        <div className="organigramme-du-club">
            <img src = {background} className="background-organigramme-du-club"/>
            <Header />
            <h2>Organigramme Du Club</h2>
            <div className="club-content">
                <p className="club-motto">
                    Motivés, avec une forte passion pour le football, nous souhaitons le rendre accessible à tout le monde.
                </p>
                <div className="buttons-container">
                    <button onClick={() => openModal('/image_directeur.png')} className="button-red">Bureau Directeur et Pôle Associatif</button>
                    <button onClick={() => openModal('/image_jeunesse.png')} className="button-red">Pôle Sportif Jeunesse</button>
                    <button onClick={() => openModal('/image_adulte.png')} className="button-red">Pôle Adulte</button>
                </div>
            </div>
            {modalImage && 
                <div className="image-organigramme-container">
                    <XCircle onClick={closeModal} className="close" fill="black" stroke="white" size={40} />
                    <img src = {modalImage}/>
                </div>
            }
        </div>
    );
}
