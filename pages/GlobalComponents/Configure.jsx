import SongList from './SongList'
import Dropdown from './dropdown'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FilePicker from './filePicker'




class Configure extends React.Component {
    constructor(props) {
        super(props);
        
      }
      filesChosen(){
          console.log("filesChosen: ", this.props.songFiles());

      }
    componentDidMount(){
        
    }
    componentWillUnmount(){
        
    }
    render(){
        return(
            <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Choose a File to Grade</Card.Title>
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
        )
    }
}
export default Configure;