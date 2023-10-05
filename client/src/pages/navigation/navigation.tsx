import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./navigation.css";
// import logo from '../assets/logo.png';


const Navigation = () => {

    return (
        <Fragment>
            <div className='navigation'>
                <div className='logo-container'>
                    <Link to="/"><img src={"https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt='logo' className='logo'></img></Link>
                </div>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        ACCUEIL
                    </Link>
                    <Link className='nav-link' to='/movies'>
                        MOVIES
                    </Link>
                    <Link className='nav-link' to='/connexion'>
                        MON COMPTE
                    </Link>
                </div>
            </div>

            <Outlet />

        </Fragment>
    )
}

export default Navigation;
