import { UserRow } from "./UserRow"
import { useUsers } from "../../hooks/useUsers"
import { useAuth } from "../../auth/hooks/useAuth"

export const UsersList = () => {

    const { users } = useUsers();

    const { login } = useAuth();

    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                      {/*   <th>id</th>   */}
                        <th>Empleado</th>
                        <th>Contraseña</th>
                        <th>Departamento</th>
                        {!login.isAdmin || 
                                          <>
                                            <th>Editar</th>
                                          {/*  <th>update2</th>  */ }
                                            <th>Borrar</th>    
                                          </>  
                        }
                        
                    </tr>
                </thead>
                <tbody>
                       {
                        users.map(({id, username, password, department, admin}) => (
                                            <UserRow key={id}
                                                     id={id}
                                                     username={username}
                                                     password={password} 
                                                     department={department}
                                                     admin={admin}                               
                                            /> 
                                          )
                                 )
                       }
                </tbody>
            </table>
        </>       
    )
}