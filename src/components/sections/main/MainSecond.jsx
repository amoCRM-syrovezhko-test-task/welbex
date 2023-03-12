import React from 'react';
import MainCard from './MainCard';
import Button from './Button';

const MainSecond = () => {

  const cards = [
    {title: 'Виджеты', text: '30 готовых решений'},
    {title: 'Dashboard', text: 'с показателями вашего бизнеса'},
    {title: 'Skype Аудит', text: 'отдела продаж и CRM системы'},
    {title: '35 дней', text: 'использования CRM'},
  ]
  
  return (
    <div className='main-second'>
      <p className="main-second--title text--left-big">
      Вместе с <span className='text-color'>бесплатной консультацией</span> мы дарим:
      </p>
      <div className="main-second--cards">
        {cards.map((card) =>
          <MainCard
            title={card.title}
            text={card.text}/>
          )}
        </div>
        <Button />
    </div>
  );
};

export default MainSecond;