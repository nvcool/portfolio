import { NavLink, useLocation } from "react-router";
import { MenuModal } from "../modal/MenuModal";

const links = [
  { name: "roman-gribov", link: "/" },
  { name: "_hello", link: "/" },
  { name: "_about-me", link: "/about" },
  { name: "_projects", link: "/projects" },
  { name: "_contact-me", link: "/contact" },
];

const firstLink = links.slice(0, 1);
const middleLinks = links.slice(1, 4);
const lastLink = links.slice(4);

export const Header = () => {
  const location = useLocation(); //Сохраняет текущее полжение(URL)

  return (
    <header className="">
      <nav className="flex justify-between border-b-[1px] border-[#1E2D3D] lg:grid lg:justify-normal">
        <ul className="grid items-center sm:grid-cols-none lg:grid-cols-[311px_1fr_1fr_1fr]">
          <li className="z-10 flex w-full max-w-[311px]">
            {firstLink.map((link) => {
              return (
                <NavLink
                  className="relative w-full border-[#1E2D3D] py-4 pl-4 whitespace-nowrap transition-colors ease-in hover:text-white lg:border-r-[1px]"
                  key={link.link}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </li>

          <li className="hidden lg:flex">
            {middleLinks.map((link) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    `nav ${isActive ? "active-link" : ""} relative border-l-[1px] px-4 py-4 pl-4 whitespace-nowrap first:border-l-[0px] last:border-r-[1px]`
                  }
                  key={link.link}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </li>

          <li className="col-span-2 hidden justify-end lg:flex">
            {lastLink.map((link) => {
              return (
                <NavLink
                  className={`nav ${location.pathname === link.link ? "active-link" : ""} relative w-full max-w-[153px] border-l-[1px] px-5 py-4 whitespace-nowrap`}
                  key={link.link}
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </li>
        </ul>
        <MenuModal
          firstLink={firstLink}
          middleLinks={middleLinks}
          lastLink={lastLink}
        />
      </nav>
    </header>
  );
};
