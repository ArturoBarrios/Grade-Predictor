import SongList from './SongList'
import Dropdown from './dropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FilePicker from './filePicker'
import ControlledTabs from './ControlledTabs'
import Accordion from 'react-bootstrap/Accordion'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'




class Configure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {key: 2};
        this.handleSelect = this.handleSelect.bind(this);

        
      }
      filesChosen(){
          console.log("filesChosen: ", this.props.songFiles());

      }
    componentDidMount(){
        
    }
    componentWillUnmount(){
        
    }
    handleSelect(event) {
        console.log("Tab selected")    
      } 
     
    render(){
        return(
            <div style={{zIndex:"1", backgroundColor: "lightgrey"}}>
                <Tabs defaultActiveKey="home" transition={false} id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Choose a File to Grade</Card.Title>
                            <Card.Text>
                                Accepts midi, musicxml, and many more music formats. 
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>       
                            <FilePicker didChooseFile={this.props.didChooseFile} fileHandler={this.props.fileHandler}></FilePicker>
                            {/* <SongList fileNames={this.props.fileNames}></SongList> */}
                        </Card.Body>
                        <Dropdown modelChosen={this.props.modelChosen}></Dropdown>
                        <div>
                        
                        <Button  style={{width:"30%", marginTop: "20px", marginBottom:"10px"}} variant="primary" onClick={this.props.gradeFunction}>Grade</Button>
                        </div>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                    </Tab>
                    <Tab style={{zIndex:"1"}} eventKey="profile" title="Download Songs">
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Test Songs</Card.Title>
                            <Card.Text>
                            <Table striped bordered hover>
                        <thead>
                            <tr>
                            {/* <th>#</th> */}
                            {/* <th>Piece</th> */}
                            <th>Composer</th>
                            <th>Grade</th>
                            {/* <th>Link</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/BeetAnGeSample.musicxml?_ga=2.212436372.1221153245.1600824488-2141778141.1598820890">An die ferne Geliebte, Op. 98</a></td>
                            <td>Beethoven</td>
                            {/* <td>1</td> */}
                           
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/BrahWiMeSample.musicxml?_ga=2.148629175.1221153245.1600824488-2141778141.1598820890">Wie Melodien zieht es mir, Op. 105, No. 1</a></td>
                            <td>Brahms</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/DebuMandSample.musicxml?_ga=2.148629175.1221153245.1600824488-2141778141.1598820890">Mandoline</a></td>
                            <td>Mandoline</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/FaurReveSample.musicxml?_ga=2.116106886.1221153245.1600824488-2141778141.1598820890">Après un rêve, Op. 7, No. 1</a></td>
                            <td>Faure</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/MahlFaGe4Sample.musicxml?_ga=2.187269160.1221153245.1600824488-2141778141.1598820890">Lieder eines fahrenden Gesellen:4. Die zwei blauen Augen</a></td>
                            <td>Mahler</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/MozaVeilSample.musicxml?_ga=2.187269160.1221153245.1600824488-2141778141.1598820890">Das Veilchen, K. 476</a></td>
                            <td>Mozart</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/MozaChloSample.musicxml?_ga=2.137578544.1221153245.1600824488-2141778141.1598820890">An Chloe, K. 524</a></td>
                            <td>Mozart</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/SchbAvMaSample.musicxml?_ga=2.137578544.1221153245.1600824488-2141778141.1598820890">Ave Maria (Ellen’s Gesang III), D. 839</a></td>
                            <td>Schubert</td>
                            {/* <td>1</td> */}
                            </tr>
                            <tr>
                            <td><a href="https://wpmedia.musicxml.com/wp-content/uploads/2017/12/Dichterliebe01.musicxml?_ga=2.208356626.1221153245.1600824488-2141778141.1598820890">Dichterliebe, Op. 48:1. Im wunderschönen Monat Mai</a></td>
                            <td>Schumann</td>
                            {/* <td>1</td> */}
                            </tr>
                        </tbody>
                        </Table>
                               
                            </Card.Text>
                            <Card.Text>
                            </Card.Text>       
                            
                            {/* <SongList fileNames={this.props.fileNames}></SongList> */}
                        </Card.Body>
                        
                        
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                    </Tab>
                    
                </Tabs>
                <style jsx>{`
      .container {
        // border: solid 1px #ff0000;
        zoom: 1; /* IE6&7 */
        //  min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%

       
    }
    td{
        text-align: left;
    }
    


       

       
      `}</style>
            </div>
           
        )
    }
}
export default Configure;