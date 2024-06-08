import React, { useEffect, useState } from "react";
import "./landingPage.css";
import Header from "../../components/Header/Header";
import useWindowDimensions from "../../utils/windowSize";
import SponsorsSection from "../../components/Sponsors/Sponsors";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import imagePart1 from "../../assets/image-part1.jpg";
import imagePart2 from "../../assets/image-part2.jpg";
import imagePart3 from "../../assets/image-part3.jpg";
import background2 from "/background2.png";
import background3 from "/background3.png";
import background4 from "/background4.png";
import background5 from "/background5.png";
import background6 from "/background6.png";
import { HeartPulse, Handshake } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export default function LandingPage() {
  const { width } = useWindowDimensions();
  const landingPageHeight = (width * 1828) / 3200;
  const [formData, setFormData] = useState();
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleNewsletterSubmit = async () => {
    try {
      const response = await axios.post(
        `${serverURL}/api/subscribeToNewsletter`,
        formData
      );
      console.log(response.data);
      alert(
        "Subscription successful! Thank you for subscribing to our newsletter."
      );
    } catch (e) {
      if (e.response) {
        // Check if the response from the server is available and handle specific status codes
        switch (e.response.status) {
          case 409:
            alert("L'adresse e-mail est déjà abonnée à la newsletter.");
            break;
          case 500:
            alert(
              "Un problème technique est survenu. Veuillez réessayer plus tard."
            );
            break;
          default:
            alert(
              "Nous sommes désolés, mais nous n'avons pas pu traiter votre demande. Veuillez réessayer plus tard."
            );
            break;
        }
      } else {
        // This will handle cases where the error is due to network issues or absence of a response
        alert(
          "Erreur de connexion. Veuillez vérifier votre connexion réseau et réessayer."
        );
      }
    }
  };

  return (
    <>
      <motion.div className="landing-page">
        <motion.div
          className="landing-page-top"
          style={{ height: landingPageHeight }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            SURY SPORTING CLUB
          </motion.h1>
        </motion.div>
        <div className="landing-page-bottom">
          <motion.section
            className="part-1 landing-page-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={background2}
              className="background-landing-page-section"
            />
            <motion.div variants={itemVariants}>
              <h2>Vivez l'aventure ultime du club de sport</h2>
              <p>
                Rejoignez-nous et découvrez un monde de sport et d'excitation.
              </p>
              <div>
                <button
                  onClick={() => navigate("/register")}
                  className="signup"
                >
                  S'inscrire
                </button>
              </div>
            </motion.div>
            <motion.img src={imagePart1} alt="part-1" className="img-section" />
          </motion.section>
          <motion.section
            className="part-2 landing-page-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={background3}
              className="background-landing-page-section"
            />
            <motion.div variants={itemVariants}>
              <h2>
                Découvrez l'histoire riche et les réalisations remarquables de
                notre club.
              </h2>
              <p>
                Notre club de football de Sury a une histoire riche depuis sa
                fondation en 1917, marquée par des succès, des défis et des
                moments mémorables.
              </p>
              <div>
                <Link to="/history">
                  <button className="explore">Explorer</button>
                </Link>
              </div>
            </motion.div>
            <motion.img
              src={imagePart2}
              alt="histoire du club"
              className="img-section"
            />
          </motion.section>
          <motion.section
            className="part-3 landing-page-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={background4}
              className="background-landing-page-section"
            />
            <motion.div variants={itemVariants}>
              <section>
                <motion.h2>
                  Découvrez les avantages de rejoindre notre club de sport.
                </motion.h2>
                <motion.p>
                  En rejoignant notre club de sport, vous profiterez d'une gamme
                  d'avantages.
                </motion.p>
              </section>
              <div>
                <div>
                  <HeartPulse fill="black" size={40} stroke="white" />
                  <h3>Santé</h3>
                  <p>
                    Améliorez votre bien-être physique grâce à l'exercice
                    régulier et aux activités sportives.
                  </p>
                </div>
                <div>
                  <Handshake fill="black" size={40} stroke="white" />
                  <h3>Communauté</h3>
                  <p>
                    Connectez-vous avec des personnes partageant les mêmes
                    intérêts que vous.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.img src={imagePart3} alt="ad" className="img-section" />
          </motion.section>
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="part-4 landing-page-section"
          >
            <img
              src={background5}
              className="background-landing-page-section"
            />
            <div>
              <h2>Découvrez le meilleur club de sport de la ville</h2>
              <p>
                Dans notre club sportif, nous vous proposons une large gamme de
                services pour répondre à tous vos besoins sportifs. Des séances
                de formation de premier ordre à la location d’équipement et à
                l’organisation d’événements, nous avons tout.
              </p>
            </div>
            <div>
              <div>
                <img src={imagePart1} className="img-section" />
                <h3>Séances de formation professionnelle</h3>
                <p>Join our training sessions led by experienced coaches.</p>
              </div>
              <div>
                <img src={imagePart2} className="img-section" />
                <h3>Location d'équipement</h3>
                <p>
                  Louez du matériel sportif de haute qualité pour vos matchs.
                </p>
              </div>
              <div>
                <img src={imagePart3} className="img-section" />
                <h3>Hébergement d'événements</h3>
                <p>
                  Host your sports events at our state-of-the-art facilities.
                </p>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="part-5 landing-page-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={background6}
              className="background-landing-page-section"
            />
            <motion.div variants={itemVariants}>
              <h2>Abonnez-vous à notre newsletter</h2>
              <p>
                Restez informé des dernières nouvelles, offres et mises à jour.
              </p>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleNewsletterSubmit();
                  }}
                >
                  <input
                    type="text"
                    name="email"
                    placeholder="Ecrivez Votre Email Ici"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <button className="explore" type="submit">
                    Rejoignez-nous
                  </button>
                </form>
              </div>
              <p>En vous inscrivant, vous acceptez nos conditions générales.</p>
            </motion.div>
          </motion.section>
          <SponsorsSection windowWidth={width} />
        </div>
      </motion.div>
    </>
  );
}
