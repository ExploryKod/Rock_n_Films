import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Movies from "./components/movies/movies";
import ApiLogin from "./pages/apiLogin/ApiLogin";
import Shop from "./pages/shop/shop";
import Navigation from "./pages/navigation/navigation";
import NotFoundPage from './pages/notFoundPage';
import Connexion from './pages/connexion/connexion';
import Search from './pages/Search';
// import NotFoundPage from './routes/notFoundPage';

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='movies/*' element={<Shop />} />
        <Route path='apiLogin' element={<ApiLogin />} />
       
  
        <Route path='connexion' element={<Connexion />} />
        <Route path='*' element={<NotFoundPage category={""} />} />
      </Route>
    </Routes>

    <Routes>
      <Route path='/' element={<Search />}/>


    </Routes>
    </>

  );
};

export default App;

