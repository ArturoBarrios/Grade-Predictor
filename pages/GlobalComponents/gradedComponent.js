import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

function gradedComponent(){
    return(
        <Card className="text-center">
            <Card.Header>Grade Predictor</Card.Header>
            <Card.Body>
                <Card.Title>Computed Grade</Card.Title>
                <Card.Text>
                Please wait while the model works its magic...
                </Card.Text>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>File Name</th>
                        <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>Nocturne Opus 9 No.2</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>The Dark Knight Rises Main Theme</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Main Theme from Interstellar</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>
    )
}

export default gradedComponent;