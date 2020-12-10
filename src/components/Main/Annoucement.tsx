import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  widthClass: string;
}

export default function Annoucement({ widthClass }: Props) {
  return (
    <div
      className={`bg-black rounded-lg flex items-center justify-evenly gap-2 flex-col p-4 ${widthClass}`}
    >
      <img src="/img/announcement.png" alt="announcement_img" />
      <p className="text-white text-center font-poppins text-1xl ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        repellat veniam doloribus pariatur, praesentium quos dolor reprehenderit
        ab labore, ipsa impedit officia odio rem, minus beatae sit laborum
        commodi eveniet.
      </p>
      <Link to="/announcement">
        <p className="text-gold text-5xl text-shadow-gold transition transform duration-700 hover:scale-110 text-center font-sacramento">
          Read more
        </p>
      </Link>
    </div>
  );
}
