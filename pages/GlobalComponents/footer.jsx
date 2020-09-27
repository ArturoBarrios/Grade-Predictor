import Navbar from 'react-bootstrap/Navbar';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function footer(props){
    return(
        <div style={{width:"100%", backgroundColor: "lightGrey"}} > 
       
        <div style={{display:"flex"}}>
            {/* <Navbar.Brand href="#home"> */}
            <img
                alt=""
                src="/logo.png"
                style={{ height:"200px", width: "200px" }}
                className="d-inline-block align-middle"
            />{' '}
            
            {/* </Navbar.Brand> */}
            <Container style={{marginTop:"3em"}}>
                
                <Row>
                    <Col  xs={3}><h3 style={{color: "rgb(2 95 130)"}}>Resources</h3></Col>
                    <Col  xs={3}><h3 style={{color: "rgb(2 95 130)"}}>Project</h3></Col>
                    
                </Row>
                <Row>
                    <Col  xs={3}><ul>
                    <li ><a style={{color: "rgb(2 95 130)"}} href="https://scikit-learn.org/stable/" target="_blank">Scikit-learn</a></li>
                    <li><a style={{color: "rgb(2 95 130)"}} href="http://web.mit.edu/music21/" target="_blank">Music21</a></li>
                    <li><a style={{color: "rgb(2 95 130)"}} href="http://jmir.sourceforge.net/jSymbolic.html" target="_blank">Jsymbolic</a></li>
                    </ul></Col>
                    <Col  xs={3}><ul>
                    <li ><a style={{color: "rgb(2 95 130)"}} href="https://github.com/ArturoBarrios/MusicClassification" target="_blank">Github</a></li>
                    <li><a style={{color: "rgb(2 95 130)"}} href="mailto:arturobarrios357@gmail.com" >Email</a></li>
                    
                </ul></Col>
                    
                </Row>
            </Container>
            
                
            
            
        </div>

        
    </div>
    );

}

export default footer;