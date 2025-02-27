
import {  useNavigate } from "react-router-dom"

export const SelectDepartment = () => {
  
  const navigate = useNavigate();
  
  const departments = [
    { id: 1, name: 'OFICINAS' },
    { id: 2, name: 'PRODUCCIÓN' },
    { id: 3, name: 'TI' },
  ];

  const handleDepartmentClick = (id) => {
    navigate(`/departments/${id}/users`);
  };
  
  return(

    <>
      <div className="modal-out">
          <div className="modal-in">
            {departments.map((dept) => (
              <button type="button" 
                      className="btn btn-light button-dep" 
                      key={dept.id} 
                      onClick={() => handleDepartmentClick(dept.id)}>
                {dept.name}
              </button>
            ))}
          </div>  
      </div>    
    </>
  )   
}