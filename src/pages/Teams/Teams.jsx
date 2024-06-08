import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Teams.css";
import Header from "../../components/Header/Header";
import background from "/background5.png";
import { Link } from "react-router-dom";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

  useEffect(() => {
    const getTeamsData = async () => {
      try {
        const result = await axios.get(`${serverURL}/api/getTeamsData`);
        const data = result.data.map((team) => ({
          name: team.name,
          gender: team.gender,
        }));
        setTeams(data);
      } catch (e) {
        console.error(e);
        alert("Oops, we can't get the teams data");
      }
    };

    getTeamsData();
  }, []);

  if (!teams.length) {
    return <div>Loading...</div>;
  }

  // Split teams by gender
  const maleTeams = teams.filter((team) => team.gender === "M");
  const femaleTeams = teams.filter((team) => team.gender === "F");

  return (
    <div className="teams-page">
      <img
        src={background}
        alt="Dynamic Soccer Background"
        className="background-image-teams"
      />
      <Header />
      <h1>Equipes</h1>
      <div className="teams-container">
        <div className="gender-section">
          <h2>Équipes Masculines</h2>
          <div>
            {maleTeams.map((team, index) => (
              <Link
                key={index}
                to={`/equipes/${team.name}-${team.gender}`}
                className="team-button"
              >
                <div>{team.name}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="gender-section">
          <h2>Equipes Féminines</h2>
          <div>
            {femaleTeams.map((team, index) => (
              <Link
                key={index}
                to={`/equipes/${team.name}-${team.gender}`}
                className="team-button"
              >
                <div>{team.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
