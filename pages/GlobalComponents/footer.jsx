import Navbar from 'react-bootstrap/Navbar';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function footer(props){
    return(
        <div style={{width:"100%", backgroundColor: "lightGrey"}} > 
       
        <Navbar>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo.png"
                style={{ height:"200px", width: "200px" }}
                className="d-inline-block align-middle"
            />{' '}
            
            </Navbar.Brand>
            <div style={{marginRight:"0px"}}>
                <div style={{marginLeft:"20px"}}></div>
            <Container>
                
                <Row>
                    <Col md={3}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(2,3,4,1)" iconSize="5" roundness="20%" url="https://github.com/ArturoBarrios/MusicClassification" size="50" />
                    </Col>
                    {/* <Col md={{ span: 2, offset: 1 }}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="messenger" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,146,253,1)" iconSize="5" roundness="20%" url="https://www.facebook.com/arturo.barrios.505/" size="50" />
                    </Col> */}
                    <Col md={{ span: 4, offset: 1 }}>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(211,13,13,1)" iconSize="5" roundness="20%" url="mailto:arturobarrios357@gmail.com" size="50" />
                    </Col>
                </Row>
                
            </Container>
            </div>
        </Navbar>

        
    </div>
    );

}

export default footer;