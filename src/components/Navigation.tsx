import { BookmarkIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";

import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

const routes = [
  {
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <SearchIcon />,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: <BookmarkIcon />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <UserIcon />,
  },
];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-2 items-center sm:items-stretch ">
        {routes.map(({ name, path, icon }) => (
          <NavigationLink key={path} icon={icon} path={path} name={name} />
        ))}
      </ul>
    </nav>
  );
}

type NavigationLinkProps = {
  name: string;
  path: string;
  icon: ReactNode;
};

function NavigationLink({ name, path, icon }: NavigationLinkProps) {
  return (
    <li className="hover:bg-primary/10 transition rounded-md cursor-pointer">
      <NavLink
        className={({ isActive }) =>
          `flex gap-4 py-2 px-2 outline-none ring-primary focus:ring-1 ring-inset ${
            isActive ? "bg-primary/10" : ""
          }`
        }
        to={path}
      >
        <i>{icon}</i>
        <span className="hidden sm:block">{name}</span>
      </NavLink>
    </li>
  );
}
