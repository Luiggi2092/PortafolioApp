import React,{useState} from "react"
import {Container,Row,Col, Button} from 'react-bootstrap';
import Side from "../../components/SideBar/sideBar";
import image from "../../assets/MoviePlay.webp"
import JustifiedExample from "../../components/TabBar/TabBar";
import './Portafolio.css';
import Card from "../../components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {all} from "../../redux/action"
import NavBar from "../../components/navBar/navBar";








const Portafolio = ()=> {

    const lista = useSelector(state => state.proyect);
    const dispatch = useDispatch();

    console.log(lista);
     
     
    useEffect(()=>{
         dispatch(all());
    },[])
     
     
    return (
        <Container fluid className="container">
          <Row className="raw">
           <Col xs={3}>
              <Side/>
           </Col>
           <Col xs={8} className="Portafolio">
             <Row>
                <Col xs={12}>
                    <h1 className="tituloPorta">PORTAFOLIO</h1>
                </Col>
             </Row>
             <Row>
               <JustifiedExample/>
             </Row>
             <Row>
                <Col xs={12} className="cajaPort">
                     <div className="CardContainer">
                       {lista?.map((proyecto,id)=>{
                          return <Card key={id}
                                       name={proyecto.name}
                                       description={proyecto.Descripcion}
                                       categoria={proyecto.Categoria}
                                       image={proyecto.image}
                                        />
                       })}
                       </div>          
            
                     <br/>
                   
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



export default Portafolio;