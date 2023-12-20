  import React from "react";
  import {Container,Row,Col, Button} from 'react-bootstrap';
import Side from "../../components/SideBar/sideBar";
import './Contact.css'
import image from '../../assets/mail.svg'
import Linkedink from '../../assets/linkedin.svg'
import phone from '../../assets/phonecircular.svg'
import microsoft from '../../assets/microsoft.svg'
import Github from '../../assets/Github.svg'
import NavBar from "../../components/navBar/navBar";


  const Contact = () => {

     return (
        <Container fluid className="container">
         <Row className="raw">
           <Col xs={3}>
            <Side/> 
           </Col>
            <Col xs={8} className="Contacto">
                <Row>
                <Col xs={12}>
                    <h1 className="tituloContac">CONTACT</h1>
                </Col>  
                </Row>
                <Row>
                   <Col xs={12}>
                      <p style={{fontSize: 35}}>Feel <stron>free</stron> to contact me !</p>
                   </Col> 
                </Row>
                <Row>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic voluptatem rem consectetur nihil nostrum, obcaecati numquam voluptas veritatis accusantium cupiditate sequi ratione officiis! Assumenda, aperiam harum! Facilis, esse voluptatem!</p>
                </Row>
                <Row>
                    <Col className="Formulario" >
                      <fieldset className="cuerpo" > 
                      <Row>
                        <img src={image} width={200} height={200}/>
                      </Row>
                      <Row>
                        <label>Correo :</label>
                        <input type="email"  placeholder="Ingrese su Correo"/>
                      </Row>
                      <Row>
                         <label>Asunto :</label>
                         <input/>
                      </Row>
                      <Row>
                         <label>Descripcion :</label>
                         <textarea />
                      </Row>
                      <br/> 
                      <Row>
                         <button>Enviar</button>
                      </Row>
                     </fieldset>
                    </Col>

                    <Col>
                    <Row>
                       <Col xs={5}>
                          <img src={Linkedink} height={100} width={100}/>
                       </Col>
                       <Col xs={4}>
                        <Row className="enlace">
                         <a href="https://www.linkedin.com/in/luis-seminario-lopez-93454668/" target="_blank">Luis Seminario</a>
                         </Row>
                       </Col>
                       
                       
                    </Row>
                    <Row>
                       <Col xs={5}>
                          <img src={microsoft} height={100} width={100}/>
                       </Col>
                       <Col xs={4}>
                        <Row className="enlace">
                         <a>luiggi_lsl@hotmail.com</a>
                         </Row>
                       </Col>
                       
                       
                    </Row>
                    <Row>
                       <Col xs={5}>
                          <img src={Github} height={100} width={100}/>
                       </Col>
                       <Col xs={4}>
                        <Row className="enlace">
                         <a href="https://github.com/Luiggi2092">Luiggi2092</a>
                         </Row>
                       </Col>
                       
                       
                    </Row>
                    <br/>
                    <Row>
                    <Col xs={5}>
                          <img src={phone} height={100} width={100}/>
                       </Col>
                       <Col xs={4}>
                        <Row className="enlace">
                         <a>+51 94713-3008</a>
                         </Row>
                         
                       </Col>
                       
                    </Row>
                    </Col>
                </Row>
            
            </Col>
            <Col xs={1} className="nav">
           <NavBar/> 
           </Col> 


         </Row>
        </Container> 
     )


  }


  export default Contact;