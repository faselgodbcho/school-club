import { useEffect, useState } from "react";

export default function Sidebar() {
  const [user, setUser] = useState<
    { name: string; id: string; grade: number; subClass: string } | undefined
  >(undefined);


  const credentials = JSON.parse(localStorage.getItem("authData") || "{}");
  const [profileImg, setProfileImg] = useState<string>("")

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://techclub-6c39263b7807.herokuapp.com", {
          method: "GET",
          headers: {
            authorization: `Bearer ${credentials.access}`,
          },
        });

        const data = await res.json();
        console.log(data);

        setUser({
          name: data.name,
          grade: data.grade,
          id: data.unique_id,
          subClass: data.sub_class,
        });

        setProfileImg(data.profile)
      } catch (e) {
        console.error(e);
      }
    };
    fetchUser();
  }, []);

  const handleProfileChange = async (e: any) => {
    const value =
        URL.createObjectURL(e.target.files[0])
        
    setProfileImg(value)

    const res = await fetch(
      "https://techclub-6c39263b7807.herokuapp.com/profile/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${credentials.access}`,
        },
        body: JSON.stringify({ pic: profileImg, bio: "" }),
        credentials: "include",
      }
    );
  };



  return (
    <div className="flex flex-col gap-6 bg-[#383838] p-4 rounded-2xl h-full">
      <div className="w-32 h-32 mx-auto mt-4 relative">
            <img
                src={profileImg}
                className="w-full h-full rounded-full"
              />
          <div>
            <label
              htmlFor="studentImage"
              className="p-2 absolute bg-[#FF7F50] w-8 h-8 rounded-full -right-3 bottom-4 text-white bg-secondary cursor-pointer"
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.753 1.753 0 0 1-.699.409l-5.523 1.68a.748.748 0 0 1-.747-.188.748.748 0 0 1-.188-.747l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963ZM4.708 16.361a.26.26 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.253.253 0 0 0 .1-.059l10.273-9.806-2.94-2.939-10.279 9.813ZM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5Z"></path></svg>
            </label>
          </div>

          <input
            className="hidden w-full py-2 rounded focus:outline-none px-7"
            type="file"
            id="studentImage"
            name="studentImage"
            accept="image/jpeg, image/png, image/jpg"
            onChange={handleProfileChange}
          />
      </div>

      <div className="w-[250px] text-white">
        <p> Name: {user?.name}</p>
        <p> Id: {user?.id}</p>
        <p> Grade: {user?.grade}</p>
        <p> Sub Class: {user?.subClass}</p>
      </div>
    </div>
  );
}
