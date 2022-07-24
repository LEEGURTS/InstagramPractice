import React from 'react';
import FadeIn from '../component/FadeIn/FadeIn';
import Feed from '../component/Feed/Feed';

const FeedPage: React.FunctionComponent = () => {
  return (
    <FadeIn>
      <Feed></Feed>
    </FadeIn>
  );
};

export default FeedPage;
