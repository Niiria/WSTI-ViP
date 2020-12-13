import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';

import UserIcon from './Helpers/UserIcon';

export default function Nav() {
  const [userSubMenu, setUserSubMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const animationOn: any = useRef(null);
  const animationOff: any = useRef(null);

  const handleLogout = () => {
    localStorage.setItem('login', 'false');
    history.push('/');
  };
  useEffect(() => {
    return () => {
      setTimeout(() => clearInterval(animationOn.current), 1);
      setTimeout(() => clearInterval(animationOff.current), 1);
    };
  }, []);

  return (
    <nav className="relative flex flex-col lg:flex-row flex-wrap lg:flex-no-wrap lg:h-24 justify-between items-center nav_background">
      <div className="flex justify-between w-full sm:w-auto sm:justify-center gap-2  items-center  ">
        <Link className="flex items-center" to="/main">
          <img src="/img/logoSM.png" alt="logoSM" className="h-24" />
          {location.pathname === '/main' ? (
            <img
              className="hidden sm:block"
              src="/img/nav/navHome_active.png"
              alt="navHome"
            />
          ) : (
            <img
              className="hidden sm:block"
              src="/img/nav/navHome.png"
              alt="navHome"
            />
          )}
        </Link>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => {
            setAnimation(false);
            animationOn.current = window.setTimeout(
              () => setAnimation(true),
              100
            );
            setUserSubMenu(true);
          }}
        >
          <img
            className="mr-1 w-4/5 sm:w-auto "
            src="/img/mobileMenu.png"
            alt="mobileMenu"
          />
        </div>
      </div>
      <ul className="sm:h-24 pt-4 lg:ml-auto lg:mr-4 text-gold stroke-black-text-shadow-3px font-sacramento flex flex-wrap justify-center  sm:flex-no-wrap text-5xl lg:text-6xl items-center">
        <li className="mx-3 hover:scale-110 transform duration-300">
          <NavLink to="/auctions">Auctions</NavLink>
        </li>
        <li className="mx-3 hover:scale-110 transform duration-300">
          <NavLink to="/collection">Collection</NavLink>
        </li>
      </ul>
      <div
        className="nav_user_background hidden top-0 right-0 lg:relative lg:w-32 lg:h-full lg:flex justify-between items-center lg:mr-4 "
        onMouseEnter={() => {
          setAnimation(false);
          animationOn.current = window.setTimeout(() => {}, 100);
          setAnimation(true);
          setUserSubMenu(true);
        }}
      >
        <img
          className="h-full w-1"
          src="/img/nav/navGoldLine.png"
          alt="navLeftLine"
        />
        <UserIcon
          userNick="Admin"
          userCircle="/img/userCircle2.png"
          userImg="https://cdn.pixabay.com/photo/2019/08/21/11/43/portrait-4420815_960_720.jpg"
        />
        <img
          className="h-full w-1"
          src="/img/nav/navGoldLine.png"
          alt="navRightLing"
        />
      </div>
      {userSubMenu ? (
        <div
          className={`fixed lg:absolute z-50 bottom-0 top-0 right-0 bg-black lg:mt-24 w-full lg:w-32 lg:h-48 flex justify-between lg:mr-4 opacity-0 transition duration-1000 ${
            animation ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => {
            setAnimation(false);
            animationOff.current = window.setTimeout(
              () => setAnimation(false),
              400
            );
            setAnimation(false);
          }}
          onMouseLeave={() => {
            setAnimation(false);
            animationOff.current = window.setTimeout(() => {}, 400);
            setAnimation(false);
          }}
        >
          <img
            className=" transform rotate-180 w-1"
            src="/img/nav/navGoldLine.png"
            alt="navLeftLine"
          />
          <ul className="flex w-full text-5xl lg:text-3xl flex-col text-gold stroke-black-text-shadow-3px items-center justify-evenly font-sacramento text-center">
            <li className="hover:scale-125 transform duration-300">
              <NavLink to="/main">Profile</NavLink>
            </li>
            <li className="hover:scale-125 transform duration-300">
              <NavLink to="/main">Help</NavLink>
            </li>
            <li className="hover:scale-125 transform duration-300">
              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
          <img
            className="transform rotate-180 w-1 "
            src="/img/nav/navGoldLine.png"
            alt="navRightLing"
          />
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
