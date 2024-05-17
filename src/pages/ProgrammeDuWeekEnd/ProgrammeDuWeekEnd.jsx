import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./ProgrammeDuWeekEnd.css";
import Header from "../../components/Header/Header";
import background from "/background4.png";
import background_mobile from "/background4.png";
import useWindowDimensions from "../../utils/windowSize";
import { isLoggedInContext } from "../../App";
import { toast } from "react-toastify";

export default function ProgrammeDuWeekEnd() {
  const [matches, setMatches] = useState([]);
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
  const { width } = useWindowDimensions();
  const { isAdmin } = useContext(isLoggedInContext);

  useEffect(() => {
    axios
      .get(`${serverURL}/api/matches`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setMatches(response.data);
        } else {
          // Handle case where response is successful but no data found
          toast.info("Aucun match trouvé.");
        }
      })
      .catch((error) => {
        console.log("Error fetching matches:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const status = error.response.status;
          switch (status) {
            case 404:
              toast.error("Aucun match trouvé.");
              break;
            case 500:
              toast.error("Erreur interne du serveur.");
              break;
            default:
              toast.error(
                "Une erreur est survenue lors de la récupération des matchs."
              );
          }
        } else if (error.request) {
          // The request was made but no response was received
          toast.error(
            "Le serveur ne répond pas. Veuillez vérifier votre connexion."
          );
        } else {
          // Something happened in setting up the request that triggered an error
          toast.error(
            "Erreur lors de la configuration de la demande de récupération."
          );
        }
      });
  }, []);

  const handleDeleteMatch = async (match) => {
    // Confirm before deleting
    if (
      window.confirm(`Êtes-vous sûr de vouloir supprimer le match: "${match}"?`)
    ) {
      try {
        const response = await axios.delete(`${serverURL}/api/delete-match`, {
          data: { match },
          withCredentials: true,
        });

        // Check for different status codes and handle appropriately
        if (response.status === 200) {
          alert("Match supprimé avec succès");
          setMatches((currMatches) =>
            currMatches.filter((m) => m.teams !== match)
          );
        } else {
          alert("Réponse inattendue du serveur");
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);

          if (error.response.status === 400) {
            alert("Aucun identifiant de match fourni");
          } else if (error.response.status === 404) {
            alert("Aucun match trouvé avec l’identifiant fourni");
          } else if (error.response.status === 500) {
            alert(
              "Erreur du serveur lors de la tentative de suppression du match"
            );
          } else {
            alert("Une erreur inattendue est survenue");
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
          alert("Pas de réponse du serveur");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error", error.message);
          alert("Erreur lors de l’envoi de la requête");
        }
      }
    }
  };

  return (
    <div className="programme-du-week-end-container">
      <Header />
      {width > 570 ? (
        <img className="background-week-end-program" src={background} />
      ) : (
        <img className="background-week-end-program" src={background_mobile} />
      )}
      <div className="programme-content">
        <h1 className="programme-title">PROGRAMME DU WEEKEND</h1>
        {matches.length > 0 ? (
          <div className="matches-list">
            {matches.map((match, index) => (
              <div key={index} className="match">
                <span className="match-time">{match.time}</span>
                <span className="match-teams">{match.teams}</span>
                {isAdmin && (
                  <span className="match-teams">
                    <button
                      className="delete-button-matches"
                      onClick={() => handleDeleteMatch(match.teams)}
                    >
                      Supprimer
                    </button>
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-matches">
            <p>
              Aucun match n'est programmé pour ce week-end. Restez connectés
              pour des mises à jour !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
