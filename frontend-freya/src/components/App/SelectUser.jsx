import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { findAll } from '../../services/userService';

const departmentIdToName = {
  1: 'CENTRO_CONTROL',
  2: 'PRODUCCION',
  3: 'OFICINAS',
};

export const SelectUser = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const { selectUser } = useUserContext();
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await findAll();
        const data = response.data;
        console.log(data)

        // Agrupa usuarios por nombre de departamento
        const groupedUsers = data.reduce((acc, user) => {
          const deptName = user.department;
          if (!acc[deptName]) {
            acc[deptName] = [];
          }
          acc[deptName].push(user.username); // Cambiado a 'username' según los datos de ejemplo
          return acc;
        }, {});

        setUsers(groupedUsers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } 
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    selectUser(user);
    navigate(`/login`);
  };

  // Normaliza el nombre del departamento del selector
  const departmentName = departmentIdToName[departmentId] || departmentId;

 

  return (
    <div className="modal-out">
      <div className="modal-in">
        {users[departmentName]?.length ? (
          users[departmentName].map((user, index) => (
            <button
              type="button"
              className="btn btn-light button-dep"
              key={index}
              onClick={() => handleUserClick(user)}
            >
              {user}
            </button>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default SelectUser;
