import Navbar from 'react-bootstrap/Navbar';



function footer(props){
    return(
        <div style={{width:"100%"}} > 
       
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/microphone.svg"
                style={{ height: 400, width: 236 }}
                className="d-inline-block align-middle"
            />{' '}
            
            Piano Song Grade Predictor
            </Navbar.Brand>
        </Navbar>
    </div>
    );

}

export default footer;