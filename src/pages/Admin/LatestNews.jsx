import React, { useState, useCallback } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Image } from "lucide-react";
import { useDropzone } from "react-dropzone";
import "react-toastify/dist/ReactToastify.css";

export default function LatestNews() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const serverURL = import.meta.env.VITE_REACT_APP_SERVER;

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && ["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      toast.info(`File ${file.name} accepted.`);
      setUploadProgress(0);
    } else {
      toast.error("Invalid file type. Please upload an image (jpg, png, gif).");
      setImagePreview(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/gif",
  });

  const handleNewsSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload an image file (jpg, png, gif).");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("image", image);
    formDataToSend.append("description", description);

    try {
      const response = await axios.post(
        `${serverURL}/api/addNews`,
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );
      if (response.status === 200) {
        alert("News added successfully!");
        setTitle("");
        setImage(null);
        setDescription("");
        setImagePreview(null);
        setUploadProgress(0);
      } else {
        throw new Error("Failed to add news");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add news. Please try again.");
      setUploadProgress(0);
    }
  };

  return (
    <div className="latest-news-section">
      <h2>Ajouter les dernieres nouvelles</h2>
      <form className="news-form" onSubmit={handleNewsSubmit}>
        <input
          type="text"
          placeholder="Titre"
          className="news-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          {...getRootProps()}
          className="dropzone"
          style={{
            border: "2px dashed #ccc",
            padding: "20px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <input {...getInputProps()} />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "100px",
                objectFit: "cover",
              }}
            />
          ) : isDragActive ? (
            <p>Déposez les fichiers ici...</p>
          ) : (
            <p>
              Faites glisser et déposez quelques fichiers ici, ou cliquez pour
              sélectionner des fichiers
            </p>
          )}
          {!imagePreview && (
            <Image size={48} style={{ position: "relative", top: "13px" }} />
          )}
        </div>
        <textarea
          placeholder="Description"
          className="news-description"
          rows="4"
          cols="50"
          style={{ height: "150px", overflowY: "scroll" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="submit-news">
          Ajouter la nouvelle
        </button>
        {uploadProgress > 0 && (
          <div style={{ width: "100%", backgroundColor: "#ddd" }}>
            <div
              style={{
                height: "20px",
                backgroundColor: "green",
                width: `${uploadProgress}%`,
              }}
            ></div>
          </div>
        )}
      </form>
      <ToastContainer />
    </div>
  );
}
