import Side from "../../components/SideBar/sideBar";
import {Container,Row,Col, Button} from 'react-bootstrap';
import "./AboutMe.css"
import NavBar from "../../components/navBar/navBar";
import imageFront from "../../assets/Front-End.svg";
import imageBack from "../../assets/Back-End.svg";

const AboutMe = () => {

  return (
  <Container fluid className="container">
    <Row className="raw">
    <Col xs={3}>
        <Side/>
    </Col>
    <Col xs={8} className="About" >
          <Row>
           <Col xs={12}> 
          <h1  className="tituloAbout">ABOUT ME</h1>
          </Col>
          </Row>
          <br/>
          <p style={{fontSize: 35}}>I'm <strong>Luis Seminario López,</strong> Full stack web developer</p>
          <p>I am a highly motivated passionate about technology and eager to overcome challenges.
             My work experience has provided me with solid knowledge bases in database systems, 
             analysis and automation of business processes and programming.</p>
             <br/>
            <Row>
             <Col className="DetAbout">  
           <div className="caja">
             <div className="caja1">
              <strong>4+</strong>
              <p>YEARS EXPERIENCE</p>
             </div>
             <div className="caja2">
             <strong>6+</strong> 
             <p>PROYECTS DONE</p>
             </div>
           </div>
             
           <div className="caja">
           <div className="caja3">
               <strong>20+</strong>
               <p>HAPPY CLIENTS</p>
           </div>
           <div className="caja4">
              <strong>134+</strong> 
               <p>FOLLOWERS</p>
           </div>
           </div>
           </Col>
           <Col className="ChildAbout">
               <h3>What I Do ?</h3>
               <div className="About1">
                <Row className="rowAbout">
                 <Col xs={4}> 
                <img src={imageFront} width={100} height={100}/>
                </Col>
                <Col xs={8}>
                 <h4>FRONT END</h4>
                 <p style={{fontSize: "10px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima consequuntur est incidunt sit! Architecto pariatur sapiente libero quod voluptatem, maiores eveniet ratione ex harum ad deleniti odit molestias ea maxime.</p>
                </Col>
                </Row>
               </div>
               <br/>
               <div className="About2">
                   <Row>
                    <Col xs={4}>
                    <img src={imageBack} width={100} height={100}/>
                    </Col>
                    <Col xs={8}>
                    <h4>BACK END</h4>
                    <p style={{fontSize: "10px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima consequuntur est incidunt sit! Architecto pariatur sapiente libero quod voluptatem, maiores eveniet ratione ex harum ad deleniti odit molestias ea maxime.</p>
                    </Col>
                   </Row>
               </div>
               <br/>
               <div className="About3">

               </div>
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



export default AboutMe;