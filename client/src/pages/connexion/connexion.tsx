import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../components/button/button.css';
import './connexion.css';

const Connexion = () => {
  const [toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({password: "", username: ""})
  const [registerData, setRegisterData] = useState({request_token: "", username: "", firstname:"", lastname: "", email:"", password:"", phone:""})
  const [flashMessage, setFlashMessage] = useState('');
  const [sessionStatus, setSessionStatus] = useState({});
  const navigate = useNavigate();

  // Debug
  const session:boolean = true

  const handleToggle = () => {
    setToggle(!toggle);
  };

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const response = await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=deccc6efb2fb370e20744304c0eac99b', {
          method: 'GET',
          mode: 'no-cors',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            // 'Access-Control-Allow-Origin': 'http://localhost:3000/connexion'
          }
          // body: new URLSearchParams({
          //   ...registerData
          // })
        });

        if (response.ok) {
          console.log('response register bien reçu');
          const data = await response.json();
          console.log(data.request_token)
          setFlashMessage(data.success);
          setTimeout(() => {
            setFlashMessage('');
          }, 3000);
          handleToggle();

        } else {
          console.log('échec de la réponse register');
        }

      } catch(error) {
        console.error('log failed:', error);
        setFlashMessage('Il y a eu une erreur dans la requête');
        setTimeout(() => {
          setFlashMessage('');
        }, 3000);
      }
    };


    // useEffect(() => {
    //   const fetchSessionStatus = async () => {
    //     try {
    //       const response = await fetch('http://localhost:5000/auth/session');
    //       if (response.ok) {
    //         const data = await response.json();
    //         setSessionStatus({data});
    //       } else {
    //         console.error('Error fetching images:', response.status);
    //       }
    //     } catch (error) {
    //       console.error('Error fetching images:', error);
    //     }
    //   };

    //   fetchSessionStatus();
    // }, []);

    console.log(sessionStatus);
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      try {
        const response = await fetch('', {
          method: 'POST',
          body: new URLSearchParams({
            ...formData
          })
        });
        
        if (response.ok) {
          // Handle successful upload
          console.log('response bien reçu');
          const data = await response.json();
          setFlashMessage(data.message);
          setTimeout(() => {
            setFlashMessage('');
          }, 3000);
        
        } else {
          console.log('échec de la réponse');
        }
      } catch (error) {
        console.error('log failed:', error);
        setFlashMessage('Il y a eu une erreur dans la requête');
        setTimeout(() => {
          setFlashMessage('');
        }, 3000);
      }
    };

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterData(prevState => {
          return {
              ...prevState,
             
              [e.target.name]: e.target.value
          }
      }) 
  }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prevState => {
        return {
          ...prevState,
          [e.target.name]: e.target.value
        }
      }) 
    }

return (
  <main className="page-connexion">
    {true ? ( 
    <div className="outer-connexion">
      <div className="inner-connexion">
      {flashMessage && <div className="output-message x-center-position">{flashMessage}</div>}
        {toggle ? (
          <div className="container-inscription">
            <div className="img-container">
              <img src="http://localhost:5000/assets/foodcare_logo.svg" alt="logo" />
            </div>
            <form className="form-container" onSubmit={handleRegisterSubmit} method="post">
              <div className="form-elem">
                <label htmlFor="email"></label>
                <input type="text" name="email" id="email" placeholder="Votre pseudo" onChange={handleRegisterChange} required  />
              </div>
              <div className="form-elem">
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Choisir un mot de passe" onChange={handleRegisterChange} required />
              </div>
             
              <div className="form-elem">
                <button className="btn-1" type="submit">Créer son compte</button>
              </div>
              <div className="form-elem">
                <p> Déjà inscris ?
                 <span className="to-connexion-link" onClick={handleToggle}> Se connecter</span></p>
              </div>
            </form>
          </div>
        ) : (
          <div className="container-connexion">
            <div className="img-container">
              <img src="http://localhost:5000/assets/foodcare_logo.svg" alt="logo" />
            </div>
            <div className="form-container">
              <form id="login-form" method="post" onSubmit={handleLoginSubmit}>
                <div className="form-elem">
                  <label htmlFor="username" className="connexion__username"></label>
                  <input type="text" name="username" id="username" placeholder="Votre pseudo" onChange={handleChange} required />
                </div>
                <div className="form-elem">
                  <input type="password" name="password" id="password" placeholder="Mot de passe" onChange={handleChange} required />
                </div>
                <div className="form-elem">
                  <button type="submit" className="btn-1">Se connecter</button>
                </div>
                <div className="form-elem">
                <p>
                  <span className="to-connexion-link" onClick={handleToggle}>Créer son compte</span>
                </p>
              </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
    ): (<div className="no-session">Vous êtes déjà connecté</div>)}
  </main>
);
};

export default Connexion;
