import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from 'react';

const Description = () => {
  const data = useSelector((state) => state.news.data);
  console.log(data);

  return (
    <div className="description-container mx-4 my-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold mb-6">{data[0].title}</h1>
      <div className="flex flex-col md:flex-row items-center p-6">
        <div className="md:w-2/3 p-4 text-lg leading-relaxed">
          <p className="mb-4 text-gray-700"><strong>Author:</strong> {data[0].author}</p>
          <p className="mb-4 text-gray-700"><strong>Published At:</strong> {new Date(data[0].publishedAt).toLocaleString()}</p>
          <p className="mb-6 text-gray-700">{data[0].description}</p>
          <p className="text-gray-700">{data[0].content}</p>
        </div>
        <img
          className="m-4 h-auto max-w-full md:max-w-xs rounded-lg shadow-lg"
          src={data[0].urlToImage}
          alt="news"
        />
      </div>
      <div className="text-center mt-6">
        <Link to={data[0].url} target="_blank" className="text-blue-500 hover:underline">
          Read full article
        </Link>
      </div>
    </div>
  );
};

export default Description;
