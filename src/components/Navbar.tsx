import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Navbar() {
  const {openCart, cartQuantity} = useShoppingCart();
  return (
    <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button 
        onClick={openCart}
        className="bg-dark" style={{position: 'relative'}}>
          <HiShoppingCart style={{fontSize: '22px'}}/>
          <div 
          className="rounded-circle bg-success d-flex justify-content-center align-items-center"
          style={{color: 'white', fontWeight: '500', padding: '0px 7px', fontSize: '16px', position: 'absolute', bottom: '0', right: '0', transform: 'translate(40%, 30%)'}}
          >{cartQuantity}</div>
        </Button>
      </Container>
    </NavbarBS>
  );
}
