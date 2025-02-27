{/*
import { NavLink } from "react-router-dom"    
*/}
import { useUsers } from "../../hooks/useUsers"
import { useAuth } from "../../auth/hooks/useAuth";

export const UserRow = ({id, username, password, department, admin}) => {

    const {handlerRemoveUser, handlerUserSelected} = useUsers()

    const { login } = useAuth();

    return (
        <tr>
            {/*   <td>{id}</td>    */}
            <td>{username}</td>
            <td>{password}</td>
            <td>{department}</td>
            {!login.isAdmin || 
              <>
                <td>
                <button type="button"
                    className="btn btn-primary btn-sm"
                    onClick = { () => handlerUserSelected({
                                                            id, 
                                                            username, 
                                                            password,
                                                            department,
                                                            admin
                                                         }) 
                              }>
                    Editar
                </button>
                </td>
            {/*   <td>
                    <NavLink className={"btn btn-secondary btn-sm"} to={'/edit/' + id}>
                        Update 2
                    </NavLink>
                </td>
            */}
                <td>
                    <button type="button"
                        className="btn btn-danger btn-sm"
                        onClick = { () => handlerRemoveUser(id) }>
                        Borrar
                    </button>
                </td>
             </>    
            }
            
        </tr>
    )
}