import { MdPlayArrow } from "react-icons/md";

interface Route {
  id: number;
  path: string;
  name: string;
}

interface NavBarLinkAPIProps {
  route: Route;
  isActive: boolean;
}

const NavBarLinkAPI: React.FC<NavBarLinkAPIProps> = ({ route, isActive }) => {
  return (
    <ul className={`text-start text-black 2lg:dark:text-white mb-2 2lg:mb-0 font-bold ${isActive ? "text-[#4d27a3] " : ""}`}>
      <button className={`text-start pl-3 pr-2 py-2 md:mx-1 rounded-lg  ${isActive ? " text-[#4d27a3] " : "hover:text-[#4d27a3]"} duration-200`}>
        <div className="flex items-center">
          {route.name} <MdPlayArrow className="text-base font-medium mt-0.5 2lg:mt-0" />
        </div>
      </button>
    </ul>
  );
};

export default NavBarLinkAPI;
