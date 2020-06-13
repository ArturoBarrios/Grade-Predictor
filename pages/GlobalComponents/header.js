import Navbar from 'react-bootstrap/Navbar';



function Header(props){
    return(
        <div style= {{width: "100%"}}> 
       
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/microphone.svg"
                width="30%"
                height="100%"
                className="d-inline-block align-top"
            />{' '}
            
            Piano Song Grade Predictor
            </Navbar.Brand>
        </Navbar>
    </div>
    );

}

export default Header;