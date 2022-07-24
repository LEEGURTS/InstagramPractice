import React, { useEffect, useState } from 'react';
import PhoneBorder from '../../Icon/Index/PhoneBorder.png';
import InstagramIcon from '../../Icon/Index/InstagramIcon.png';
import FacebookIcon from '../../Icon/Index/FacebookIcon.png';
import AppleStore from '../../Icon/Index/AppleStore.png';
import PlayStore from '../../Icon/Index/PlayStore.png';
import ScreenShot1 from '../../Icon/Index/ScreenShot1.png';
import ScreenShot2 from '../../Icon/Index/ScreenShot2.png';
import ScreenShot3 from '../../Icon/Index/ScreenShot3.png';
import ScreenShot4 from '../../Icon/Index/ScreenShot4.png';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './input.module.css';

const Index: React.FunctionComponent = () => {
  const footerItemList = [
    { title: 'Meta', link: '' },
    { title: '소개', link: '' },
    { title: '블로그', link: '' },
    { title: '채용 정보', link: '' },
    { title: '도움말', link: '' },
    { title: 'API', link: '' },
    { title: '개인정보처리방침', link: '' },
    { title: '약관', link: '' },
    { title: '인기 계정', link: '' },
    { title: '해시태그', link: '' },
    { title: '위치', link: '' },
    { title: 'Instagram Lite', link: '' },
    { title: '연락처 업로드 & 비사용자', link: '' },
    { title: '댄스', link: '' },
    { title: '식음료', link: '' },
    { title: '집 및 정원', link: '' },
    { title: '음악', link: '' },
    { title: '시각 예술', link: '' },
  ];

  const footerList = footerItemList.map((item, index) => (
    <a key={index} href={item.link} className="px-2 py-2 mx-auto">
      {item.title}
    </a>
  ));

  const ScreenShotItemList = [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4];

  const [imageIndex, setImageIndex] = useState(0);

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [btnLoginVisible, setBtnLoginVisible] = useState(false);

  let opacity = btnLoginVisible ? ' opacity-100' : ' opacity-50';

  const ActiveIsPassedLogin = () => {
    id.length > 4 && pw.length > 5 ? setBtnLoginVisible(true) : setBtnLoginVisible(false);
  };
  const inputIdHandler = (e: any) => {
    setId(e.target.value);
  };

  const inputPwHandler = (e: any) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((imageIndex) => {
        if (imageIndex < 3) {
          return imageIndex + 1;
        } else {
          return 0;
        }
      });
    }, 8000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center my-[25px]">
      <div className="flex items-center mx-auto my-auto">
        <div className="relative hidden md:flex">
          <img src={PhoneBorder} alt="오류" className="" />
          <AnimatePresence>
            <motion.img
              key={imageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src={ScreenShotItemList[imageIndex]}
              className="absolute top-[23px] left-[138px] w-[220px]"
              alt="오류"
            />
          </AnimatePresence>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="border bg-white w-[350px] flex flex-col justify-center items-center px-[10px]">
            <img src={InstagramIcon} alt="오류" className="mt-10" />
            <div className="w-[350px] flex flex-col justify-center items-center">
              <div className="relative mt-[50px]">
                <input
                  id="id"
                  className={styles.input}
                  placeholder="전화번호, 사용자 이름 또는 닉네임"
                  onKeyUp={ActiveIsPassedLogin}
                  onChange={inputIdHandler}
                />
                <label htmlFor="id" id="a" className={styles.label}>
                  전화번호, 사용자 이름 또는 닉네임
                </label>
              </div>
              <div className="relative">
                <input
                  id="pw"
                  className={styles.input}
                  type="password"
                  placeholder="비밀번호"
                  onKeyUp={ActiveIsPassedLogin}
                  onChange={inputPwHandler}
                />
                <label htmlFor="pw" id="b" className={styles.label}>
                  비밀번호
                </label>
              </div>
              <button
                className={
                  'w-[268px] h-[30px] flex justify-center items-center bg-blue-500 text-white rounded-md mt-[20px]' +
                  opacity +
                  (btnLoginVisible ? ' hover:bg-blue-300' : ' ')
                }
                disabled={!btnLoginVisible}
                onClick={() => {
                  navigate('/');
                }}
              >
                로그인
              </button>
              <div className="relative flex py-6 items-center content-center">
                <div className="flex-grow border-b w-[100px] border-gray-400"></div>
                <span className="flex-shrink mx-4 text-[#939597] font-bold">또는</span>
                <div className="flex-grow border-b w-[100px] border-gray-400"></div>
              </div>
              <div className="flex">
                <img src={FacebookIcon} alt="오류" className="w-[25px] h-[25px]" />
                <button className="text-[#385185] font-semibold text-sm hover:text-slate-400">
                  Facebook으로 로그인
                </button>
              </div>
              <button className="my-[20px] text-[12px] text-[#00376B] hover:text-slate-400">
                비밀번호를 잊으셨나요?
              </button>
            </div>
          </div>
          <div className="border bg-white w-[350px] flex justify-center items-center py-[20px] px-[10px] mt-[10px]">
            <span className="font-light">계정이 없으신가요? </span>
            <button className="font-bold text-[#0095f6] ml-[5px] hover:text-slate-400">가입하기</button>
          </div>
          <span className="my-[20px]"> 앱을 다운로드하세요.</span>
          <div className="flex flex-row">
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=ko&gl=US">
              <img src={PlayStore} alt="오류" className="w-[136px] h-[40px] mr-[10px] cursor-pointer" />
            </a>
            <a href="https://apps.apple.com/kr/app/instagram/id389801252">
              <img src={AppleStore} alt="오류" className="w-[136px] h-[40px] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-400 mt-16 text-xs text-center">{footerList}</div>
      <span className="my-[20px] text-gray-400">© 인스타카피</span>
    </div>
  );
};

export default Index;
