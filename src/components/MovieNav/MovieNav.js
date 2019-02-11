import React, { Component } from 'react';
import {
  Container,
  FormGroup,
  Input,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import './MovieNav.scss';

class MovieNav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Navbar className="navbar">
        <Container>
          <NavbarBrand href="/" className="navbar__logo">
            Movie Directory
          </NavbarBrand>

          <Nav>
            <NavLink active href="#" className="navbar__link">
              Browse
            </NavLink>
            <NavLink href="#" className="navbar__link">
              Credits
            </NavLink>

            <FormGroup className="navbar__form">
              <Input className="navbar__search" type="search" name="search" />
            </FormGroup>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MovieNav;
