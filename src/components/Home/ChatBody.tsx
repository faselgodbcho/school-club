import { useState } from "react";

export default function ChatBody() {
  const [chats, setChat] = useState([
    {
      id: 1,
      name: "User 1",
      message: "message by user 0 and it hjfhj jgh hkhv is shown sth",
      me: false,
    },
    {
      id: 2,
      name: "User 1",
      message: "message by user 0 and it hjfhj jgh hkhv is shown sth",
      me: true,
    },
    {
      id: 3,
      name: "User 1",
      message: "message by user 0 and it hjfhj jgh hkhv is shown sth",
      me: false,
    },
    {
      id: 4,
      name: "User 1",
      message: "message by user 0 and it hjfhj jgh hkhv is shown sth",
      me: true,
    },
    {
      id: 5,
      name: "User 1",
      message: "message by user 0 and it hjfhj jgh hkhv is shown sth",
      me: false,
    },
    {
      id: 6,
      name: "me",
      message: "message by user 0 and it hjfhj jgh hkhv is shown sth",
      me: true,
    },
  ]);

  return (
    <div className="flex flex-col mt-16 rounded-2xl bg-[#535151] w-[800px] h-[500px]">
      <div className="flex flex-col w-full h-full gap-8 p-8 overflow-auto scrollbar-hide max-w-[800px]">
        {/* {chats.map((chat) => (
          <div
            className={`flex gap-2 items-center ${
              chat.me ? "self-end" : "self-start"
            }`}
          >
            {!chat.me && (
              <div className="w-20 h-20 rounded-full bg-white mx-auto mt-4"></div>
            )}
            <div
              key={chat.id}
              className="bg-[#D9D9D9]  text-[#6B6A6A] rounded-2xl p-3 max-w-[275px]"
            >
              <p className="text-[15px] text-black/70">{chat.name}</p>
              <p className="text-[14px]"> {chat.message}</p>
            </div>
          </div>
        ))} */}
      </div>
      <div className="px-8 py-4 bg-[#383838]">
        <form className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Write a message..."
            className="px-4 py-4 w-[356px] rounded-2xl bg-[#D9D9D9] outline-none"
          />

          <span className="mt-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
          </span>
        </form>
      </div>
    </div>
  );
}
