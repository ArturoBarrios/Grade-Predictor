import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'


function gradedComponent(){
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
                            <tr>
                                <td>1</td>
                                <td>Nocturne Opus 9 No.2</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>The Dark Knight Rises Main Theme</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Main Theme from Interstellar</td>
                                <td>8</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card.Title>Similar Songs</Card.Title>
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
                                <td>1</td>
                                <td>Spongebob Squarepants Main Theme Song</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Fur Elise</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mazurka in F Major</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Yellow</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Gladiator Main Theme</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Champions League Theme Song</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Accordion>
    )
}

export default gradedComponent;