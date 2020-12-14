import React from 'react';
import Header from '../../Helpers/Header';
import ItemTemplate from '../../Helpers/ItemTemplate';

export default function CollectionPage() {
  const AUCTIONS_ITEMS = [];
  for (let index = 0; index < 16; index++) {
    AUCTIONS_ITEMS.push(<ItemTemplate key={index} id={index} edit={true} />);
  }

  return (
    <section className="flex-grow background">
      <div className="flex flex-col lg:mx-20 lg:my-4 border-4 border-black justify-center bg-gray-400 gap-4 rounded-lg bg-opacity-25">
        <Header />
        <div className="items_scroll h-60vh flex flex-wrap gap-5 justify-center overflow-y-auto border-r-8 border-transparent items_list">
          {AUCTIONS_ITEMS}
        </div>
      </div>
    </section>
  );
}
