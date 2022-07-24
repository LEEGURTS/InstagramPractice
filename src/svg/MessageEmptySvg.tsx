import React from 'react';

const MessageEmptySvg: React.FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#262626" color="#262626" viewBox="0 0 24 24">
      <line
        fill="none"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
    </svg>
  );
};

export default MessageEmptySvg;
