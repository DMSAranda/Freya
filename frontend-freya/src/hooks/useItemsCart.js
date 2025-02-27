import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddReport, DeleteReport, UpdateQuantity } from "../reducer/itemsActions";

const initCartItems = JSON.parse(sessionStorage.getItem('cart'))  || [];

export const useItemsCart = () => {

    //  const [ cartItems, setCartItems ] = useState(initCartItems); sustituido por lo de abajo

    const [ cartItems, dispatch ] = useReducer(itemsReducer, initCartItems);

    useEffect(     //para ejecutarlo cuando cambian los items actualiza el total
            () => {
                     sessionStorage.setItem('cart', JSON.stringify(cartItems) );
                  }, [ cartItems ]
        )

    const handlerAddReport = (report) => {

            const hasItem = cartItems.find((item) => item.report.id === report.id)

            if(hasItem){
             /*   setCartItems([
                    ...cartItems.filter((item) => item.product.id !== product.id ), //filtramos y mantenemos todos menos el que coincide
                    {  //despues añadimos el que ya teniamos con su cantidad
                        product,
                        quantity: hasItem.quantity + 1
                    }
                ]);
             
            setCartItems(
                cartItems.map((item) => {
                    if(item.product.id === product.id){
                        item.quantity = item.quantity + 1;
                    }    
                    return item;    
                })
            );    
            */      
            dispatch(
                {
                    type: UpdateQuantity,
                    payload: report
                }
            )
            
            }else{
                /*setCartItems([
                    ...cartItems, 
                    {
                        product,
                        quantity: 1 
                    }
                ]);*/
                dispatch(
                    {
                        type: AddReport,
                        payload: report
                    }
                )
            }
    }

    const handlerDeleteReport = (id) => {
        
          /*  setCartItems([
                ...cartItems.filter((item) => item.product.id !== id ), //filtramos y mantenemos todos menos el que coincide
               
            ]);   */
            dispatch(
                {
                    type: DeleteReport,
                    payload: id
                }
            )    
    }

    //hemos creado una condicion abajo para que saolo muester el carrito si existen elementos en él


    return {
             cartItems,
             handlerAddReport,
             handlerDeleteReport,
    }
}