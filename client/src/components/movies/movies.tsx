import React, { useEffect, useState } from 'react';
import MovieItem from '../movie/movieItem';
import './movies.css';
import { FetchData } from '../../utils/dataRequests/fetchData';

const TMBD_API_KEY = process.env.TMDB_API_KEY;
const API_KEY = "deccc6efb2fb370e20744304c0eac99b";

const Movies = () => {

    const categories = [
        { id: 1, serie:"", title: "Tendances", imageUrl: "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", route: 'movies/tendances' },
    
        { id: 2, serie:"", title: "Les primés", imageUrl: "https://images.pexels.com/photos/2098604/pexels-photo-2098604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", route:'movies/lesprimes' },
    
        { id: 3, serie:"", title: "Mes Favoris", imageUrl: "https://images.pexels.com/photos/7234275/pexels-photo-7234275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", route: 'movies/mesfavoris' },
      ];
    

    return (

        <div className="categories-container">
            {categories.map( ( item ) => (
                <MovieItem key={item.id} category={item} /> ))}
        </div>
    )
}

export default Movies;
