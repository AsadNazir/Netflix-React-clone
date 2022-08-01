import React, { useEffect, useState } from "react";
import instance from "../axios.js";
import Request from "../request";
import "./banner.css";
import "./mediaQueries.css";
import FadeBottom from "./FadeBottom";

const baseImgURL = `https://image.tmdb.org/t/p/original`;

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [movieBackground, setMovieBackground] = useState(
    screen.width > 450 ? movie.backdrop_path : movie.poster_path
  );
  useEffect(() => {
    async function fetchMovie() {
      const request = await instance.get(Request.Netflix_Originals);
      const data = request.data.results;
      setMovie(data[Math.ceil(Math.random() * (data.length - 1) + 1)]);
      setMovieBackground(
        screen.width > 450 ? movie.backdrop_path : movie.poster_path
      );
    }

    fetchMovie();
  }, []);

  function truncateText(text, no) {
    if (screen.width > 450) {
      return text.substr(0, no) + " ...";
    }

    return text.substr(0, no - 15) + " ...";
  }

  window.addEventListener("resize", () => {
    setMovieBackground(
      screen.width > 450 ? movie.backdrop_path : movie.poster_path
    );

  });
  return (
    <div
      className="banner"
      id="top"
      style={{
        backgroundImage: `url(${baseImgURL}${
          movieBackground ? movieBackground : movie.poster_path
        })`,
      }}
    >
      <div className="overlay"></div>
      <div className="bannerContent">
        <h1>{movie.name}</h1>
        <div>
          <button>Click Me</button>
          <button>Press Me</button>
        </div>
        <p>
          {movie.overview ? truncateText(movie.overview, 200) : movie.overview}
        </p>
      </div>
      <FadeBottom />
    </div>
  );
}
