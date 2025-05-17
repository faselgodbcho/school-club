import { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";

export default function ChatBody() {
  // const { credentials } = useAuth();
  const navigate = useNavigate();

  const credentials = JSON.parse(localStorage.getItem("authData") || "{}");

  useLayoutEffect(() => {
    const fetchChats = async () => {
      try {
        const accesstoken = credentials.access;
        const res = await fetch(
          "https://techclub-6c39263b7807.herokuapp.com/chatlist/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${accesstoken}`,
            },
            credentials: "include",
          }
        );

        const data = await res.json();

        if (res.status === 401) {
          console.log("Unauthorized access. Please login again.");
          navigate("/auth");
        }

        if (!res.ok) {
          throw new Error("Failed to fetch chats");
        }

        console.log("data", data);
        setChat(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchChats();

    const validAccessToken = async () => {
      try {
        if (!credentials || !credentials.access) {
          console.log("No AccessToken detected. Please login");
          navigate("/auth");
        }
      } catch (e) {
        console.error(e);
      }
    };

    validAccessToken();
  }, [credentials, navigate]);

  // const [chats, setChat] = useState<
  //  { id: number; name: string; message: string; me: boolean }[] | []
  // >([]);
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const accesstoken = credentials.access;
        const res = await fetch(
          "https://techclub-6c39263b7807.herokuapp.com/chatlist/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${accesstoken}`,
            },
            credentials: "include",
          }
        );

        const data = await res.json();

        if (res.status === 401) {
          console.log("Unauthorized access. Please login again.");
          navigate("/auth");
        }

        if (!res.ok) {
          throw new Error("Failed to fetch chats");
        }

        console.log("data", data);
        setChat(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchChats();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://techclub-6c39263b7807.herokuapp.com/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${credentials.access}`,
          },
          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      setMessage("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col mt-16 rounded-2xl bg-[#535151] w-[800px] h-[500px]">
      <div className="flex flex-col w-full h-full gap-8 p-8 overflow-auto scrollbar-hide max-w-[800px]">
        {chats.map((chat) => (
          <div
            className={`flex gap-2 items-center ${
              chat.me ? "self-end" : "self-start"
            }`}
            key={chat.id}
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
        ))}
      </div>
      <div className="px-8 py-4 bg-[#383838]">
        <form className="flex items-center gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write a message..."
            className="px-4 py-4 w-[356px] rounded-2xl bg-[#D9D9D9] outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <span className="mt-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
