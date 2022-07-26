import React from 'react';
import BookMarkSvg from '../../../svg/Feed/BookMarkSvg';
import CommentSvg from '../../../svg/Feed/CommentSvg';
import LikeEmptySvg from '../../../svg/LikeEmptySvg';
import MessageEmptySvg from '../../../svg/MessageEmptySvg';

const FeedToolBar: React.FunctionComponent = () => {
  return (
    <div className="w-[470px] h-[47px] border-x border-[#d8d8d8] flex flex-row items-center justify-between">
      <div className="flex flex-row mx-[10px]">
        <LikeEmptySvg></LikeEmptySvg>
        <CommentSvg></CommentSvg>
        <MessageEmptySvg></MessageEmptySvg>
      </div>
      <div className="flex flex-row">
        <BookMarkSvg></BookMarkSvg>
      </div>
    </div>
  );
};

export default FeedToolBar;
