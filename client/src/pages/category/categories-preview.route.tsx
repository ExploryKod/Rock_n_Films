import { useState, useEffect, Fragment, useContext } from 'react';
import { CategoryPreview } from '../../components/category/categories-preview.components';
import { CategoriesContext } from '../../context/categories.context';
import { removeAccent } from '../../utils/dataValidation/stringValidation.utils';

const API_KEY = 'deccc6efb2fb370e20744304c0eac99b';

const categoriesFilm = [
  { id: 1, title: "Tendances", imageUrl: "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", route: 'movies/tendances' },

  { id: 2, title: "Les primés", imageUrl: "https://images.pexels.com/photos/2098604/pexels-photo-2098604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", route:'movies/primes' },

  { id: 3, title: "Mes Favoris", imageUrl: "https://images.pexels.com/photos/7234275/pexels-photo-7234275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", route: 'movies/favoris' },
];

export const CategoriesPreview = () => {
    const [categories, setCategories] = useState(categoriesFilm);
    const [productsByCategory, setProductsByCategory] = useState([]);
    let category = 'tendances';

    useEffect(() => {
        const fetchProductByCategory = async () => {
          try {
            const response = await fetch(`http://localhost:5000/products/${category}`);
            if (response.ok) {
              const data = await response.json();
              setProductsByCategory(data)
            } else {
              console.error('Error fetching product by category:', response.status);
            }
          } catch (error) {
            console.error('Error fetching product by category:', error);
          }
        };
    
        fetchProductByCategory();
      }, [category]);



    useEffect( () => {
        setCategories(categoriesFilm);
    },[])

    return (
        <Fragment>
            {categories.map((item, index) =>{
                return <CategoryPreview key={index} title={item.title} categories={categories} products={productsByCategory}/>
            })}
        </Fragment>
    );
};