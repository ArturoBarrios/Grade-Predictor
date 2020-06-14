import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'

function loading(){
    return(
        <Card className="text-center">
        <Card.Header>Grade Predictor</Card.Header>
        <Card.Body>
            <Card.Title>Computing Grade</Card.Title>
            <Card.Text>
            Please wait while the model works its magic...
            </Card.Text>
            <Spinner animation="border" variant="primary" />
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    )
}

export default loading;