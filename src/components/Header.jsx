import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import aquaLogo from "../assets/aquacabp.png";

function Header() {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={aquaLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export { Header };
