import { Link } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import './categories-preview.css';
import { removeAccent } from '../../utils/dataValidation/stringValidation.utils';

export const CategoryPreview = ({ title, categories, products }: any) => {

    return(
        <div className='category-preview-container'>
            <h2>
                <Link  className='title' to={removeAccent(title.toLowerCase())}>
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className='preview'>
                <MovieCard product={products} category={categories}/>
            </div>
        </div>
 
    )
}

export default CategoryPreview;