import React from 'react';
import tempfeedimage from '../../../Icon/tempfeedimage.jpg';

const FeedImage: React.FunctionComponent = () => {
  return (
    <div className="w-[470px] border border-[#d8d8d8]">
      <img src={tempfeedimage} alt="" />
    </div>
  );
};

export default FeedImage;
