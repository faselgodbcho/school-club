import { links } from "../../constants";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full text-2xl text-white bg-[#383838] rounded-2xl py-6 font-bold capitalize text-center font-[montserrat]">
      <ul className="flex justify-center items-center gap-16">
        {links.map((link) => (
          <li key={`${link.text}`}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
