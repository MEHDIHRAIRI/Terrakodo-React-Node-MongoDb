import "bootstrap/dist/css/bootstrap.min.css";
import {  Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Terrakodo</Navbar.Brand>
        <Nav className="mr-auto" style={{ paddingLeft: "50px" }}>
          <Nav.Link href="/Task">Tasks Table</Nav.Link>
          <Nav.Link href="/board">Tasks Boards</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
