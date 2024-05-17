import React, { useState, useEffect, useContext } from "react";
import "./News.css";
import Header from "../../components/Header/Header";
import axios from "axios";
import background from "/background.png";
import background_mobile from "/background.png";
import { isLoggedInContext } from "../../App";
import useWindowDimensions from "../../utils/windowSize";

export default function News() {
  const [news, setNews] = useState([]);
  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;
  const { isAdmin } = useContext(isLoggedInContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(`${serverURL}/api/get-news`);
        const data = response.data;
        setNews(data);
      } catch (e) {
        console.error(e);
      }
    };
    getNews();
  }, []);

  const handleDelete = async (title) => {
    if (
      window.confirm(
        `Are you sure you want to delete the news item: "${title}"?`
      )
    ) {
      try {
        await axios.delete(`${serverURL}/api/delete-news`, {
          data: { title },
          withCredentials: true,
        });
        setNews((currentNews) =>
          currentNews.filter((newsItem) => newsItem.title !== title)
        );
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (!news.length) {
    return (
      <div className="news-container">
        {width > 700 ? (
          <img
            src={background}
            alt="background"
            className="background-news-container"
          />
        ) : (
          <img
            src={background_mobile}
            alt="background"
            className="background-news-container"
          />
        )}
        <Header />
        <div className="no-news-message">
          <p>Aucune actualité à afficher pour le moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-container">
      {width > 700 ? (
        <img
          src={background}
          alt="background"
          className="background-news-container"
        />
      ) : (
        <img
          src={background_mobile}
          alt="background"
          className="background-news-container"
        />
      )}
      <Header />
      <div className="news-cards-container">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <img
              src={`${serverURL}/news/news-photos/${item["imageName"]}`}
              alt={item.title}
              loading="lazy"
            />
            <div className="news-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {isAdmin && (
                <button
                  onClick={() => handleDelete(item.title)}
                  className="delete-button-matches"
                >
                  Supprimer
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
