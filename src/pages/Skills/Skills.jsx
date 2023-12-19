import {Container,Row,Col, Button} from 'react-bootstrap';
import Side from '../../components/SideBar/sideBar';
import "./Skill.css"
import react from '../../assets/react-js.svg'
import node from '../../assets/node-js.svg'
import redux from '../../assets/redux.svg'
import javascript from '../../assets/javaScript.svg'
import Css3 from '../../assets/Css3.svg'
import Html5 from '../../assets/Html-5.svg'
import GitHub from '../../assets/GitHub.svg'
import express from '../../assets/express-js.svg'
import sequelize from '../../assets/Sequelize.svg'
import postgresql from '../../assets/postgresql-icon.svg'
import java from '../../assets/java-icon.svg'
import typescript from '../../assets/typescript.svg'
import NavBar from '../../components/navBar/navBar';

const Skills = ()=> {

   return (
   
   <Container fluid className='container'>
      <Row className='raw'>
        <Col xs={3}>
           <Side/>
        </Col>
        <Col xs={8} className='Skills'>
           <Row>
           <Col xs={12}>
              <h1 className='tituloSkills'>SKILLS</h1>
           </Col>
           </Row> 
           <br/>
           <Row className='CajaSkills'>
              <Col xs={3}>
                 <Row>
                 <img src={react} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>REACT JS</p>
                 </Row>
              </Col>
              <Col xs={3}>
              <Row>
                 <img src={node} width={200} height={100} />
              </Row> 
              <Row style={{textAlign:"center"}}>
              <p>NODE JS</p>
              </Row>
              </Col>
              <Col xs={3}>
              <Row>
                <img src={redux} width={200} height={100}/>
              </Row>
              <Row style={{textAlign:"center"}}>
                <p>REDUX</p>
              </Row>
              </Col>
              <Col xs={3}>
                <Row>
                    <img src={javascript} width={200} height={100}/>
                </Row>
                <Row style={{textAlign:"center"}}>
                    <p>
                      JAVASCRIPT  
                    </p>
                </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={Css3} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>CSS 3</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={Html5} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>HTML 5</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={GitHub} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>GIT HUB</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={express} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>EXPRESS</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={sequelize} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>SEQUELIZE</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={postgresql} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>POSTGRE SQL</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={java} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>JAVA</p>
                 </Row>
              </Col>
              <Col xs={3}>
                 <Row>
                 <img src={typescript} width={200} height={100}/>
                 </Row>
                 <Row style={{textAlign:"center"}}>
                    <p>TYPESCRIPT</p>
                 </Row>
              </Col>
              
           </Row>   
        </Col>
        <Col xs={1} className="nav">
           <NavBar/>
        </Col>
      </Row>
   
   
   </Container>)

}




export default Skills;