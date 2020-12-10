import React from 'react';
import UserIcon from '../UserIcon';

interface Props {
  userNick: string;
  userCircle: string;
  userImg: string;
}

export default function TopUser({ userNick, userCircle, userImg }: Props) {
  return (
    <div className="rounded-lg auction_btn_background  font-dancing_script text-4xl text-center text-white stroke-black-text-shadow-3px ">
      <h1 className="">Top collection user</h1>
      <div className="flex justify-evenly">
        <ul className="flex flex-col text-left m-2">
          <li>
            <p>User123</p>
          </li>
          <li>
            <p>25 items</p>
          </li>
        </ul>
        <UserIcon userNick="User1" userCircle={userCircle} userImg={userImg} />
      </div>
    </div>
  );
}
