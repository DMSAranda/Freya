import { useEffect, useState } from "react"
import { useUsers } from "../../hooks/useUsers";

export const UserForm = ({ userSelected, handlerCloseForm }) => {

    const { initialUserForm, handlerAddUser, errors } = useUsers();

    const [userForm, setUserForm] = useState(initialUserForm);
    const [checked, setChecked] = useState(userForm.admin);
    const { id, username, password, department, admin } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        });
    }, [userSelected]);

    const onInputChange = ({ target }) => {

        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onCheckboxChange = () => {

        setChecked(!checked);
        setUserForm({
            ...userForm,
            admin: checked,
        }
        );
    }

    const onSubmit = (event) => {

        event.preventDefault();
        handlerAddUser(userForm);
    }

    const onCloseForm = () => {

        handlerCloseForm();
        setUserForm(initialUserForm);
    }

    return (
        <form className="emerger" onSubmit={onSubmit}>
            <input
                className="form-control my-3"
                placeholder="Empleado"
                name="username"
                value={username}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.username}</p>

            <input
                className="form-control my-3"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange} />
            <p className="text-danger">{errors?.password}</p>

            <div className="dropdown my-3 w-100">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Departamento
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" 
                           name="department"
                           value={department}
                           onChange={onInputChange}>
                           Centro de Control</a>
                    </li>
                    <li><a className="dropdown-item" 
                           name="department"
                           value={department}
                           onChange={onInputChange}>
                           Producción</a>
                    </li>
                    <li><a className="dropdown-item" 
                           name="department"
                           value={department}
                           onChange={onInputChange}>
                           Oficinas</a>
                    </li>
                </ul>
            </div>


            <div className="my-3 form-check">
                <input type="checkbox"
                    name="admin"
                    checked={admin}
                    className="form-check-input"
                    onChange={onCheckboxChange}
                />
                <label className="form-check-label">¿Administrador?</label>
            </div>

            <input type="hidden"
                name="id"
                value={id} />

            <div className="my-3 form-check">
                <button
                    className="btn btn-primary"
                    type="submit">
                    {id > 0 ? 'Editar' : 'Crear'}
                </button>

                {!handlerCloseForm || <button
                    className="btn btn-danger mx-2"
                    type="button"
                    onClick={() => onCloseForm()}>
                    Cerrar
                </button>}
            </div>

        </form>
    )
}