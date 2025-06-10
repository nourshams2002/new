import React, { useState } from "react";
import { uploadMedia } from "../services/mediaService";

interface MediaUploadProps {
  onUploadSuccess: () => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onUploadSuccess }) => {
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      await uploadMedia(file);
      setShowModal(false);
      onUploadSuccess();
      // Reset the input
      event.target.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {/* Floating upload button */}
      <button
        className="upload-button"
        onClick={() => setShowModal(!showModal)}
        disabled={uploading}
      >
        {uploading ? "⏳" : "+"}
      </button>

      {/* Upload modal */}
      {showModal && (
        <div className="upload-modal">
          <button
            className="close-button"
            onClick={() => setShowModal(false)}
          >
            ✕
          </button>
          <h3>Upload Media</h3>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleUpload}
            disabled={uploading}
          />
          {uploading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Uploading...</p>
            </div>
          )}
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </>
  );
};

export default MediaUpload;