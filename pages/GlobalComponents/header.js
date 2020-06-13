import Navbar from 'react-bootstrap/Navbar';



function Header(props){
    return(
        <div style={{width:"100%"}} > 
       
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/microphone.svg"
                style={{ height: 100, width: 236 }}
                className="d-inline-block align-middle"
            />{' '}
            
            Piano Song Grade Predictor
            </Navbar.Brand>
        </Navbar>
    </div>
    );

}

export default Header;