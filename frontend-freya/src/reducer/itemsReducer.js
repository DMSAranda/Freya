import { AddReport, DeleteReport, UpdateQuantity } from "./itemsActions";

export const itemsReducer = (state = [], action) => {

        switch(action.type){
            case AddReport:
                
                return [
                    ...state, 
                    {
                        report: action.payload,
                        quantity: 1 
                    }
                ];

            case UpdateQuantity:
              
                return state.map((item) => {
                    if(item.report.id === action.payload.id){
                        return{
                           ...item,
                           quantity: item.quantity + 1,

                        }
                    }    
                    return item;    
                })
                
            case DeleteReport:
               
                return [
                    ...state.filter((item) => item.report.id !== action.payload  ), //filtramos y mantenemos todos menos el que coincide
                   
                ]; 

            default:
                return state;
        }
}