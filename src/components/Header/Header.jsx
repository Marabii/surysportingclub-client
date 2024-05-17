import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, LogOut, UserRound, Menu, X } from "lucide-react";
import useWindowDimensions from "../../utils/windowSize";
import sscLogo from "../../assets/ssc-logo.webp";
import "./Header.css";
import { isLoggedInContext } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn, isAdmin } = useContext(isLoggedInContext);
  const [isHovered, setIsHovered] = useState(false);
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
  const navigate = useNavigate();

  const menuVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    if (isLoggedIn) {
      await axios.get(`${serverURL}/api/logout`, { withCredentials: true });
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const menuLinks = [
    { label: "Accueil", to: "/" },
    { label: "Partenaires", to: "/sponsors" },
    {
      label: "Boutique",
      href: "https://www.surysc.sports-clubs.fr/",
      to: "none",
    },
    { label: "Actualités", to: "/news" },
    { label: "Photos", to: "/photos" },
    { label: "Programme du week-end", to: "/programme-du-weekend" },
    { label: "Equipes", to: "/equipes" },
    { label: "Organigramme du club", to: "/organigramme-du-club" },
    isAdmin && { label: "Panneau d'administration", to: "/admin-panel" },
  ].filter(Boolean); // Filter out undefined or falsy values

  const buttonText = isLoggedIn
    ? isHovered
      ? "Déconnexion"
      : "Connecté"
    : "Connexion";
  const buttonTextColor = !isHovered ? "white" : isAdmin ? "red" : "black";
  const buttonIcon = isLoggedIn && isHovered ? <LogOut /> : <LogIn />;

  return (
    <header>
      <img src={sscLogo} alt="ssc-logo" />
      <div className="header-right-buttons">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ color: buttonTextColor }}
          onClick={handleClick}
        >
          <span>{buttonText}</span>
          <span>{buttonIcon}</span>
        </button>
        <button onClick={handleContact}>
          <span>Contact</span>
          <span>
            <UserRound />
          </span>
        </button>
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <Menu stroke="white" style={{ cursor: "pointer" }} />
        </button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="header-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <button className="close" onClick={() => setShowMenu(false)}>
              <X stroke="white" />
            </button>
            {menuLinks.map((link, index) =>
              link.to !== "none" ? (
                <Link key={index} style={{ all: "unset" }} to={link.to}>
                  <button>{link.label}</button>
                </Link>
              ) : (
                <a href={link.href} key={index}>
                  <button>{link.label}</button>
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
