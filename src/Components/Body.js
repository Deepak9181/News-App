import Card from "./Card";
import React, { useEffect, useState } from "react";

const Body = () => {
  const [NewsInfo, setNewsInfo] = useState(null);
  const [news, setNews] = useState("All");

  const fetchNews = async (category) => {
    const Api = `https://newsapi.org/v2/everything?q=${category}&from=2024-09-26&to=2024-09-26&sortBy=popularity&apiKey=8181d817fc3a47ee96e727634e0d2897`;
    try {
      const data = await fetch(Api);
      const json = await data.json();

      // Log the response for debugging purposes
      console.log(json);

      // Check if the response contains the articles array
      if (json && json.articles) {
        setNewsInfo(json);
      } else {
        setNewsInfo({ articles: [] }); // Fallback to an empty array if no articles found
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsInfo({ articles: [] }); // Set empty array in case of an error
    }
  };

  useEffect(() => {
    fetchNews(news);
  }, [news]);

  // If no news info or no articles, show a loading or error message
  if (!NewsInfo || !NewsInfo.articles) {
    return (
      <div className="Card-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  const filteredArticles = NewsInfo.articles.filter(
    (article) =>
      article.source.id &&
      article.title &&
      article.urlToImage &&
      article.description
  );

  return (
    <div className="body-container p-6">
      <select
        className="dropdown ml-5 border-2 border-black rounded-lg px-4 py-2 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(event) => {
          let category = event.target.value;
          setNews(category);
        }}
      >
        <option value="All">All</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Card key={article.title} Data={article} />
          ))
        ) : (
          <h2>No articles found for this category</h2>
        )}
      </div>
    </div>
  );
};

export default Body;

