import React from 'react';
import tempusericon from '../../../Icon/tempusericon.jpg';
import MoreOptionSvg from '../../../svg/Feed/MoreOptionSvg';

interface Props {
  username?: string;
  usericon?: string;
}

const FeedItemHeader: React.FunctionComponent<Props> = ({ username = 'lee_guts', usericon = tempusericon }) => {
  return (
    <div className="w-[470px] h-[56px] border-t border-x border-[#d8d8d8] rounded-t-[8px] flex flew-row items-center justify-between bg-white">
      <div className="flex flex-row items-center">
        <div className="flex w-[42px] h-[42px] bg-gradient-to-r from-[#FEDA77] via-[#DD2A7B] to-[#8134AF] rounded-full mx-[10px]">
          <img
            src={usericon}
            alt=""
            className="relative w-[37px] h-[37px] bg-white p-[2px] rounded-full left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
          />
        </div>
        <span className="font-bold">{username}</span>
      </div>
      <MoreOptionSvg></MoreOptionSvg>
    </div>
  );
};

export default FeedItemHeader;
