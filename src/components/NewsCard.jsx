import React from "react";
import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    id,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
    others
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl  my-6">
      
      {/* Header */}
      <div className="flex bg-base-300 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-600">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img src={thumbnail_url} alt={title} className="w-full h-64 object-cover p-4 rounded-3xl" />
      </figure>

      {/* Body */}
      <div className="card-body ">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-gray-600">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <Link to={`/news-details/${id}`} className="text-primary cursor-pointer font-semibold">
            {" "}
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="mt-2 text-sm text-gray-500">
          Tags:{" "}
          {tags?.map((tag, i) => (
            <span key={i} className="badge badge-outline mx-1">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <div className="flex items-center gap-2 text-orange-500">
            <FaStar /> <span className="font-semibold">{rating.number}</span>
            <span className="badge badge-warning badge-sm">{rating.badge}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>

        {/* Extra Flags */}
        {others?.is_trending && (
          <div className="mt-2">
            <span className="badge badge-error">🔥 Trending</span>
          </div>
        )}
        {others?.is_today_pick && (
          <div className="mt-1">
            <span className="badge badge-info">⭐ Today's Pick</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
