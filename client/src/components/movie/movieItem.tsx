import React from 'react';
import { useNavigate } from 'react-router-dom';


const MovieItem = ({ category } : any) => {
  // We need image url so we pass it through props (here ou directly in parenthesis of the function)
  const { imageUrl, title, route, id, serie } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div className={`main-category-container card-${id}`} onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Decouvrir</p>
      </div>
    </div>
  );
};

export default MovieItem;