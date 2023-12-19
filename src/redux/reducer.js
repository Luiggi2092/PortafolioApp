import {GETPROMOVIL,GETPROWEB,GETALL} from './action';




const initialState = {
      proyect : [],
    
}


const Reducer = (state = initialState, action) =>{

    switch(action.type){

      case GETPROWEB:

        return {
            ...state,proyect:action.payload};

      case GETPROMOVIL:
        return {
            ...state,proyect:action.payload};
      case GETALL :
          return {
              ...state,proyect:action.payload
          };

        default:{
            return state
        }
       
        

    }


}



export default Reducer;




