import React, { useState, useEffect } from "react";
import "./row.css";
import instance from "../axios.js";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseImgURL = `https://image.tmdb.org/t/p/original`;
export default function Row({ title, fetchURL, large }) {
  const [movies, setMovies] = useState([]);
  const [movieUrl, setMovieUrl] = useState("");
  const opt = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      // console.log(request.data.results);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, []);

  const handleMovieClick = (movie) => {
    if (movieUrl) {
      setMovieUrl("");
     
      
    } else {
      movieTrailer(movie.name == undefined ? movie.title : movie.name)
      .then((url) => {
          document.querySelector(".youtubeSection")
          console.log(url);
          const urlParam = new URLSearchParams(new URL(url).search).get("v");
          setMovieUrl(urlParam);
        
        })
        .catch(() => {
          console.log("Error");
        });
    }
  };

  return (
    <div>
      {/* Title Sections */}
      <h1 id="rowTitle">{title}</h1>
      <div className={`row-cont`}>
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                handleMovieClick(movie);
              }}
              key={movie.id}
              src={`${baseImgURL}${
                large ? movie.poster_path : movie.backdrop_path
              }`}
              alt="something"
              className={large ? "large-row" : "small-row"}
            ></img>
          );
        })}
      </div>
      {movieUrl && (
        <Youtube videoId={movieUrl} opts={opt} />
      )}
    </div>
  );
}
