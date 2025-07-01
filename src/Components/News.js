import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/news")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch DRDO news:", err.message);
        setError("DRDO news currently unavailable.");
      });
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-title">📰 DRDO News</h2>
      <div className="news-list">
        {error ? (
          <p>{error}</p>
        ) : (
          articles.slice(0, 5).map((article, idx) => (
            <div key={idx} className="news-item">
              <a href={article.url} target="_blank" rel="noreferrer">
                <h4>{article.title}</h4>
              </a>
              <p>{article.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default News;
