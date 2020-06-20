import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <div className="mb-3">
                    <input style={{marginLeft: "20%"}} type="file" multiple
                    onChange={(event) =>{
                        // let data = new FormData();
                        // data.append("file",event.target.files[0])
                        // console.log("data: ", data)
                        console.log("file on change: ", event.target.files[0])
                        this.props.fileHandler(event.target.files)
                    }} />
                </div>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        )
    }
}

export default filePicker;