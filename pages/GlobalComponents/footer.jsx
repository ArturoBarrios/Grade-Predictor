import Navbar from 'react-bootstrap/Navbar';



function footer(props){
    return(
        <div style={{width:"100%", backgroundColor: "lightGrey"}} > 
       
        <Navbar>
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="/logo.png"
                style={{ height:"200px", width: "200px" }}
                className="d-inline-block align-middle"
            />{' '}
            
            </Navbar.Brand>
        </Navbar>
    </div>
    );

}

export default footer;