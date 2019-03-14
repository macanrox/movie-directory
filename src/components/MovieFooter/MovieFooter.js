import React from 'react';
import { Container } from 'reactstrap';
import './MovieFooter.scss';
import Logo from './tmdb-logo.svg';

const MovieFooter = () => {
  return (
    <footer className="footer">
      <Container>
        <img
          className="footer__logo"
          src={Logo}
          alt="The Movie Database Logo - Green"
        />
      </Container>
    </footer>
  );
};

export default MovieFooter;
