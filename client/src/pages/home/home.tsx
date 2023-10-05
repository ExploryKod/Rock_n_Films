import { Outlet } from 'react-router-dom';

import Movies from "../../components/movies/movies";

const Home = () => {

  return (
    <div>
    <Movies/>
    <Outlet/>
    </div>
  );
};

export default Home;