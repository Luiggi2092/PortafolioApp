import React from "react";
import {Container,Row,Col, Button} from 'react-bootstrap';
import Side from "../../components/SideBar/sideBar";
import NavBar from "../../components/navBar/navBar";
import "./Resume.css"


const Resume = () => 
{

  return(
    
    <Container fluid className="container">
     <Row className="raw">
        <Col xs={3}>
         <Side/>
        </Col>
        <Col xs={8} className="Resume">
            <Row>
               <Col xs={12}>
                <h1 className="tituloResume">RESUME</h1>
               </Col>  
            </Row>
            <br/>
            <Row className="CajaEducacion">
                <Row className="Subtitulo">
                    <h2>EDUCATION</h2>
                </Row>
                <Col className="Education1" xs={3}>
                    <Row className="empresa">
                        <strong style={{fontSize: 10}}>BootCamp Soy Henry</strong>
                    </Row>
                    <Row>
                    <h5 style={{paddingTop:10}}>Full Stack Web Developer</h5>
                    </Row>
                    <Row>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid aspernatur labore autem tempora quae voluptatum dicta non maiores!</p>
                    </Row>
                </Col>
                <Col className="Education2" xs={3}>
                    <Row className="empresa">
                        <strong style={{fontSize:10}}>Cibertec</strong> 
                    </Row>
                    <Row>
                        <h5 style={{paddingTop:10}}>Administración y Sistemas</h5>
                    </Row>
                    <Row>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid aspernatur labore autem tempora quae voluptatum dicta non maiores!</p>
                    </Row>
                </Col>
                <Col className="Education3" xs={3}>
                    <Row className="empresa">
                        <strong style={{fontSize:10}}>Cibertec</strong>
                    </Row>
                    <Row>
                        <h5 style={{paddingTop:10}}>Computación e informática</h5>
                    </Row>
                    <Row>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid aspernatur labore autem tempora quae voluptatum dicta non maiores!</p>
                    </Row>
                </Col>
            </Row>
            
            <Row className="CajaExperiencie">
                <Row className="Subtitulo">
                    <h2>EXPERIENCE</h2>
                </Row>
                <Col className="Experiencie1" xs={3}>
                  <Row className="empresa">
                        <strong style={{fontSize:10}}>Ideprint Express</strong>
                  </Row>
                  <Row>
                      <h5 style={{paddingTop:10}}>Analista de Sistemas</h5>
                  </Row>
                  <Row>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid aspernatur!</p>
                  </Row>  
                </Col>
                <Col className="Experiencie2" xs={3}>
                <Row className="empresa">
                        <strong style={{fontSize:10}}>Bitacore</strong>
                </Row>
                <Row>
                      <h5 style={{paddingTop:10}}>Analista de Sistemas</h5>
                </Row> 
                <Row>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid aspernatur!</p>
                    </Row>
                </Col>
                <Col className="Experiencie3" xs={3}>
                <Row className="empresa">
                        <strong style={{fontSize:10}}>Clinica Javier Prado</strong>
                </Row>
                <Row>
                      <h5 style={{paddingTop:10}}>Desarrollador Front End</h5>
                </Row> 
                <Row>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid aspernatur!</p>
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



export default Resume;