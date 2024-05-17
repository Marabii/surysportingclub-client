import React, { useState, useEffect } from "react";
import axios from 'axios';
import './VerifyEmail.css';
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    const [notAllowed, setNotAllowed] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [message, setMessage] = useState("");
    const [timer, setTimer] = useState(5); // 5 minutes in seconds
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
    const navigate = useNavigate();

    useEffect(() => {
        let url = window.location.href.split('/');
        url = url.slice(url.indexOf('verifyEmail'));
        if (url.length < 3) {
            setNotAllowed(true);
        } else {
            setEmail(url[url.length - 2]);
            setToken(url[url.length - 1]);
        }
    }, []);

    useEffect(() => {
        if (email && token) {
            const allowAccess = async () => {
                try {
                    const response = await axios.post(`${serverURL}/api/checkAccessEmailVerification`, {email, token});
                    setNotAllowed(response.data.notAllowed);
                } catch (e) {
                    console.error(e);
                }
            };
            allowAccess();
        }
    }, [email, token]); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(interval);
                    setIsResendDisabled(false);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (notAllowed) {
            navigate('/');
        }
    }, [notAllowed]); 
    

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        
        try {
            const response = await axios.post(`${serverURL}/api/verifyCode`, {code : verificationCode, email : email});

            setMessage("Verification successful!"); // Update the message accordingly
            navigate('/login')
            setIsResendDisabled(true); // Disable the button again after resending
            setTimer(300); // Reset the timer

        } catch (error) {
            console.error('There was an error!', error);
            if (error.response?.data === "Invalid verification code") {
                setMessage("Verification failed! Wrong code"); // Update the message to display the error
            }
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleResendEmail = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${serverURL}/api/resendEmail`, {
                email: email
            });

            setMessage("Verification email resent successfully");
        } catch (error) {
            console.error("Error resending verification email:", error);
            setMessage("Failed to resend verification email. Please try again.");
        }
    };

    return (
        <div className="verify-email-container">
            <h1>Verify Your Email</h1>
            <form onSubmit={handleSubmit} className="verification-form">
                <input 
                    type="number" 
                    name="verificationCode" 
                    value={verificationCode} 
                    onChange={e => setVerificationCode(e.target.value)} 
                    placeholder="Enter your verification code"
                    className="verification-input"
                />
                <button type="submit" className="verify-button">Verify Code</button>
                <button className="verify-button" onClick={() => navigate('/register')}>Changer votre données</button>
                <button onClick={(e) => handleResendEmail(e)} disabled = {isResendDisabled}>Resend Email <strong>({formatTime(timer)})</strong></button>
            </form>
            {message && <p className="verification-message">{message}</p>}
        </div>
    );
}
