import React, { useState, useContext } from "react";
import './Admin.css';

import Header from "../../components/Header/Header";
import Email from "./Email";
import MatchDetails from './MatchDetails';
import LatestNews from "./LatestNews";
import ClubImages from "./ClubImages";
import Sponsor from "./Sponsor";
import AddTeam from "./AddTeam";

import background from '/background.png';
import { isLoggedInContext } from "../../App";
import { Wrench, Mail } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Admin() {
    const [currPage, setCurrPage] = useState('modifier')
    const frontEND = import.meta.env.VITE_REACT_APP_FRONTEND;
    const { isAdmin } = useContext(isLoggedInContext);

    if (!isAdmin) {
        window.location.href = `${frontEND}/page-not-found`;
        return null;
    } 

    const modifyVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 20 } },
        exit: { opacity: 0, x: 200, transition: { duration: 0.1 } }
    };
      
    return (
        <div className="admin-panel-container">
            <img className="background-admin" src={background} alt="background" />
            <Header />
            <div className="nav-bar-admin">
                <button  onClick={() => setCurrPage('modifier')}><span>Modifier Le Site</span><span><Wrench /></span></button>
                <button  onClick={() => setCurrPage('emails')}><span>Envoyer Des Emails</span><span><Mail /></span></button>
            </div>
            <AnimatePresence>
                {currPage === 'modifier' 
                &&
                <motion.div 
                    className="content-container"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={modifyVariants}
                >
                    <MatchDetails />
                    <LatestNews />
                    <ClubImages />
                    <Sponsor />
                    <AddTeam />

                </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    currPage === 'emails'
                    &&
                    <Email />
                }
            </AnimatePresence>
        </div>
    );
}
