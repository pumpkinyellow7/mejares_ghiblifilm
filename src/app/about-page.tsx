import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./about-page.scss";

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film | null>(null);

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data));
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  if (!filmDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about-page">
      <h1>{filmDetails.title}</h1>
      <img src={filmDetails.movie_banner} alt={filmDetails.title} className="film-banner" />
      <p><strong>Director:</strong> {filmDetails.director}</p>
      <p><strong>Producer:</strong> {filmDetails.producer}</p>
      <p><strong>Release Date:</strong> {filmDetails.release_date}</p>
      <p><strong>Running Time:</strong> {filmDetails.running_time} minutes</p>
      <p><strong>Rating:</strong> {filmDetails.rt_score}</p>
      <p>{filmDetails.description}</p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default AboutPage;
