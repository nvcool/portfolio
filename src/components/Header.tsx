import { NavLink } from "react-router";

const links = [
  { name: "roman-gribov", link: "/" },
  { name: "_hello", link: "home" },
  { name: "_about-me", link: "about" },
  { name: "_projects", link: "projects" },
  { name: "_contact-me", link: "contact" },
];

const firstLink = links.slice(0, 1);
const middleLinks = links.slice(1, 4);
const lastLink = links.slice(4);

export const Header = () => {
  return (
    <header className=" text-[#607B96] ">
      <nav className=" border-b-[1px] border-[#1E2D3D]">
        <ul className="grid grid-cols-[_311px_430px_1fr] items-center">
          <li className="flex">
            {firstLink.map((link) => {
              return (
                <NavLink
                  className="hover:text-white transition-colors ease-in pl-4 px-4 nav w-full py-4 "
                  key={link.link}
                  to={link.link}>
                  {link.name}
                </NavLink>
              );
            })}
          </li>

          <li className="flex ">
            {middleLinks.map((link) => {
              return (
                <NavLink
                  className="hover:text-white transition-colors ease-in pl-4 px-4 nav w-full border-l-[1px] last:border-r-[1px] border-[#1E2D3D] py-4"
                  key={link.link}
                  to={link.link}>
                  {link.name}
                </NavLink>
              );
            })}
          </li>

          <li className="flex  justify-end">
            {lastLink.map((link) => {
              return (
                <NavLink
                  className="hover:text-white transition-colors ease-in
                  border-l-[1px] border-[#1E2D3D] nav py-4 px-5"
                  key={link.link}
                  to={link.link}>
                  {link.name}
                </NavLink>
              );
            })}
          </li>
        </ul>
      </nav>
    </header>
  );
};
