import React from 'react';
import EmoticonSvg from '../../../svg/Feed/EmoticonSvg';

const FeedComment: React.FunctionComponent = () => {
  return (
    <div className="flex flex-row border-b border-x rounded-b-[8px] w-[470px] h-[49px] items-center">
      <EmoticonSvg></EmoticonSvg>
      <input type="text" className="flex-grow h-[18px] bg-white" placeholder="댓글 달기..." />
      <button className="mx-[10px] text-[#0095F6]">게시</button>
    </div>
  );
};

export default FeedComment;
