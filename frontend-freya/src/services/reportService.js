//import { products } from "../data/products";

export const getReports = async() => {
   
    const response = await fetch('http://localhost:8080/partes');

    const reports = await response.json();

    return reports;
}

export const calculateTotal = (items) => {

    return items.reduce(
                        (accumulator, item) => accumulator + (item.report.price * item.quantity)
                         ,0
                       )
}