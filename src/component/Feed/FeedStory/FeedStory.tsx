import React from 'react';
import FeedStoryItem from './FeedStoryItem';

const FeedStory: React.FunctionComponent = () => {
  let feedStoryItemList = [<></>];

  for (let i = 0; i < 10; i++) {
    feedStoryItemList.push(<FeedStoryItem></FeedStoryItem>);
  }
  return (
    <div className="flex flex-row h-[135px] border rounded-[8px] overflow-x-auto scrollbar-hide items-center mt-[20px] my-[20px] bg-white">
      {feedStoryItemList}
    </div>
  );
};

export default FeedStory;
