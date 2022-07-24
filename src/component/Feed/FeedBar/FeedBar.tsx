import React from 'react';
import InstagramIcon from '../../../Icon/Index/InstagramIcon.png';
import FeedIcons from './FeedIcons';
import FeedSearch from './FeedSearch';

const FeedBar: React.FunctionComponent = () => {
  return (
    <div className="z-10 fixed w-full bg-white border-b h-[60px] flex items-center justify-center">
      <div className="max-w-[975px] w-full flex flex-row items-center justify-around ">
        <img src={InstagramIcon} alt="" className="h-[29px]" />
        <FeedSearch></FeedSearch>
        <FeedIcons></FeedIcons>
      </div>
    </div>
  );
};

export default FeedBar;
