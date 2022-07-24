import React from 'react';
import FeedPlusEmptySvg from '../../../svg/FeedPlusEmptySvg';
import HomeFillSvg from '../../../svg/HomeFillSvg';
import LikeEmptySvg from '../../../svg/LikeEmptySvg';
import MessageEmptySvg from '../../../svg/MessageEmptySvg';
import NavigateEmptySvg from '../../../svg/NavigateEmptySvg';
import tempusericon from '../../../Icon/tempusericon.jpg';

const FeedIcons: React.FunctionComponent = () => {
  return (
    <div className="flex pl-[24px] w-[254px] justify-between">
      <HomeFillSvg></HomeFillSvg>
      <MessageEmptySvg></MessageEmptySvg>
      <FeedPlusEmptySvg></FeedPlusEmptySvg>
      <NavigateEmptySvg></NavigateEmptySvg>
      <LikeEmptySvg></LikeEmptySvg>
      <img src={tempusericon} alt="" className="w-[24px] rounded-full" />
    </div>
  );
};

export default FeedIcons;
