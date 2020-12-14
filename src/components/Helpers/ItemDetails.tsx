import React, { useState } from 'react';
import UserIcon from './UserIcon';
import ZoomModule from './ZoomModule';

export default function ItemDetails(props: any) {
  const [zoom, setZoom] = useState(false);
  const [owner, setOwner] = useState(false);
  const [edit, setEdit] = useState('20000$');

  return (
    <section className="flex-grow background py-2">
      <div className="flex flex-col h-full sm:flex-row lg:mx-20 items-center justify-center border-4 border-black bg-gray-400 gap-4 rounded-lg bg-opacity-25">
        <div className="sm:w-2/5 w-full flex items-center justify-center">
          <div className="bg-yellow-200 bg-opacity-50 rounded-lg m-2 border-4 border-black">
            <img
              className="w-full h-full object-cover rounded-lg p-2"
              src="https://cdn.pixabay.com/photo/2017/10/31/02/35/fantasy-2904098_960_720.jpg"
              alt="img"
              onClick={() => setZoom(true)}
            />
            {zoom ? (
              <ZoomModule
                img="https://cdn.pixabay.com/photo/2017/10/31/02/35/fantasy-2904098_960_720.jpg"
                setZoom={setZoom}
              />
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          className="sm:w-2/5 w-full h-full  gap-2 flex flex-col justify-start items-center text-center"
          onClick={() => setOwner(!owner)}
        >
          {owner ? (
            <textarea
              id="h1"
              className=" line-height-4rem block h-32 text-center py-1  overflow-hidden text-5xl  break-words resize-none text-gold  w-full stroke-black-text-shadow-3px font-sofia"
              value={`White Miss ${props.match.params.id}`}
              onChange={(e) => {}}
            />
          ) : (
            <h1 className="text-5xl text-gold stroke-black-text-shadow-3px h-32 font-sofia">
              White Miss {props.match.params.id}
            </h1>
          )}

          <div className="text-white w-full stroke-black-text-shadow-3px">
            <p className="text-2xl">Description:</p>
            <article className="overflow-auto h-60vh font-poppins w-full items_scroll p-2">
              {owner ? (
                <textarea
                  id="h1"
                  className="block text-black h-full text-center py-1 break-words overflow-x-hidden items_scroll resize-none w-full "
                  value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sit eaque, ducimus facere veniam voluptate eius hic quaerat
                  exercitationem officiis ad quod doloremque deleniti iusto
                  corporis beatae nulla et perspiciatis. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Odit molestiae dolores
                  ipsum, iure veniam hic, deleniti vitae nemo adipisci corrupti
                  voluptas dicta? Culpa corrupti sequi assumenda quibusdam id
                  molestiae consectetur?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error porro fugiat exercitationem sequi a
                  in, quaerat molestiae non temporibus autem, iste nihil vel
                  pariatur sit est laboriosam voluptates? Sed, quaerat?"
                  onChange={(e) => {}}
                />
              ) : (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  sit eaque, ducimus facere veniam voluptate eius hic quaerat
                  exercitationem officiis ad quod doloremque deleniti iusto
                  corporis beatae nulla et perspiciatis. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Odit molestiae dolores
                  ipsum, iure veniam hic, deleniti vitae nemo adipisci corrupti
                  voluptas dicta? Culpa corrupti sequi assumenda quibusdam id
                  molestiae consectetur?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error porro fugiat exercitationem sequi a
                  in, quaerat molestiae non temporibus autem, iste nihil vel
                  pariatur sit est laboriosam voluptates? Sed, quaerat?
                </p>
              )}
            </article>
          </div>
        </div>
        <div className="w-full sm:w-1/5 flex flex-col gap-2 m-4  justify-start items-center h-full ">
          <UserIcon
            userNick="User1"
            userCircle="/img/userCircle2.png"
            userImg="https://cdn.pixabay.com/photo/2017/10/31/02/35/fantasy-2904098_960_720.jpg"
          />
          <ul className="flex flex-col gap-2 text-3xl text-center justify-center items-center text-white font-dancing_script stroke-black-text-shadow-3px ">
            <li className="flex">Owner: User123</li>
            <li className="flex">Verified: Yes</li>
            <li className="flex">Reputation: 150</li>
            <li className="flex flex-col items-center">
              <p>Badges: </p>
              <ul>
                <li>
                  <img
                    className="w-20"
                    src="/img/badgeGoldenTree.png"
                    alt="badge1"
                  />
                </li>
              </ul>
            </li>
            <li className="flex flex-col">
              {owner ? (
                <>
                  <textarea
                    id="h1"
                    className="block text-center w-40  overflow-hidden break-words resize-none text-gold  stroke-black-text-shadow-3px "
                    value={`Price: ${edit}`}
                    onChange={(e) => {
                      setEdit(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="logInPage_btn_background  hover:bg-orange-300 transform duration-1000 transition stroke-black-text-shadow-3px border-4 h-16 border-black text-gold text-5xl px-8 font-sacramento rounded-lg"
                  >
                    Sell
                  </button>
                </>
              ) : (
                <>
                  <p className="text-gold w-40 ">Price: 20000$</p>
                  <button
                    type="button"
                    className="logInPage_btn_background  hover:bg-orange-300 transform duration-1000 transition stroke-black-text-shadow-3px border-4 h-16 border-black text-gold text-5xl px-8 font-sacramento rounded-lg"
                  >
                    Buy
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
