export default function Sidebar() {
  const user = {
    name: "Henok Henon",
    id: 9878,
    grade: 10,
    subClass: "Developer",
  };

  return (
    <div className="flex flex-col gap-6 bg-[#383838] p-4 rounded-2xl h-full">
      <div className="w-28 h-28 rounded-full bg-white mx-auto mt-4"></div>

      <div className="w-[250px] text-white">
        <p> Name: {user.name}</p>
        <p> Id: {user.id}</p>
        <p> Grade: {user.grade}</p>
        <p> Sub Class: {user.subClass}</p>
      </div>
    </div>
  );
}
