import React, { useState, useEffect, useContext } from "react";
import "./TeamPresentation.css";
import Header from "../../components/Header/Header";
import background from "/background10.png";
import background_mobile from "/background10.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { isLoggedInContext } from "../../App";
import useWindowDimensions from "../../utils/windowSize";

export default function TeamPresentation() {
  const [teamDetails, setTeamDetails] = useState();
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
  const ageCategory = useParams().id.split("-");
  const navigate = useNavigate();
  const { isAdmin } = useContext(isLoggedInContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getTeamsData = async () => {
      try {
        const result = await axios.get(`${serverURL}/api/getTeamsData`);
        const data = result.data.filter((team) => {
          return team.name == ageCategory[0] && team.gender == ageCategory[1];
        })[0];
        setTeamDetails(data);
      } catch (e) {
        console.error(e);
        alert("Oops, we can't get the teams data");
      }
    };

    getTeamsData();
  }, []);

  if (!teamDetails) {
    return <div>Loading...</div>;
  }

  const handleTeamDelete = async (title) => {
    if (
      window.confirm(`Are you sure you want to delete this team: "${title}"?`)
    ) {
      try {
        await axios.delete(`${serverURL}/api/delete-team`, {
          data: { title },
          withCredentials: true,
        });
        navigate("/equipes");
      } catch (e) {
        console.error(e);
      }
    }
  };

  const imgVar = teamDetails.name.split(" ").join("_");
  const imageSRC = `${imgVar.toLowerCase()}.png`;

  return (
    <div className="team-page">
      {width > 700 ? (
        <img src={background} className="team-page-background" />
      ) : (
        <img src={background_mobile} className="team-page-background" />
      )}
      <Header />
      <img
        src={`${serverURL}/teamsData/TeamsPhotos/${imageSRC}`}
        alt={`${teamDetails.name} Team`}
        className="team-photo"
      />
      <div className="team-content">
        <h1 className="team-name">Equipe : {teamDetails.name}</h1>
        {teamDetails.roles.map((role, index) => (
          <div key={index} className="team-role">
            <strong>{role.title}: </strong>
            {role.name}
          </div>
        ))}
        <div className="team-info">
          <p>
            <strong>Effectif:</strong> {teamDetails.effectif}
          </p>
          <p>
            <strong>Nombre d’équipes:</strong> {teamDetails.nombreEquipes}
          </p>
          <p>
            <strong>Année de naissance des joueurs:</strong>{" "}
            {teamDetails.anneeNaissance}
          </p>
          <p>
            <strong>Séances d’entraînement:</strong> {teamDetails.seances}
          </p>
          <p>
            <strong>Matchs:</strong> {teamDetails.matches}
          </p>
        </div>
        <blockquote className="coach-message">
          {teamDetails.motDesCoaches
            ? teamDetails.motDesCoaches
            : "Ce champs n'est pas rempli"}
        </blockquote>
        {isAdmin && (
          <button
            className="delete-button-team"
            onClick={() => handleTeamDelete(teamDetails.name)}
          >
            Supprimer
          </button>
        )}
      </div>
    </div>
  );
}
