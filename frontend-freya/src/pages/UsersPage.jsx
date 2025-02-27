/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { UserModalForm } from "../components/Users/UserModalForm";
import { UsersList } from "../components/Users/UsersList"
import { useUsers } from "../hooks/useUsers";
import { useAuth } from "../auth/hooks/useAuth";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Paginator } from "../components/Paginator";

export const UsersPage = () => {

    const page = useParams().page;
  
    const { users,
            visibleForm,
            isLoading,
            paginator,
            handlerOpenForm, 
            getUsers    
          } = useUsers();

    const { login } = useAuth();

    useEffect(()=>{
        getUsers(page);
    }, [page]);      

    if(isLoading){
        return(
            <div className="container my-4">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        )
    }
    return (
        <>
            {!visibleForm ||
                <UserModalForm />
            }
            <div className="container my-4">
                <h2>EMPLEADOS</h2>
                <br></br>
                <div className="row">

                    <div className="col">
                        {(visibleForm || !login.isAdmin) ||
                            <button
                                className="btn btn-primary my-2"
                                onClick={() => handlerOpenForm()}>
                                Crear Nuevo
                            </button>
                        }
                        <br></br>
                        <br></br>              
                        {
                            users.length === 0
                                ? <div className="alert alert-warning">Lista de Usuarios vacia</div>

                                : 
                                <>
                                    <UsersList />
                                    <Paginator url="/users/page" paginator={paginator}/>
                                </>
                                
                        }
                    </div>
                </div>
            </div>
        </>
    )
}