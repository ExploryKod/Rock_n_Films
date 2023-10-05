export const ApiLogin = () => {

    const handleRegisterApi = async () => {  
    }

    const handleApiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    }
        
    

    return <>
       <form className="form-container" onSubmit={handleRegisterApi} method="post">
              <div className="form-elem">
                <label htmlFor="email"></label>
                <input type="text" name="api-key" id="api-key" placeholder="Api Key" onChange={handleApiChange} required  />
              </div>    
              <div className="form-elem">
                <button className="btn-1" type="submit">Générer son accés</button>
              </div>
              
            </form>
    </>;
};

export default ApiLogin;