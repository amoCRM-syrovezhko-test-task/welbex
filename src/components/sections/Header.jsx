import React from 'react';
import Logo from './header/Logo'
import Nav from './header/Nav'
import Phone from './header/Phone'
import Messengers from './header/Messengers'

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Nav />
      <Phone style={'last phone header--item'}/>
      <Messengers style={'last messengers'}/>
    </header>
  );
};

export default Header;