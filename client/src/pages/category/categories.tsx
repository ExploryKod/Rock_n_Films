import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import { MovieCard } from '../../components/movie-card/movie-card';
import NotFoundPage from '../notFoundPage';
import { removeAccent } from '../../utils/dataValidation/stringValidation.utils';
import './category.css';

const TMBD_API_KEY = process.env.TMDB_API_KEY;
const API_KEY = "deccc6efb2fb370e20744304c0eac99b";
const movie = { id: 157336, title: "Protéines", route: 'movies/proteines' };
    
export const Category = () => {

    const [categoriesData, setCategoriesData] = useState<any>({});
    let { category } = useParams();
    const [products, setProducts] = useState(categoriesData);
    // https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&&language=en-US


    useEffect(() => {
       
        const fetchDataTendance = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&primary_release_year=2020&sort_by=popularity.desc&api_key=${API_KEY}`); 
                const data = await response.json();
                console.log('film', data);
                setCategoriesData(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=${API_KEY}&&language=en-US`); 
                const data = await response.json();
                console.log('film', data);
                setCategoriesData(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
    
        if(category === 'tendances') {
            fetchDataTendance()
        } else if(category === 'lesprimes') {
            fetchCategories()
        }
    }, [category])

    let categories = ['tendances', 'lesprimes','mesfavoris']

    useEffect( () => {
        setProducts(categoriesData);
    }, [category, categoriesData])
   
    category = removeAccent(category?.toLowerCase());

    let imageUrl:any = null;

    // console.log('filmprod', products.results)
 
    return(
        <Fragment>
            {category && categories.includes(category.toLowerCase().replace(" ","")) ?
                (<h2 className='category-title'>{category!.toUpperCase()}</h2>) : (<NotFoundPage category={category}/>)}
             {category && categories.includes(category.toLowerCase().replace(" ","")) &&
            <div className='category-container product-container'>
                {}
                {((!products.results)) ? (
                <p className="category-text">Il n'y a pas de films de cette catégorie pour le moment.</p>
                ) : (
                    products.results.map((result:any, index:number) => (
                        <MovieCard key={index} product={result} category={category} imageUrl={imageUrl} />
                    ))
                )}
            </div>}
        </Fragment>
    )
}