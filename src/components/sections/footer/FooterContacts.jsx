import React from 'react';
import Phone from '../header/Phone';
import Messengers from '../header/Messengers';

const FooterContacts = () => {
  return (
    <div className='footer-contacts'>
      <h3 className="footer-contacts--title">Контакты</h3>
      <Phone style={'phone header--item'} />
      <Messengers style={'messengers'} />
      <h3 className="footer-contacts--address">
        Москва, Путевой проезд 3с1, к 902
      </h3>
      <div className="legal">
        <p className="legal--text">
          ©WELBEX 2022. Все права защищены.
        </p>
        <a href="#" className="legal--link">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  );
};

export default FooterContacts;