import {Container, Navbar, Nav, Button} from "react-bootstrap"

function logout(){
    localStorage.removeItem("user");
    window.location.href = "/login";
}

function NavbarComponent(params) {
 
    if(localStorage.getItem("user")){

    return (
    <Navbar bg="dark" variant="dark" fixed="top">
  <Container>
  <Navbar.Brand href="/home">
  <i className='fas fa-home'></i>
  </Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="/create">New Product</Nav.Link>
  </Nav>
  <Nav className="me-auto">          
  </Nav>
        
  <Nav className="">
   <Button onClick={()=>{logout()}} className="" variant="primary">
    <i className='fas fa-sign-out-alt'></i>
   </Button>
  </Nav>
</Container>
</Navbar>
    )


}

return (<div></div>)

}

export default NavbarComponent;