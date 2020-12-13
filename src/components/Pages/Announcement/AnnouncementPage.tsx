import React from 'react';

export default function AnnouncementPage() {
  document.title = 'ViP Announcement';
  return (
    <section className="flex flex-grow flex-col justify-center  lg:flex-row background  text-white">
      <div className="flex flex-col items-center bg-black bg-opacity-75 lg:w-1/3 m-10 rounded-lg p-2 gap-2 ">
        <img
          className="min-w-300"
          src="/img/announcement.png"
          alt="announcement"
        />
        <ul className=" flex flex-col font-dancing_script text-center justify-evenly text-3xl">
          <li>
            <p>Created by: Admin123</p>
          </li>
          <li>
            <p>Date: 25-01-2020</p>
          </li>
          <li>
            <p>Additional note:</p>
            <p className="font-poppins text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              est odio hic nihil. Totam harum voluptatibus ut doloribus delectus
              vero ipsa dicta accusantium libero est, nisi recusandae inventore
              ea quae.
            </p>
          </li>
        </ul>
        <img className="w-16" src="/img/badgeGoldenTree.png" alt="Badge" />
      </div>
      <div className="lg:w-2/3 m-10 text-center bg-black rounded-lg bg-opacity-50">
        <h1 className="text-gold font-dancing_script text-6xl">
          About Accounts
        </h1>
        <article className="p-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            explicabo optio aperiam, totam, similique natus molestias, in nam
            animi facere aliquid quis labore est. In cupiditate quia cum
            repudiandae perferendis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic ipsam, soluta incidunt non sequi sapiente fuga
            iste expedita id autem doloremque suscipit adipisci atque debitis
          </p>
          <p>
            quasi sunt molestias nostrum natus! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Cupiditate, optio eius eligendi
            officiis corrupti aliquid rem, quae a aut perferendis accusantium
            provident voluptatem iure modi nemo explicabo quam minus illum!
          </p>
        </article>
      </div>
    </section>
  );
}
