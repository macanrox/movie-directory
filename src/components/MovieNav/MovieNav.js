import React from 'react';
import {
  Container,
  FormGroup,
  Input,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './MovieNav.scss';

const MovieNav = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <NavbarBrand href="/" className="navbar__logo">
          Movie Directory
        </NavbarBrand>

        <Nav>
          <NavLink active tag={Link} to="/" className="navbar__link">
            Browse
          </NavLink>
          <NavLink tag={Link} to="/credits" className="navbar__link">
            Credits
          </NavLink>

          <FormGroup className="navbar__form">
            <Input className="navbar__search" type="search" name="search" />
          </FormGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MovieNav;
