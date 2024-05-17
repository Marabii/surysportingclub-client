import React, { useState, useEffect } from "react";
import "./Sponsors.css";
import axios from "axios";
import Header from "../../components/Header/Header";
import useWindowDimensions from "../../utils/windowSize";

import background from "/background4.png";
import background_mobile from "/background4.png";

export default function Photos() {
  const [sponsors, setSponsors] = useState({
    mainSponsors: [],
    secondarySponsors: [],
  });
  const { width } = useWindowDimensions();
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

  useEffect(() => {
    const getImages = async () => {
      try {
        const mainSponsorsResponse = await axios.get(
          `${serverURL}/api/getSponsors/query?category=mainSponsors`
        );
        const secondarySponsorsResponse = await axios.get(
          `${serverURL}/api/getSponsors/query?category=secondarySponsors`
        );
        setSponsors({
          mainSponsors: mainSponsorsResponse.data,
          secondarySponsors: secondarySponsorsResponse.data,
        });
      } catch (e) {
        console.error(e);
      }
    };
    getImages();
  }, []);

  const imageSrc = (category, name) =>
    `${serverURL}/sponsors/${category}/${name}`;

  return (
    <>
      <Header />
      {width > 470 ? (
        <img className="background-container" src={background} />
      ) : (
        <img className="background-container" src={background_mobile} />
      )}
      <div className="sponsor-section main">
        <h2>Sponsors Principaux</h2>
        <div className="sponsor-container">
          {sponsors.mainSponsors.map((name, index) => (
            <div className="sponsor-image" key={`main-${index}`}>
              <img
                src={imageSrc("mainSponsors", name)}
                alt={`Main sponsor ${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="sponsor-section secondary">
        <h2>Sponsors Secondaires</h2>
        <div className="sponsor-container">
          {sponsors.secondarySponsors.map((name, index) => (
            <div className="sponsor-image" key={`main-${index}`}>
              <img
                src={imageSrc("secondarySponsors", name)}
                alt={`Main sponsor ${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
