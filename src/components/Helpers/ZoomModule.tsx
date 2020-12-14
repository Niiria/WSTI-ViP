import React, { useEffect, useRef, useState } from 'react';

interface Props {
  img: string;
  setZoom: any;
}

export default function ZoomModule({ img, setZoom }: Props) {
  const [animation, setAnimation] = useState(false);
  const animationTimer: any = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    setAnimation(false);
    animationTimer.current = window.setTimeout(() => {}, 400);
    setAnimation(true);

    return () => {
      setTimeout(() => clearInterval(animationTimer.current), 1);
      document.body.style.overflow = 'auto';
    };
  }, [setAnimation]);

  return (
    <div
      className={`flex top-0 left-0 z-50 absolute h-screen w-screen justify-center overflow-hidden bg-black bg-opacity-75 transitiom duration-500 ${
        animation ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={() => {
        setAnimation(!animation);
        animationTimer.current = window.setTimeout(() => {
          setZoom(false);
        }, 400);
      }}
    >
      <img
        className={`transition duration-500 opacity-0  ${
          animation ? 'opacity-100' : 'opacity-0'
        }`}
        src={img}
        alt="img"
      />
    </div>
  );
}
