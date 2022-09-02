import React, { useState, useRef } from 'react';
import tempfeedimage from '../../../Icon/tempfeedimage.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

const FeedImage: React.FunctionComponent = () => {
  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  let images = [];

  let test = [];
  for (let i = 0; i < 5; i++) {
    images.push(tempfeedimage);
    test.push(<img src={tempfeedimage} key={i} className="relative z-0"></img>);
  }
  const [page, setPage] = useState(0);

  const imageRef = useRef<HTMLDivElement | null>(null);

  const doScroll = () => {
    imageRef.current?.scrollTo({
      left: imageRef.current?.clientWidth * page,
      behavior: 'smooth',
    });
  };

  const HandlePage = (newDirection: number) => {
    setPage(page + newDirection);
    if (page < 0) {
      setPage(0);
    } else if (page === test.length) {
      setPage(test.length - 1);
    }
  };

  const paginate = (newDirection: number) => {
    HandlePage(newDirection);
    doScroll();
  };

  return (
    <div className="relative flex-col justify-center items-center">
      {page}
      <motion.div
        ref={imageRef}
        className="relative flex w-full overflow-hidden"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        {test}
      </motion.div>
      {page !== test.length - 1 && (
        <div
          className="absolute hidden lg:flex w-[25px] h-[25px] right-[10px] shadow font-bold top-[50%] p-4 -translate-y-[50%] bg-white items-center justify-center rounded-[30px] cursor-pointer"
          onClick={() => {
            paginate(1);
          }}
        >
          {'‣'}
        </div>
      )}
      {page !== 0 && (
        <div
          className="absolute w-[25px] h-[25px] hidden lg:flex left-[10px] top-[50%] shadow font-bold rotate-180 p-4 -translate-y-[50%] bg-white items-center justify-center rounded-[30px] cursor-pointer"
          onClick={() => {
            paginate(-1);
          }}
        >
          {'‣'}
        </div>
      )}
    </div>
  );
};

export default FeedImage;
