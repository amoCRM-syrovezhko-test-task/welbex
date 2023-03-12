import React from 'react';

const MainCard = ({title, text}) => {
  return (
    <div className='card'>
      <h3 className="card--title">
        <span className='line'>— </span>{title}
      </h3>
      <p className="card--text">
        {text}
      </p>
    </div>
  );
};

export default MainCard;