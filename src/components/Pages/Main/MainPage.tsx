import React from 'react';
import Annoucement from './Annoucement';
import HotAuction from './HotAuction';
import Profile from './Profile';
import TopUser from './TopUser';

export default function MainPage() {
  document.title = 'ViP Home';

  return (
    <section className="background flex-grow flex flex-col ">
      <h1 className="text-white text-4xl lg:text-6xl font-dancing_script stroke-black-text-shadow-3px text-center mb-4">
        Welcome Admin!
      </h1>
      <div className="flex sm:flex-row flex-col flex-grow justify-evenly gap-4 mx-4 my-2">
        <HotAuction id={12} widthClass=" sm:w-1/3" />
        <Annoucement widthClass="sm:w-1/3" />
        <div className="sm:w-1/3 flex justify-evenly gap-4 flex-col">
          <Profile userImg="https://cdn.pixabay.com/photo/2019/08/21/11/43/portrait-4420815_960_720.jpg" />
          <TopUser
            userNick="Admin"
            userCircle="/img/userCircle2.png"
            userImg="https://cdn.pixabay.com/photo/2017/10/31/02/35/fantasy-2904098_960_720.jpg"
          />
        </div>
      </div>
    </section>
  );
}
