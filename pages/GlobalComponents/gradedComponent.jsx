import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'


function gradedComponent(props){
    return(
        <Accordion>
            <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>Computed Grade(s)</Card.Title>
                    <Card.Text>
                    {/* Please wait while the model works its magic... */}
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
                        {
                            Object.keys(props.songs).map((key,index)=>(
                                <tr>
                                    <td>{index}</td>
                                    <td>{key}</td>
                                    <td>{props.songs[key]}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                    <Card.Title>Similar Songs</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Accordion>
    )
}

export default gradedComponent;