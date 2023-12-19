import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../assets/photo.png'
import  "./Landing.css"
import NavBar from '../../components/navBar/navBar';



const Landing = () => {

  

   const handleClick =() => {
           
      

   }
   


    return (
        <Container fluid className='container'>
    <Row className='raw'>
      <Col className='colu1'>
         <h3 className="Saludo">HI THERE!</h3>
         <h1><strong>I'M</strong><a className="datos"> LUIS SEMINARIO</a></h1>
          <br/>
         <h4 className="cargo">Desarrolador Web Full Stack</h4> 
         <br/>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea reprehenderit labore qui architecto pariatur ex explicabo nihil esse, dignissimos omnis nemo quas hic, odio incidunt earum debitis cum voluptates enim.</p>
         <br/>
         <Link to="/AboutMe">         
         <Button className="but" >More About Me</Button>
         </Link>


      </Col>
      <Col className='colu2'>
        <img src={image}/>
        <NavBar/>
      </Col>
    </Row>
    
  </Container>
  
    )



}


export default Landing;