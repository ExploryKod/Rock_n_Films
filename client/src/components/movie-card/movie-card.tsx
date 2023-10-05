import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './movie-card.css';
import { removeAccent } from '../../utils/dataValidation/stringValidation.utils';
import { CartContext } from '../../context/cart.context';

export const MovieCard = ({ product, category, imageUrl }: any) => {
    console.log('product', product)
    let { original_title, id, poster_path, release_date} = product;
  
    const { addItemToCart } = useContext(CartContext);
    
    const addProductToCart = () => addItemToCart(product);

    if(original_title && poster_path){
      imageUrl = `https://image.tmdb.org/t/p/w200/${poster_path}`;
    }

    const standardImage = 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    return (
        <>
        {original_title &&
        <div className={`product-card-container card-${original_title}`}>
        {category && imageUrl ? (<img src={imageUrl} alt={`${removeAccent(original_title)}`} />) : (<img src={standardImage} alt="" />)}
            <div className='footer'>
                <span className='product-name'>{original_title}</span>
            </div>
            <button>
                <Link style={{display: 'block', height: '100%', textDecoration: "none"}} to={id.toString()}>En savoir plus</Link>
            </button>
           
        </div>}</>);

}

export default MovieCard;