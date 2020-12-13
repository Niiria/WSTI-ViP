import React, { useState } from 'react';
import HeaderCategoryModule from './HeaderCategoryModule';

export default function Header() {
  const [sort, setSort] = useState({ name: 'Name', state: false });

  const handleSort = (e: any) => {
    console.log(e.target.id);
    if (sort.name === e.target.id)
      setSort({ name: e.target.id, state: !sort.state });
    else setSort({ name: e.target.id, state: false });
  };
  return (
    <header className="header_background p-2 relative flex flex-col lg:flex-row justify-evenly px-2  stroke-black-text-shadow-3px text-white items-center lg:gap-4  rounded-t-lg border-b-4 border-black">
      <div className="flex w-full lg:w-auto justify-evenly lg:gap-4 lg:justify-between items-center">
        <HeaderCategoryModule />
        <form
          className="lg:text-3xl text-2xl flex flex-col"
          autoComplete="off"
          action="
      "
        >
          <label htmlFor="search">
            Search:
            <input
              className="m-2 rounded-lg auto w-3/5"
              id="search"
              type="text"
            />
          </label>
        </form>
      </div>

      <ul className="flex justify-evenly w-full lg:w-auto gap-4 lg:text-3xl">
        <li
          id="Name"
          className={`flex flex-col items-center cursor-pointer ${
            sort.name === 'Name' ? 'text-gold' : ''
          }`}
          onClick={handleSort}
        >
          Name
          {sort.name === 'Name' && sort.state ? (
            <img className="w-10" src="/img/sortArrowUp.png" alt="sortArrow" />
          ) : (
            <img
              id="Name"
              className="w-10"
              src="/img/sortArrowDown.png"
              alt="sortArrow"
            />
          )}
        </li>
        <li
          id="Price"
          className={`flex flex-col items-center cursor-pointer ${
            sort.name === 'Price' ? 'text-gold' : ''
          }`}
          onClick={handleSort}
        >
          Price
          {sort.name === 'Price' && sort.state ? (
            <img className="w-10" src="/img/sortArrowUp.png" alt="sortArrow" />
          ) : (
            <img
              id="Price"
              className="w-10"
              src="/img/sortArrowDown.png"
              alt="sortArrow"
            />
          )}
        </li>
        <li
          id="Views"
          className={`flex flex-col items-center cursor-pointer ${
            sort.name === 'Views' ? 'text-gold' : ''
          }`}
          onClick={handleSort}
        >
          Views
          {sort.name === 'Views' && sort.state ? (
            <img className="w-10" src="/img/sortArrowUp.png" alt="sortArrow" />
          ) : (
            <img
              id="Views"
              className="w-10"
              src="/img/sortArrowDown.png"
              alt="sortArrow"
            />
          )}
        </li>
        <li
          id="Rank"
          className={`flex flex-col items-center cursor-pointer ${
            sort.name === 'Rank' ? 'text-gold' : ''
          }`}
          onClick={handleSort}
        >
          Rank
          {sort.name === 'Rank' && sort.state ? (
            <img className="w-10" src="/img/sortArrowUp.png" alt="sortArrow" />
          ) : (
            <img
              id="Rank"
              className="w-10"
              src="/img/sortArrowDown.png"
              alt="sortArrow"
            />
          )}
        </li>
      </ul>
    </header>
  );
}
