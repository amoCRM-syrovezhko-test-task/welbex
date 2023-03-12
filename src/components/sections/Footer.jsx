import React from 'react';
import FooterList from './footer/FooterList';
import FooterContacts from './footer/FooterContacts';

const Footer = () => {
  const about = [
    {id: 1, text: "Партнёрская программа"},
    {id: 2, text: "Вакансии"}
  ]
  const menu = [
    {id: 1, text: "Расчёт стоимости"},
    {id: 2, text: "Услуги"},
    {id: 3, text: "Виджеты"},
    {id: 4, text: "Интеграции"},
    {id: 5, text: "Наши клиенты"},
    {id: 6, text: "Кейсы"},
    {id: 7, text: "Благодарственные письма"},
    {id: 8, text: "Сертификаты"},
    {id: 9, text: "Сертификаты"},
    {id: 10, text: "Вопрос / Ответ"},
  ]

  return (
    <div className="footer-container">
      <footer className='footer'>
        <FooterList 
          title={'О компании'}
          list={about}
        />
        <FooterList 
          title={'Меню'}
          list={menu}
        />
        <FooterContacts />
      </footer>
    </div>
  );
};

export default Footer;