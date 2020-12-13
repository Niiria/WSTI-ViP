import React, { useState } from 'react';

export default function HeaderCategorySubMenu() {
  const [categorySubMenu, setCategorySubMenu] = useState(false);
  const [animation, setAnimation] = useState(false);
  return (
    <div className="relative h-full w-1/2 lg:w-1/5">
      <div className="flex justify-center items-center h-full  ">
        <p
          onMouseEnter={() => {
            setAnimation(false);
            const timer = setTimeout(() => {
              setAnimation(true);
            }, 100);
            setCategorySubMenu(true);
            return () => clearTimeout(timer);
          }}
          className="font-sofia lg:text-4xl text-2xl cursor-pointer"
        >
          Category
        </p>
      </div>
      {categorySubMenu ? (
        <div
          className={`fixed lg:absolute z-50 bg-black p-2 rounded-b-lg bg-opacity-75 w-full opacity-0 transition duration-1000 ${
            animation ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => {
            setAnimation(false);
            const timer = setTimeout(() => {
              setCategorySubMenu(false);
            }, 400);
            return () => clearTimeout(timer);
          }}
          onMouseLeave={() => {
            setAnimation(false);
            const timer = setTimeout(() => {
              setCategorySubMenu(false);
            }, 400);
            return () => clearTimeout(timer);
          }}
        >
          <ul className="flex w-full text-5xl lg:text-3xl flex-col  text-gold stroke-black-text-shadow-3px items-center justify-evenly font-sacramento text-center">
            <li className="hover:scale-125 transform duration-300 cursor-pointer">
              Category 1
            </li>
            <li className="hover:scale-125 transform duration-300 cursor-pointer">
              Category 2
            </li>
            <li className="hover:scale-125 transform duration-300 cursor-pointer">
              Category 3
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
