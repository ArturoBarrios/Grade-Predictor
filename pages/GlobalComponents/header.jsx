import Navbar from 'react-bootstrap/Navbar';



function Header(props){
    return(
        <div style={{width:"100%", backgroundColor: "lightGrey"}} > 
       
        <Navbar >
            <Navbar.Brand href="#home">
                <div style={{display: "flex",justifyContent: 'center'}}>
                    <img
                        alt=""
                        src="/logoText2.png"
                        style={{ width: "100%" }}
                        className="d-inline-block align-middle"
                    />{' '}
            </div>
            

            </Navbar.Brand>
        </Navbar>
    </div>
    );

}

export default Header;