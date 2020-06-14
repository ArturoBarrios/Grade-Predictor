import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function filePicker(){
    return(
        <Card className="text-center">
        <Card.Header>Grade Predictor</Card.Header>
        <Card.Body>
            <Card.Title>Choose a File to Grade</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Choose File</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    )
}

export default filePicker;