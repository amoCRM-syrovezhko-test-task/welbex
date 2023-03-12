import React from 'react';
import PurpleBall from './PurpleBall';
import RedBall from './RedBall';
import RedBallSmall from './RedBallSmall';
import PurpleLight from './PurpleLight';
import RedLight from './RedLight';

const BackGround = () => {
  return (
    <div className='bg'>
      <PurpleBall />
      <RedBall />
      <RedBallSmall />
      <PurpleLight />
      <RedLight />
    </div>
  );
};

export default BackGround;