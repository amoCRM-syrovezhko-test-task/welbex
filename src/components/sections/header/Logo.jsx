import React from 'react';
import logo from '../../../assets/img/logo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt="logo" className="logo--img" />
      <p className="logo--text">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </p>
    </div>
  );
};

export default Logo;