import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';
import { Image } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';


export default function AddTeam() {
    const [formData, setFormData] = useState({
        teamName: '',
        teamGender: 'M',
        teamImage: null,
        effectif: '',
        nombreEquipe: '',
        birthday: '',
        seancesEntrainement: '',
        match: '',
        motDesCoaches: '',
    });
    const [roles, setRoles] = useState([]);
    const [roleTitle, setRoleTitle] = useState('');
    const [name, setName] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

    const handleInputChange = (key, value) => {
        setFormData(prevData => ({ ...prevData, [key]: value }));
    };
    

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        if (file) {
            setFormData(prevData => ({
                ...prevData,
                teamImage: file
            }));
            toast.info(`File ${file.name} accepted.`);
        }
    }, []);    

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/jpeg,image/png,image/gif',
        onDropRejected: () => toast.error("Invalid file type. Only JPEG, PNG, or GIF accepted.")
    });

    const handleTeamSubmit = async (event) => {
        event.preventDefault();
    
        const {
            teamName,
            teamGender,
            teamImage,
            effectif,
            nombreEquipe,
            birthday,
            seancesEntrainement,
            match,
            motDesCoaches,
        } = formData;

    
        // You can perform any necessary validation here
    
        const formDataToSend = new FormData();
        formDataToSend.append('teamName', teamName);
        formDataToSend.append('teamGender', teamGender);
        formDataToSend.append('teamImage', teamImage);
        formDataToSend.append('roles', JSON.stringify(roles));
        formDataToSend.append('effectif', effectif);
        formDataToSend.append('nombreEquipe', nombreEquipe);
        formDataToSend.append('birthday', birthday);
        formDataToSend.append('seancesEntrainement', seancesEntrainement);
        formDataToSend.append('match', match);
        formDataToSend.append('motDesCoaches', motDesCoaches);

        try {
            const response = await axios.post(`${serverURL}/api/addTeam`, formDataToSend, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percent);
                }
            });
            if (response.status === 200) {
                toast.success('Team added successfully!');
                setFormData({
                    teamName: '',
                    teamGender: 'M',
                    teamImage: null,
                    roleRSFA: '',
                    roleEducateur: '',
                    effectif: '',
                    nombreEquipe: '',
                    birthday: '',
                    seancesEntrainement: '',
                    match: '',
                    motDesCoaches: '',
                });
                setRoles([]);
                setUploadProgress(0);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to add team. Please try again.');
        }
    };

    const addRole = (e) => {
        e.preventDefault()
        if (roleTitle && name) {
            const newRole = { title: roleTitle, name: name };
            setRoles([...roles, newRole]);
            setRoleTitle('');
            setName('');
        }
    }

    return (
        <div className="add-team-section">
            <h2>Add Team Section</h2>
            <form className="team-form" onSubmit={handleTeamSubmit}>
                <select onChange={(e) => handleInputChange('teamGender', e.target.value)}>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <div {...getRootProps()} className="dropzone" style={{
                    border: '2px dashed #ccc', padding: '20px', textAlign: 'center',
                    cursor: 'pointer', marginBottom: '20px'
                }}>
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop the image here...</p> : <p>Drag 'n' drop team image here, or click to select file</p>}
                    {formData.teamImage && <img src={URL.createObjectURL(formData.teamImage)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100px', marginTop: '10px' }} />}
                    <Image size={48} color="#000000" strokeWidth={1.5} style={{position : 'relative', top : "15px"}} />
                </div>
                <input type="text" placeholder="Nom d'équipe"
                    value={formData.teamName} onChange={(e) => handleInputChange('teamName', e.target.value)} required />

                <input type="text" placeholder="Effectif"
                    value={formData.effectif} onChange={(e) => handleInputChange('effectif', e.target.value)} required />

                <input type="text" placeholder="Nombre d’équipes"
                    value={formData.nombreEquipe} onChange={(e) => handleInputChange('nombreEquipe', e.target.value)} required />

                <input type="text" placeholder="Année de naissance des joueurs"
                    value={formData.birthday} onChange={(e) => handleInputChange('birthday', e.target.value)} required />

                <input type="text" placeholder="Séances d’entraînement:"
                    value={formData.seancesEntrainement} onChange={(e) => handleInputChange('seancesEntrainement', e.target.value)} required />

                <input type="text" placeholder="Matchs"
                    value={formData.match} onChange={(e) => handleInputChange('match', e.target.value)} required />
                
                <input type="text" placeholder="Mots des coaches"
                    value={formData.motDesCoaches} onChange={(e) => handleInputChange('motDesCoaches', e.target.value)} required />
                
                <div className="role-manager">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Title"
                            value={roleTitle}
                            onChange={(e) => setRoleTitle(e.target.value)}
                            className="input-field"
                            />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input-field"
                            />
                        <button onClick={(e) => addRole(e)} className="add-button">Add Role</button>
                    </div>
                    <ul className="role-list">
                        {roles.map((role, index) => (
                            <li key={index} className="role-item">
                                <strong>{role.title}</strong> - {role.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit" className="submit-team">Add Team</button>
                {uploadProgress > 0 && (
                    <div style={{ width: '100%', backgroundColor: '#ddd' }}>
                        <div style={{ height: '20px', backgroundColor: 'green', width: `${uploadProgress}%` }} />
                    </div>
                )}
            </form>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
    );
}
