import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux'; 
import {ProyectosWeb,ProyectoMovil,all} from '../../redux/action';
function JustifiedExample() {

   const dispatch = useDispatch();

  const handleWeb = () => { 
         dispatch(ProyectosWeb());
         console.log("go")
       };

  const handleMovil = () => {
      
    dispatch(ProyectoMovil());
      console.log("go1")
  }


  const handleReset = () => {
    dispatch(all());  
     console.log("go2")
  }

  


  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={handleReset}>ALL</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={handleWeb}>Web Developer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={handleMovil}>Movil Developer</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default JustifiedExample;