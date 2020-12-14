import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ZoomModule from '../../Helpers/ZoomModule';

interface Props {
  widthClass: string;
  id: number;
}

export default function HotAuction({ id, widthClass }: Props) {
  const [zoom, setZoom] = useState(false);
  return (
    <div
      className={`flex flex-col justify-evenly items-center  auction_background rounded-lg p-2 border-black border-4 ${widthClass}`}
    >
      <h1 className="font-sofia text-4xl text-center">Today's hot auction</h1>
      <p className="px-4 text-1xl font-poppins text-center">
        White Miss picture original with scrathes and stains. Artist: Unknown
      </p>
      <div className="w-full h-250-p ">
        <img
          className="w-full h-full rounded-lg object-cover"
          src="https://cdn.pixabay.com/photo/2018/04/01/09/56/woman-3280409_960_720.jpg"
          alt="hotAuction_img"
          onClick={() => setZoom(true)}
        />
        {zoom ? (
          <ZoomModule
            img="https://cdn.pixabay.com/photo/2018/04/01/09/56/woman-3280409_960_720.jpg"
            setZoom={setZoom}
          />
        ) : (
          ''
        )}
      </div>

      <p className="px-4 text-1xl font-poppins text-center">Vendor: User123</p>
      <p className="px-4 text-2xl font-bold font-poppins text-center">
        Starting bid: 250000$
      </p>

      <Link to={`/auctions/${id}`}>
        <button
          type="button"
          className="stroke-black-text-shadow-3px transition duration-500 hover:bg-black auction_btn_background  border-4 px-6 border-black rounded-lg"
        >
          <p className="pt-1 text-gold font-sacramento text-3xl">Details</p>
        </button>
      </Link>
    </div>
  );
}
