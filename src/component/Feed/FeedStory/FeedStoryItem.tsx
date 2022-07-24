import React from 'react';
import tempusericon from '../../../Icon/tempusericon.jpg';

interface Props {
  username?: string;
  usericon?: string;
}

const FeedStoryItem: React.FunctionComponent<Props> = ({ usericon = tempusericon, username = 'test' }) => {
  return (
    <div className="flex flex-col items-center content-center">
      <div className="relative flex w-[66px] h-[66px] items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-[10px]">
        <img
          src={usericon}
          alt=""
          className="absolute w-[59px] h-[59px] bg-white p-[3px] rounded-full left-[50%] -translate-x-[50%]"
        />
      </div>
      <span>{username}</span>
    </div>
  );
};

export default FeedStoryItem;
