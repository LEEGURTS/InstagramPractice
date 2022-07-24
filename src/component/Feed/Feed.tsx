import React from 'react';
import FeedBar from './FeedBar/FeedBar';
import FeedPostItem from './FeedPost/FeedPostItem';
import FeedStory from './FeedStory/FeedStory';

const Feed: React.FunctionComponent = () => {
  let itemlist = [];

  for (let i = 0; i < 10; i++) {
    itemlist.push(<FeedPostItem></FeedPostItem>);
  }

  return (
    <div>
      <FeedBar></FeedBar>
      <div className="flex flex-row items-center justify-center text-[14px] text-[#262626]">
        <div className="max-w-[470px] w-full min-h-screen pt-[60px]">
          <FeedStory></FeedStory>
          {itemlist}
        </div>
      </div>
    </div>
  );
};

export default Feed;
