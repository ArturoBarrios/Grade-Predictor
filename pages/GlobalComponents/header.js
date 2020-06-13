import Navbar from 'react-bootstrap/Navbar';



function Header(props){
    return(
        <div> 
       
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/microphone.svg"
                
                
                // className="d-inline-block align-top"
            />{' '}
            
            Piano Song Grade Predictor
            </Navbar.Brand>
        </Navbar>
    </div>
    );

}

export default Header;