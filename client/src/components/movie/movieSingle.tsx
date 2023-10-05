import React, {useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//  TODO - fetcher les détails de la movie via l'API via son id et mettre l'API KEY dans un fichier .env !
const API_KEY = "deccc6efb2fb370e20744304c0eac99b";
const MovieSingle = ({ category } : any) => {
  // We need image url so we pass it through props (here ou directly in parenthesis of the function)
  const { imageUrl, title, route, id, serie } = category;
  const movieID: any = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
     
      const fetchDataTendance = async () => {
          try {
              const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`); 
              const data = await response.json();
              console.log('film', data);
              setMovieData(data);
          } catch (error) {
              console.error("Error fetching categories:", error);
          }
      };

      fetchDataTendance();

    }, [movieID]);

  const onNavigateHandler = () => navigate(route);

  return (
    <div className={`main-category-container card-${movieID}`} onClick={onNavigateHandler}>
      <div
        className="background-image"
      />
      <div className="body">
        <h2>titre</h2>
        <p>Decouvrir</p>
      </div>
    </div>
  );
};

export default MovieSingle;