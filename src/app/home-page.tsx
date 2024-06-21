import { useEffect, useState } from "react";
import { Film } from "./film.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./home-page.scss";

export function HomePage() {
  const [films, setFilms] = useState<Film[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  const handleNavigate = (filmId: string) => {
    navigate(filmId);
  };

  return (
    <div className="home-page">
      <h1>Ghibli Films</h1>
      <div className="films-grid">
        {films.map((film) => (
          <div
            key={film.id}
            className="film-item"
            onClick={() => handleNavigate(film.id)}
          >
            <img src={film.image} alt={film.title} />
            <p>{film.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
