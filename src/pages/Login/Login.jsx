import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import Header from "../../components/Header/Header";
import { isLoggedInContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import background from "/background2.png";

export default function Login() {
    const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const { setIsLoggedIn } = useContext(isLoggedInContext);

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            };
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async function handleSubmit() {
        if (!validateEmail(formData.email)) {
            toast.error("Format d'email invalide");
            return;
        }

        try {
            const response = await axios.post(`${serverURL}/api/login`, formData, { withCredentials: true });
            console.log(response.data);
            if (response.data.isLoggedIn) {
                setIsLoggedIn(true);
                navigate("/");
                window.location.reload(true);
            } else {
                setIsLoggedIn(false);
            }
        } catch (e) {
            if (e.response && e.response.status === 401) {
                toast.error("informations d'identification erronées");
            }
            console.error(e);
        }
    }

    return (
        <div className="login-container">
            <Header />
            <img src={background} className="background-login" />
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
                <h2>LOGIN</h2>
                <span>Please enter your e-mail and password</span>
                <input type="email" placeholder="Email" name="email" autoComplete="username" onChange={(e) => handleChange(e)} />
                <input type="password" placeholder="Password" name="pw" autoComplete="current-password" onChange={(e) => handleChange(e)} />
                <button className="shop-button" type="submit">LOGIN</button>
                <div>Don't have an account ? <Link to="/register">Register</Link></div>
            </form>
            <ToastContainer />
        </div>
    );
}
