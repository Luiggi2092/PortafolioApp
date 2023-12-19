import Proyectos from "../util/Database";

export const GETPROWEB = 'GETPROWEB';
export const GETPROMOVIL = 'GETPROMOVIL';
export const GETALL = 'GETALL';


export const ProyectosWeb=()=> {
     console.log("fun1");
    return function(dispatch){
          
        const pro = Proyectos.filter(e => e.Categoria == "Web");
         console.log(pro);
        dispatch({type : GETPROWEB, payload: pro});
       
    
    } 
 


}


export const ProyectoMovil = ()=> {
   
    console.log("fun2");
    
    return function(dispatch){
         
        const promov = Proyectos.filter(e => e.Categoria == "Movil");
        console.log(promov);
        dispatch({type: GETPROMOVIL, payload: promov});
    }
}



export const all = () => {
    
    return function(dispatch){
  
        const proyectos = Proyectos;
        console.log(proyectos);
        dispatch({type: GETALL,payload: proyectos})

    }
  };