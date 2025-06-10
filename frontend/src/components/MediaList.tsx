import { useEffect, useState } from "react";
import MediaItem from "./MediaItem";
import { fetchMedia, Media } from "../services/mediaService";

const MediaList: React.FC = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMedia = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMedia();
      setMedia(data);
    } catch (error) {
      console.error("Error loading media:", error);
      setError("Failed to load media");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loading-spinner"></div>
        <p>Loading media...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={loadMedia} className="button button-primary">
          Retry
        </button>
      </div>
    );
  }

  if (media.length === 0) {
    return (
      <div className="empty-state">
        <p>No media found</p>
        <p>Upload some images or videos to get started!</p>
      </div>
    );
  }

  return (
    <div className="media-grid">
      {media.map((item) => (
        <MediaItem key={item._id} {...item} onDelete={loadMedia} />
      ))}
    </div>
  );
};

export default MediaList;