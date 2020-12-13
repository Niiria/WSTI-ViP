import React from 'react';

interface Props {
  userImg: string;
}

export default function Profile({ userImg }: Props) {
  return (
    <div className="relative bg-gray-100 text-white rounded-lg">
      <img
        className="absolute z-0 h-full w-full object-cover object-top rounded-lg"
        src={userImg}
        alt="userImg"
      />
      <div className="text-white relative font-dancing_script text-center text-4xl stroke-black-text-shadow-3px">
        <h1>My profile</h1>
        <ul>
          <li className="flex flex-row justify-between flex-wrap w-full p-2">
            <p>Founds:</p>
            <p> 234413$</p>
          </li>
          <li className="flex flex-row justify-between flex-wrap w-full p-2">
            <p>Collection:</p>
            <p> 23 items</p>
          </li>
          <li className="flex flex-col flex-wrap w-full p-2 text-center ">
            <p>Reputation:</p>
            <p className="text-red-800 text-6xl"> -150</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
