import React from 'react';
import FeedStory from '../FeedStory/FeedStory';
import FeedComment from './FeedComment';
import FeedImage from './FeedImage';
import FeedItemHeader from './FeedItemHeader';
import FeedText from './FeedText';
import FeedToolBar from './FeedToolBar';

const FeedPostItem: React.FunctionComponent = () => {
  return (
    <div className="mb-[10px]">
      <FeedItemHeader></FeedItemHeader>
      <FeedImage></FeedImage>
      <FeedToolBar></FeedToolBar>
      <FeedText></FeedText>
      <FeedComment></FeedComment>
    </div>
  );
};

export default FeedPostItem;
