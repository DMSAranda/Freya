import { NavLink } from "react-router-dom"
import { useAuth } from "../../auth/hooks/useAuth"

export const Navbar = () => {

    const { login, handlerLogout } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Freya</a>
                <button className="navbar-toggler" type="buton" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Empleados</NavLink>                    
                        </li>  

                        {!login.isAdmin || 
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Registrar</NavLink>                    
                                </li>   
                        }     
                    
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/catalog">Día</NavLink>
                        </li>      
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Semana</NavLink>
                        </li> 
                    
                        
                                       
                   </ul>       
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                   <span className="nav-item nav-link text-primary mx-3">
                         {login.user?.username}
                   </span>
                   <button className="btn btn-outline-success" 
                           type="button"
                           onClick={()=>handlerLogout()}>  
                           Salir             
                   </button>           
                </div>
            </div>
        </nav>
    )
}