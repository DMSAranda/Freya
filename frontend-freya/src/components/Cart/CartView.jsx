import { useEffect, useState } from "react";
import { calculateTotal } from "../../services/reportService";
import { useNavigate } from "react-router-dom";

export const CartView = ({items, handlerDelete}) => {
   
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
    
  useEffect(     //para ejecutarlo cuando cambian los items actualiza el total
            () => {
                    setTotal( calculateTotal(items) );
                    }, [ items ]
            )  

  const onDeleteReport = (id) => {

        console.log('delete');
        handlerDelete(id);
  }

  const onCatalog = () => {

        navigate('/catalog')
  }
 
  return (
    <>
        <div className="container my-4">
            <h2>Parte Semanal</h2>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Report</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(i => (
                                 <tr key={i.report.id}>
                                    <td>{i.report.name}</td>
                                    <td>{i.report.price}</td>                                
                                    <td>{i.quantity}</td>
                                    <td>{i.quantity * i.report.price}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger"
                                            onClick={() => onDeleteReport(i.report.id)}>Delete
                                        </button>
                                    </td>
                                 </tr>
                            ) )}
                           
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">{total}</td>
                            </tr>                   
                        </tfoot>
                    </table>
                    <button
                        className="btn btn-success"
                        onClick={onCatalog}>             
                        Continue Shopping
                    </button>
        </div>
    </>
  )
}
