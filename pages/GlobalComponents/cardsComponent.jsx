import Head from 'next/head'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'


        function cards(props){
            return(
                <div>
                    <main>
                      

                        <CardDeck>
                            <Card>
                                <Card.Img style = {{"height": 200}} variant="top" src="how.svg" />
                                <Card.Body>
                                <Card.Title>How to use</Card.Title>
                                <Card.Text>
                                <Accordion defaultActiveKey="">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        choose a list of music files that you want to grade.
                                        <br></br><br></br>Expand to see supported files
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>ABC, Capella, ClerqTemperley, Humdrum, MEI, MIDI, MuseData, MusicXML, NoteworthyBinary, RomanText, Scala, TinyNotation, and Volpiano. 
                                            <br></br> <br></br>This list might be updated. This list 
                                            might be updated. <br></br> <br></br> Check out <a href="https://web.mit.edu/music21/doc/usersGuide/usersGuide_08_installingMusicXML.html">this link </a>
                                            to see all the available file formats. 
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="">
                                        Choose a model to grade your pieces. 
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                              

                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                               
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{"height": 200}} variant="top" src="model.svg" />
                                <Card.Body>
                                <Card.Title>Grade Predictors</Card.Title>
                                <Card.Text>
                                    <Accordion defaultActiveKey="">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            ABRSM
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                            <ListGroup>
                                                <ListGroup.Item>ABRSM 2019-2020</ListGroup.Item>
                                                <ListGroup.Item>ABRSM 2019-2021</ListGroup.Item>
                                                <ListGroup.Item>ABRSM 2020-2021</ListGroup.Item>
                                             </ListGroup>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Piano Marvel
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                            <Card.Body>5000+ songs</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                
                                   
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{"height": 200}} variant="top" src="update.svg" />
                                <Card.Body>
                                <Card.Title>Plans for future</Card.Title>
                                <Card.Text>
                                    <Accordion defaultActiveKey="">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="">
                                            Improving accuracy of grade predictions
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body></Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="">
                                            Adding Henle, RCM, and other musical institutions. 
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                            <Card.Body></Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="">
                                            Incorporating more instruments (e.g., Trumpet, guitar, and bass guitar)
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                            <Card.Body></Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                        
                    </main>
                    
                </div> 
            )
            
        }


export default cards;
