import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const NarrowLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="w-min-[400px] flex items-center mx-auto md:w-[768px] p-1 min-h-screen text-sm">{children}</div>
  );
};

export default NarrowLayout;
