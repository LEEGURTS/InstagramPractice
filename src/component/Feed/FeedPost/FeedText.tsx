import React, { useState } from 'react';

interface Props {
  likeCount?: number;
  username?: string;
  feedText?: string;
}

const FeedText: React.FunctionComponent<Props> = ({
  likeCount = 0,
  username = 'lee_guts',
  feedText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure architecto nostrum temporibus corrupti, vel velit quis. Velit dolores rem iste id quia quis deleniti vero asperiores voluptatibus, ad non labore.',
}) => {
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  let textLimit = 30;
  let showFeedText = '';
  if (textLimit < feedText.length) {
    if (!isMoreClicked) {
      showFeedText = feedText.slice(0, textLimit) + '...';
    } else {
      showFeedText = feedText;
    }
  } else {
    showFeedText = feedText;
  }
  return (
    <div className="border-x border-b border-[#d8d8d8] w-[470px] flex flex-col">
      <div className="flex flex-row mx-[10px] mb-[10px]">
        <span className="font-semibold">좋아요 {likeCount}개</span>
      </div>
      <div className="flex flex-row mx-[10px] mb-[10px]">
        <span className="font-semibold">{username}&nbsp;</span>
        <span>{showFeedText}</span>
        {textLimit < feedText.length && !isMoreClicked && (
          <button
            className="ml-[5px] text-[#858585]"
            onClick={() => {
              setIsMoreClicked(!isMoreClicked);
            }}
          >
            더 보기
          </button>
        )}
      </div>
    </div>
  );
};

export default FeedText;
