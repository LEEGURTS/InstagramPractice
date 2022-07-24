import React, { useEffect, useRef, useState } from 'react';
import FindIconSvg from '../../../svg/Feed/FindIconSvg';
import styles from './SearchIcon.module.css';

const FeedSearch: React.FunctionComponent = () => {
  const [isInputSelected, setIsInputSelected] = useState(false);

  const focusRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.addEventListener('focusin', () => {
        setIsInputSelected(true);
      });
      focusRef.current.addEventListener('focusout', () => {
        setIsInputSelected(false);
      });
    }
    return () => {
      focusRef.current?.removeEventListener('focusin', () => {
        setIsInputSelected(true);
      });
      focusRef.current?.removeEventListener('focusout', () => {
        setIsInputSelected(false);
      });
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {!isInputSelected && <FindIconSvg className="absolute left-[10px]" />}
      <input type="text" placeholder="검색" className={styles.input} ref={focusRef} />
    </div>
  );
};

export default FeedSearch;
