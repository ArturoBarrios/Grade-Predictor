import Navbar from 'react-bootstrap/Navbar';



function Header(props){
    return(
        <div style={{width:"100%", height:"100%", backgroundColor: "lightGrey"}} > 
       
        {/* <Navbar >
            <Navbar.Brand href="#home">
                <div style={{display: "flex",justifyContent: 'center'}}> */}
                    <img
                        alt=""
                        src="/logo_test2.png"
                        style={{ minWidth: "100%", minHeight:"100%", objectFit: "cover" }}
                        className="d-inline-block align-middle"
                    />{' '}
            {/* </div> */}
            

            {/* </Navbar.Brand> */}
        {/* </Navbar> */}
    </div>
    );

}

export default Header;