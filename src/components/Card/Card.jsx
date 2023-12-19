import React,{useState} from 'react';
import {Container,Row,Col, Button} from 'react-bootstrap';
import "./Card.css"



const Card = ({name,description,image}) => {


    const [showText,setShowText] = useState(false);


    const handleMouseEnter = () => {
        setShowText(true);
    }


    const handleMouseLeave = () => {
        setShowText(false);
    }

   
    return (

            <Row>
               <Col className="image-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <img src={image} width={250} height={150} alt="Proyectos Web"/>
                       {showText && (
                         <div className="text-overlay">
                            <h4>{name}</h4>
                            <p>{description}</p>
                         </div>

                       )}
                                   

               </Col> 
            </Row>
        
    )


}

export default Card;