import React from 'react';
import tempusericon from '../../../Icon/tempusericon.jpg';

interface Props {
  username?: string;
  usericon?: string;
}

const FeedStoryItem: React.FunctionComponent<Props> = ({ usericon = tempusericon, username = 'lee_guts' }) => {
  return (
    <div className="flex flex-col items-center content-center text-xs">
      <div className="relative flex w-[66px] h-[66px] bg-gradient-to-r from-[#FEDA77] via-[#DD2A7B] to-[#8134AF] rounded-full mx-[10px]">
        <img
          src={usericon}
          alt=""
          className="absolute w-[61px] h-[61px] bg-white p-[2px] rounded-full left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
        />
      </div>
      <span className="mt-[6px]">{username}</span>
    </div>
  );
};

export default FeedStoryItem;
