import React from 'react';

interface Props {
  userNick: string;
  userCircle: string;
  userImg: string;
}

export default function UserIcon({ userNick, userCircle, userImg }: Props) {
  return (
    <div className="relative  flex justify-center items-center ">
      <h1 className="absolute m-auto text-5xl text-gold font-dancing_script stroke-black-text-shadow-3px ">
        {userNick.charAt(0).toUpperCase()}
      </h1>
      <div className="relative flex w-24 h-24 items-center justify-center ">
        <img className="absolute " src={userCircle} alt="userCircle" />
        <img
          className=" w-3/4 h-75p  object-top object-cover rounded-full "
          src={userImg}
          alt="userImg"
        />
      </div>
    </div>
  );
}
