import React from 'react';

const BookMarkSvg: React.FunctionComponent = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      fill="#262626"
      viewBox="0 0 24 24"
      className="mx-[10px]"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      ></polygon>
    </svg>
  );
};

export default BookMarkSvg;
