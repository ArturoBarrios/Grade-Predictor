import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DropDown from './dropdown'


class filePicker extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Choose a File to Grade</Card.Title>
                <Card.Text>
                {/* With supporting text below as a natural lead-in to additional content. */}
                </Card.Text>
                <div className="mb-3">
                    <input style={{marginLeft: "20%"}} type="file" multiple
                    onChange={(event) =>{
                        console.log("file on change: ", event.target.files[0])
                        this.props.fileHandler(event.target.files)
                    }} />
                </div>
                {this.props.bodyItem}
                
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        )
    }
}

export default filePicker;