import { Routes, Route } from 'react-router-dom';
import { CategoriesPreview }  from '../category/categories-preview.route';
import { Category } from '../category/categories';
import './shop.css';

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>} />
        </Routes>
    );
};

export default Shop;