import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  edit: boolean;
}

export default function ItemTemplate({ id, edit }: Props) {
  return (
    <div className="min-w-200 flex flex-col gap-1 text-center lg:w-1/5 font-sofia text-2xl p-2 auction_background border-black border-2 rounded-lg">
      <h1 className="break-words h-20">Auction template {id}</h1>
      <div className="max-h-200">
        <img
          className=" w-full h-full object-cover rounded-lg"
          src="https://cdn.pixabay.com/photo/2017/08/05/22/12/plant-2586071_960_720.jpg"
          alt="ItemImg"
        />
      </div>

      <p className="px-4 text-base font-poppins text-center">Vendor: User123</p>
      <p className="px-4 text-base font-bold font-poppins text-center">
        Starting bid: 250000$
      </p>
      {edit ? (
        <Link to={`/collection/${id}`}>
          <button
            type="button"
            className="stroke-black-text-shadow-3px transition duration-500 hover:bg-black auction_btn_background  border-4 px-4 border-black rounded-lg"
          >
            <p className="pt-1 text-gold font-sacramento text-2xl">Enter</p>
          </button>
        </Link>
      ) : (
        <Link to={`/auctions/${id}`}>
          <button
            type="button"
            className="stroke-black-text-shadow-3px transition duration-500 hover:bg-black auction_btn_background  border-4 px-4 border-black rounded-lg"
          >
            <p className="pt-1 text-gold font-sacramento text-2xl">Enter</p>
          </button>
        </Link>
      )}
    </div>
  );
}
