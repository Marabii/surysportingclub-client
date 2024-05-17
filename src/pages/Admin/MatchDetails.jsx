import React, { useState } from "react";
import axios from "axios";

export default function MatchDetails() {
  const [matchTime, setMatchTime] = useState("");
  const [matchTeams, setMatchTeams] = useState("");

  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

  // Function to check if the time is in the correct format
  const isValidTimeFormat = (time) => {
    const regex = /^\d{1,2}:\d{2}\s(?:AM|PM)$/i;
    return regex.test(time);
  };

  const handleMatchSubmit = async (event) => {
    event.preventDefault();

    if (!isValidTimeFormat(matchTime)) {
      alert('Invalid time format. Please use "Number:Number AM or PM".');
      return;
    }
    if (!matchTeams.trim()) {
      alert("Please fill in the teams field.");
      return;
    }

    const formDataToSend = {
      time: matchTime,
      teams: matchTeams,
    };

    try {
      const response = await axios.post(
        `${serverURL}/api/addMatch`,
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Match added successfully!");
        setMatchTime("");
        setMatchTeams("");
      } else {
        throw new Error("Failed to add match");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add match. Please try again.");
    }
  };

  return (
    <div className="matches-section">
      <h2>Add Match Details</h2>
      <form className="match-form" onSubmit={handleMatchSubmit}>
        <input
          type="text"
          placeholder="Time (e.g., 10:00 AM)"
          className="match-time"
          value={matchTime}
          onChange={(e) => setMatchTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teams (e.g., Team A vs Team B)"
          className="match-teams"
          value={matchTeams}
          onChange={(e) => setMatchTeams(e.target.value)}
          required
        />
        <button type="submit" className="submit-match">
          Add Match
        </button>
      </form>
    </div>
  );
}
