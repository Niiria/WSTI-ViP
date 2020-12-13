import React from 'react';
import Header from '../../Helpers/Header';
import ItemTemplate from '../../Helpers/ItemTemplate';

export default function AuctionsPage() {
  const AUCTIONS_ITEMS = [];
  for (let index = 0; index < 16; index++) {
    AUCTIONS_ITEMS.push(<ItemTemplate key={index} id={index} />);
  }

  return (
    <section className="flex-grow background">
      <div className="flex flex-col lg:mx-20 lg:my-4 justify-center bg-gray-400 gap-4 rounded-lg bg-opacity-25">
        <Header />
        <div className="h-60vh flex flex-wrap gap-5 justify-center overflow-y-auto border-r-8 border-transparent items_list">
          {AUCTIONS_ITEMS}
        </div>
      </div>
    </section>
  );
}
