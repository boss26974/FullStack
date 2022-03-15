import { Navbar, Nav} from "react-bootstrap"

function navBar(){
    return(
    <Navbar bg="info" expand="lg">
    <Navbar.Brand href="/" style={{marginLeft : "50px"}}>CMS Midterm-Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/tag-category">Tag/Category</Nav.Link>
        <Nav.Link href="/author">Author</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
    )
}

export default navBar