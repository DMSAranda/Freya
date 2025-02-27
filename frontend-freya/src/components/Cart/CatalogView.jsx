import { useEffect, useState } from "react";
import { getReports } from "../../services/reportService";
import { CardView } from "./CardView";

export const CatalogView = ({ handler }) => {

    const [reports, setReports] = useState([]);

    const [isLoading, setIsLoading] = useState(true);


    const findAll = async () => {
        const reportsList = await getReports();
        setReports(reportsList);
        setIsLoading(false);
    }

    useEffect(     //para ejecutarlo solo una vez al crear el componente
        () => {
            findAll();
        }, []
    )

    return (

        <>
            <div className="container my-4">
                {
                    isLoading &&
                    <div className="alert alert-info">
                        Cargando...
                    </div>

                }
                <h2>Día</h2>
                <div className="row">
                    {reports.map(p => (
                        <div className="col-4 my-2" key={p.id}>
                            <CardView
                                handler={handler}
                                id={p.id}
                                name={p.name}
                                description={p.description}
                                price={p.price} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}   
