import React from 'react';
import tempusericon from '../../../Icon/tempusericon.jpg';
import MoreOptionSvg from '../../../svg/Feed/MoreOptionSvg';

interface Props {
  username?: string;
  usericon?: string;
}

const FeedItemHeader: React.FunctionComponent<Props> = ({ username = 'test', usericon = tempusericon }) => {
  return (
    <div className="w-[470px] h-[56px] border rounded-t-[8px] flex flew-row items-center justify-between bg-white">
      <div className="flex flex-row items-center">
        <div className="flex w-[42px] h-[42px] items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-[10px]">
          <img src={usericon} alt="" className="w-[36px] h-[36px] bg-white p-[2px] rounded-full" />
        </div>
        <span className="font-medium">{username}</span>
      </div>
      <MoreOptionSvg></MoreOptionSvg>
    </div>
  );
};

export default FeedItemHeader;
