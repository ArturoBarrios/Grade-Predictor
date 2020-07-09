import Head from 'next/head'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

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
                                    First, choose a list of music files that you want to grade.<br></br><br></br>
                                    Finally use any model of your choosing to grade your piece(s).<br></br><br></br>
                                    Reference the Model Predictor to see outline of what each model does. <br></br><br></br>
                                    Supported file formats include the following:<br></br> ABC, Capella,  
                                    ClerqTemperley, Humdrum, MEI, MIDI, MuseData, MusicXML, Noteworthy, 
                                    NoteworthyBinary, RomanText, Scala, TinyNotation, and Volpiano. This list 
                                    might be updated. Check out <a href="https://web.mit.edu/music21/doc/usersGuide/usersGuide_08_installingMusicXML.html">this link </a>
                                    to see all the available file formats. 

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
                                   Display a list of available models with short descriptions here
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted"></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{"height": 200}} variant="top" src="update.svg" />
                                <Card.Body>
                                <Card.Title>Updates</Card.Title>
                                <Card.Text>
                                    Mention plans for future updates
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
