import React, { useState } from "react";
import { likeMedia, unlikeMedia, deleteMedia } from "../services/mediaService";

interface MediaItemProps {
  _id: string;
  filename: string;
  filepath: string;
  type: "image" | "video";
  likes: number;
  onDelete: () => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
  _id,
  filename,
  filepath,
  type,
  likes: initialLikes,
  onDelete,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleLike = async () => {
    try {
      if (isLiked) {
        await unlikeMedia(_id);
        setLikes((prev) => prev - 1);
      } else {
        await likeMedia(_id);
        setLikes((prev) => prev + 1);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        setIsDeleting(true);
        await deleteMedia(_id);
        setTimeout(() => {
          onDelete();
        }, 500);
      } catch (error) {
        console.error("Error deleting item:", error);
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className={`media-item ${isDeleting ? "deleting" : ""}`}>
      <div className="media-header">
        <h3 className="media-title">{filename}</h3>
        <button
          className="delete-button"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          🗑️
        </button>
      </div>

      <div className="media-content">
        {type === "image" ? (
          <img
            src={`http://localhost:4000${filepath}`}
            alt={filename}
          />
        ) : (
          <video controls>
            <source src={`http://localhost:4000${filepath}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="media-info">
        <div className="media-stats">
          <div className="action-buttons">
            <button
              className={`button ${
                isLiked ? "button-primary" : "button-secondary"
              }`}
              onClick={handleLike}
            >
              {isLiked ? "❤️" : "🤍"} {likes}
            </button>
          </div>
          <span className="file-info">{type.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;