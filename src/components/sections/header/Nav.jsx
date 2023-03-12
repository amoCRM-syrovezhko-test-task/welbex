import React from 'react';

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='header--item nav--item'>
        Услуги
      </li>
      <li className='header--item nav--item'>
        Виджеты
      </li>
      <li className='header--item nav--item'>
        Интеграции
      </li>
      <li className='header--item nav--item'>
        Кейсы
      </li>
      <li className='header--item nav--item nav--last'>
        Сертификаты
      </li>
    </ul>
  );
};

export default Nav;