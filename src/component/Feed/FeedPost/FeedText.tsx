import React from 'react';

interface Props {
  likeCount?: number;
  username?: string;
  feedText?: string;
}

const FeedText: React.FunctionComponent<Props> = ({
  likeCount = 0,
  username = 'Lee_guts',
  feedText = 'Lopis dis emgie de nusis',
}) => {
  return (
    <div className="border-b border-l border-r w-[470px] flex flex-col">
      <div className="flex flex-row mx-[10px] mb-[10px]">
        <span className="font-semibold">좋아요 {likeCount}개</span>
      </div>
      <div className="flex flex-row mx-[10px] mb-[10px]">
        <span className="font-semibold">{username}&nbsp;</span>
        <span>{feedText}</span>
      </div>
    </div>
  );
};

export default FeedText;
